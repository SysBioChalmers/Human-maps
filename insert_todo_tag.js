//Try with tiny dict
//Rename the outputfile
//const OG = 'subsystem/svg/glycerophospholipid_metabolism.svg';
const copy = 'subsystem/svg/glycerophospholipid_metabolism_copy.svg';
const firstTest = {"SMS9": null}
const glycerophospholipidMetabolismDict= {
    "SMS9": null,
    "PCHOL2PALM_HSPLA2": null,
    "LPS5e": null,
    "PEDH14_HSPLA2": null,
    "PCHOLPALM_HSPLA2": null,
    "PEDH12_HSPLA2": null,
    "LPASE": null,
    "PCHOL2OLE_HSPLA2": null,
    "DOCOHEXETHc": null,
    "LPS6e": null,
    "IDL_HSDEG": null,
    "HDL_HSSYN": null,
    "TETDECAETH": null,
    "SMS7": null,
    "PEDH161_HSPLA2": null,
    "SMS8": null,
    "SMS5": null,
    "SMS6": null,
    "SMS3": null,
    "SMS4": null,
    "PCHOLDET_HSPLA2": null,
    "SMS1": null,
    "SMS2": null,
    "PCHOLN226_HSPLA2": null,
    "DIDECAETH": null,
    "PCHOLN204_HSPLA2": null,
    "VLDL_HSDEG": null,
    "PCHOLOLE_HSPLA2": null,
    "LDL_HSDEG": null,
    "ARACHETH": null,
    "PEDH203_HSPLA2": null,
    "PE2LINL_HSPLA2": null,
    "PAILAR_HSPLA2": null,
    "PCHOLMYR_HSPLA2": null,
    "STEETH": null,
    "HMR_8423": null,
    "VLDL_HSSYN": null,
    "PCHOLN1836_HSPLA2": null,
    "PCHOLHEP_HSPLA2": null,
    "PCHOLN183_HSPLA2": null,
    "PCHOL2LINL_HSPLA2": null,
    "PEOLE_HSPLA2": null,
    "PCHOLN28_HSPLA2": null,
    "LPS7e": null,
    "PCHOLN224_HSPLA2": null,
    "PEPALM": null,
    "PAILPALM_HSPLA2": null,
    "AGLPT": "MAR07597",
    "RE3267E": null,
    "RE3267G": null,
    "RE3267N": null,
    "RE3267M": null,
    "CHYLO_HSSYN": null,
    "RE3267R": null,
    "PEDH17_HSPLA2": null,
    "PEDH13_HSPLA2": null,
    "PEDH15_HSPLA2": null,
    "PCHOLN19_HSPLA2": null,
    "PCHOLN15_HSPLA2": null,
    "PCHOLAR_HSPLA2": null,
    "PCHOLSTE_HSPLA2": null,
    "PE203_HSPLA2": null,
    "PELINL_HSPLA2": null,
    "LDL_HSSYN": null,
    "PLA2": "MAR08522",
    "PEPALM_HSPLA2": null,
    "DHAPA": "MAR07588",
    "PCHOLN281_HSPLA2": null,
    "PLA2_2": null,
    "PCHOLN205_HSPLA2": null,
    "DHAPAx": "MAR08353",
    "AGPSx": "MAR07594",
    "PCHOL2STE_HSPLA2": null,
    "PCHOLN2254_HSPLA2": null,
    "PE224_HSPLA2": null,
    "PCHOLN201_HSPLA2": null,
    "IDL_HSSYN": null,
    "HDL_HSDEG": null,
    "OLEETH": null,
    "r0202m": null,
    "TRIDECETH": null,
    "DOCTETETH": null,
    "SMS15": null,
    "SMS14": null,
    "PCHOLPALME_HSPLA2": null,
    "SMS16": null,
    "PLA2_2e": null,
    "SMS11": null,
    "HEXDECEETH": null,
    "SMS10": null,
    "SMS13": null,
    "SMS12": null,
    "PCHOLDOC_HSPLA2": null,
    "CHYLO_HSDEG": null,
    "PCHOLN261_HSPLA2": null,
    "PCHOLN225_HSPLA2": null,
    "AGPAT2": null,
    "AGPAT3": null,
    "AGPAT4": null,
    "HEPDECETH": null,
    "PCHOLN203_HSPLA2": null,
    "PCHOLN24_HSPLA2": null,
    "PENDECAETH": null,
    "MYELIN_HSSYN": null,
    "PCHOLLINL_HSPLA2": null,
    "PEAR_HSPLA2": null,
    "PE226_HSPLA2": null,
    "PELINETH": null,
    "DIHOLINETH": null,
    "PCHOLDEIC_HSPLA2": null
};
for (const [reactionId, newId] of Object.entries(glycerophospholipidMetabolismDict)) {
    if (newId === null) {
        const replace = require('replace-in-file');
        const options = {
            files: copy,
            from: new RegExp(`${reactionId}`, 'g'),
            to: `TODO${reactionId}`,
            countMatches: true,
        };
        const result = replace.sync(options);
        if (result[0].numMatches != 0) {
            console.log('Inserted TODO in', reactionId);
        };
    } else {
        console.log(reactionId, 'has value, does not need to be deleted');
    }
};