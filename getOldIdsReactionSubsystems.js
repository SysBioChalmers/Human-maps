const fs = require('fs');
const readline = require('readline');
const path = require('path');

const fileResult = 'not_replaced_reactions_ids_SUBSYSTEM_ONLY.json';
//const compartmentFiles = fs.readdirSync('compartment/svg/').map((file)=> `compartment/svg/${file}`);
const subsystemFiles = fs.readdirSync('subsystem/svg/').map((file)=> `subsystem/svg/${file}`);
const filesToSearch = [...subsystemFiles];

async function processLineByLine(fileToSearch) {
    const notUpdatedIds = [];
    const rl = readline.createInterface({
    input: fs.createReadStream(fileToSearch),
    output: process.stdout,
    terminal: false
    });
  
    for await (const line of rl) {
        const match = line.match(/[^\s"]+MAR\d+/);
        if (match) {
            console.log(match)
            //const match2 = line.match(/[^\s"]+MAR\d+/)[0];
            notUpdatedIds.push(match[0]);
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