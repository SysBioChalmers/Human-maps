const fs = require('fs');
const readline = require('readline');
const path = require('path');

const fileResult = 'not_replaced_reactions_ids.json';
const compartmentFiles = fs.readdirSync('compartment/svg/').map((file)=> `compartment/svg/${file}`);
const subsystemFiles = fs.readdirSync('subsystem/svg/').map((file)=> `subsystem/svg/${file}`);
const filesToSearch = [...compartmentFiles, ...subsystemFiles];

async function processLineByLine(fileToSearch) {
    const notUpdatedIds = [];
    const rl = readline.createInterface({
    input: fs.createReadStream(fileToSearch),
    output: process.stdout,
    terminal: false
    });
  
    for await (const line of rl) {
        const match = line.match(/<g id="([^"]+)" class="rea">/);
        if (match && match[1].indexOf('MA') == -1){
            notUpdatedIds.push(match[1]);
        };
    };
    return notUpdatedIds;
};

const getIds = async () => {
    return await Promise.all(filesToSearch.map( async (fileToSearch) => {
        const id = path.basename(fileToSearch);
        const notUpdatedIds = await processLineByLine(fileToSearch);
        const res = { [`${id}`]: notUpdatedIds };
        return res;
    }))
};

(async () => {
    const notUpdatedIdsMapping = await getIds();
    const merged = notUpdatedIdsMapping.reduce((all, current) => ({...all, ...current}), {});
    fs.writeFile(fileResult, JSON.stringify(merged, null, 4), function (err) {
        if (err) return console.log(err);
        console.log('Writing result');
    });
})()