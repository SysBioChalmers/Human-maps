const replace = require('replace-in-file');
const fs = require('fs');

const testString = '<svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" width="15565" height="7289" version="1.2" data-modelname="humanGEM" data-modelversion="1.0.2" data-pluginversion="1.6">';
const res = testString.replace(/data-modelversion="[^"]+"/, 'data-modelversion="1.8.0"');
console.log(testString);
console.log(res);

//const compartmentFiles = fs.readdirSync('compartment/svg/').map((file)=> `compartment/svg/${file}`);
const filesToReplace = fs.readdirSync('UPDATED/').map((file)=> `UPDATED/${file}`);
//const filesToReplace = [...compartmentFiles, ...subsystemFiles];


filesToReplace.forEach((fileName) => {
    console.log('\nReplacing in file ',fileName);
    try {
        const options = {
                files: fileName,
                from: /data-modelversion="[^"]+"/,
                to: 'data-modelversion="1.8.0"',
                countMatches: true,
            };
            const result = replace.sync(options);
        }
    catch (error) {
        console.error('Error occurred:', error);
    }
});