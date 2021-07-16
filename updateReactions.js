const {createInterface} = require("readline");
const {createReadStream, copyFile, readdirSync } = require("fs");

const mappingPath = 'reactions.tsv';
const newIdCol = 0;
const retiredIdCol = 14;

const compartmentFiles = readdirSync('compartment/svg/').map((file)=> `compartment/svg/${file}`);
const subsystemFiles = readdirSync('subsystem/svg/').map((file)=> `subsystem/svg/${file}`);
const filesToReplace = [...compartmentFiles, ...subsystemFiles].slice(8,);

const oldToNew = async () => {
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
};

(async () => {
    console.log(filesToReplace);
    const oldToNewIdMap = await oldToNew();
    filesToReplace.forEach((fileName) => {
        console.log('\nReplacing in file',fileName);
        const replace = require('replace-in-file');
        try {
            for (const [newValue, oldValue] of Object.entries(oldToNewIdMap)) {
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
                    from: new RegExp(`${oldValue}(\n| |")`, 'g'),
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