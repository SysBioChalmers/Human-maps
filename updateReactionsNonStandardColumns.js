const {createInterface} = require("readline");
const {readdirSync, promises: fs} = require("fs");

const mappingPath = 'reactions.tsv';
const newIdCol = 0;
const retiredIdCol = 14;

const compartmentFiles = readdirSync('compartment/svg/').map((file)=> `compartment/svg/${file}`);
const subsystemFiles = readdirSync('subsystem/svg/').map((file)=> `subsystem/svg/${file}`);
const filesToReplace = [...compartmentFiles, ...subsystemFiles];

const oldToNew = async () => {
    const data = await fs.readFile('not_replaced_reactions_ids_UPDATED.json', 'utf8');

    // parse JSON string to JSON object
    const idsMapping = JSON.parse(data);
    //const filtered = Object.entries(idsMapping).filter((k, v) => !!v).map((k, v) => ({ [k]: v}));
    const reduced = Object.values(idsMapping).reduce((all, current) => ({...all, ...current}), {});
    const filtered = Object.fromEntries(Object.entries(reduced).filter(([k, v]) => !!v));
    return filtered;

};

/* const oldToNew = async () => {
    const oldToNewIdMap = {};
    const rl = createInterface({
        input: createReadStream(mappingPath),
        output: process.stdout,
        terminal: false
    });
    
    for await (const data of rl) {
        let columns = data.split("\t");
        if (columns[retiredIdCol] != '""') { 
            oldToNewIdMap[columns[newIdCol].replace(/"/g, '')] = columns[retiredIdCol].replace(/"/g, '');
        }
    }
    console.log('oldToNew done', typeof oldToNewIdMap, Object.keys(oldToNewIdMap).length);
    return oldToNewIdMap;
};*/

(async () => {
    console.log(filesToReplace);
    const oldToNewIdMap = await oldToNew();
    filesToReplace.forEach((fileName) => {
        console.log('\nReplacing in file',fileName);
        const replace = require('replace-in-file');
        try {
            for (const [oldValue, newValue] of Object.entries(oldToNewIdMap)) {
                const options = {
                    files: fileName,
                    from: new RegExp(`<g id="${oldValue}"`, 'g'),
                    to: `<g id="${newValue}"`,
                    countMatches: true,
                };
                const result = replace.sync(options);
                if (result[0].numMatches != 0) {
                    console.log('Replaced (g node)', oldValue,'with', newValue);
                };
                const optionsSecond = {
                    files: fileName,
                    from: new RegExp(`(\n| |")${oldValue}(\n| |")`, 'g'),
                    to: (match) => {
                        return `${newValue}${match[match.length-1]}`
                    },
                    countMatches: true,
                };
                const resultSecond = replace.sync(optionsSecond);
                if (resultSecond[0].numMatches != 0) {
                    console.log('Replaced (other node type)', oldValue,'with', newValue);
                };
            }
        }
        catch (error) {
            console.error('Error occurred:', error);
        }
        
        console.log('\nDONE!\n');
    }
)})()