const fs = require('fs');

let testArray = null;
let idsMapping = '';
const resFile = 'not_replaced_metabolite_ids_UPDATED.json'
fs.readFile('not_replaced_metabolite_ids.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        idsMapping = JSON.parse(data);
        testArray = idsMapping['cytosol_1.svg'];
    }

});

fs.readFile('../metabolites.tsv', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
        console.log(data);
        const resMapping = {};
        for (const [svgFile, missingsArray] of Object.entries(idsMapping)){
        // parse JSON string to JSON object
        const oldToNew = {};
        missingsArray.forEach((oldId) => {
            //const match = data.match(new RegExp(`("${oldId}")`))
            const match = data.match(new RegExp(`(MA[^"]+)".+(;|")${oldId}(;|")`));
            if (match) {
                console.log('MATCH', oldId, match[1]);
                oldToNew[oldId] = match[1];
            } else {
                oldToNew[oldId] = null;
            }
        })
        resMapping[svgFile]= oldToNew;
    }
    fs.writeFile(resFile, JSON.stringify(resMapping, null, 4), function (err) {
        if (err) return console.log(err);
        console.log('Writing result');
    });
}

});