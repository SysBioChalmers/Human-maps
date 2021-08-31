const fs = require('fs');

let idsMapping = '';
const resFile = 'not_replaced_reactions_ids_UPDATED.json'
fs.readFile('not_replaced_reactions_ids.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        idsMapping = JSON.parse(data);
    }

});

fs.readFile('reactions.tsv', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
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