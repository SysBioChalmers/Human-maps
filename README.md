The maps are improved with the [Omix plugin](https://github.com/SysBioChalmers/OMIX_plugin) developed by @pecholleyc.  
This repository is used to track the `*.omx` file generated by [Omix Visualization](https://www.omix-visualization.com). Since the file is essentially a system image file (not a text file), it is tracked with [Git Large File Storage](https://git-lfs.github.com/).

Summary:

|   | Total | pre-processed | Done |
| - | ----------- | ----------- | ---- |
| Compartment | 11 | 11 | 11 |
| Subsystem | 146 | 140 | 97 |


Compartment Maps progress:

| Compartment | Migrated From HMR2 | First Pass | Reviewed | Second Pass | Reviewed | Done  | Resync |
| ----------- | :----------------: | :----: | :------: | :----: | :------: | :---: | :---: |
| Nucleus     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |   :heavy_check_mark: | :heavy_check_mark: |
| Golgi apparatus      | :heavy_check_mark: | :heavy_check_mark:      | :heavy_check_mark:       | | | :heavy_check_mark: | :heavy_check_mark: |
| Lysosome    | :heavy_check_mark: | :heavy_check_mark:      | :heavy_check_mark:       | :heavy_check_mark:    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Peroxisome  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | | | :heavy_check_mark: | :heavy_check_mark: |
| Endoplasmic reticulum  | :heavy_check_mark: |  :heavy_check_mark: |  :heavy_check_mark: | | | :heavy_check_mark: | :heavy_check_mark: |
| Mitochondria | :heavy_check_mark:| :heavy_check_mark: | :heavy_check_mark: | | |:heavy_check_mark: | :heavy_check_mark: |
| Cytosol 1   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | | | :heavy_check_mark: | :heavy_check_mark: |
| Cytosol 2   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | | | :heavy_check_mark: | :heavy_check_mark: |
| Cytosol 3   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:| | |:heavy_check_mark: | :heavy_check_mark: |
| Cytosol 4   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:| | | :heavy_check_mark: | :heavy_check_mark: |
| Cytosol 5   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | | | :heavy_check_mark: | :heavy_check_mark: |

Subsystems Maps progress:
- Pre-processed: Virinchi did some ajustement on the layout

| #   | Subsystem | # Reaction | Pre-processed | Finnished | Comment |
| --- | --------- | ---------- | ------------- | --------- | ------- |
| 1 | Acyl-CoA hydrolysis | 64 | :heavy_check_mark:  |  | |
| 2 | Acylglycerides metabolism | 21 | :heavy_check_mark: | :heavy_check_mark: | |
| 3 | Alanine, aspartate and glutamate metabolism | 40 | :heavy_check_mark: | :heavy_check_mark: | |
| 4 | Alkaloids Biosynthesis | 2 | :heavy_check_mark: | :heavy_check_mark: | |
| 5 | Amino sugar and nucleotide sugar metabolism | 38 | :heavy_check_mark: | :heavy_check_mark: | |
| 6 | Aminoacyl-tRNA biosynthesis | 21 | :heavy_check_mark: | :heavy_check_mark: | |
| 7 | Androgen metabolism | 36 | :heavy_check_mark: | :heavy_check_mark: | |
| 8 | Arachidonic acid metabolism | 137 | :heavy_check_mark: |  | |
| 9 | Arginine and proline metabolism | 104 | :heavy_check_mark: | :heavy_check_mark: | |
| 10 | Artificial reactions | 16 |  |  | Skipped |
| 11 | Ascorbate and aldarate metabolism | 15 | :heavy_check_mark: | :heavy_check_mark: | |
| 12 | Beta oxidation of branched-chain fatty acids (mitochondrial) | 13 | :heavy_check_mark: | :heavy_check_mark: | |
| 13 | Beta oxidation of di-unsaturated fatty acids (n-6) (mitochondrial) | 19 | :heavy_check_mark: | :heavy_check_mark: | |
| 14 | Beta oxidation of di-unsaturated fatty acids (n-6) (peroxisomal) | 19 | :heavy_check_mark: | :heavy_check_mark: | |
| 15 | Beta oxidation of even-chain fatty acids (mitochondrial) | 59 | :heavy_check_mark: | :heavy_check_mark: | |
| 16 | Beta oxidation of even-chain fatty acids (peroxisomal) | 50 | :heavy_check_mark: |  | |
| 17 | Beta oxidation of odd-chain fatty acids (mitochondrial) | 38 | :heavy_check_mark: | :heavy_check_mark: | |
| 18 | Beta oxidation of odd-chain fatty acids (peroxisomal) | 1 |  |  |  |
| 19 | Beta oxidation of phytanic acid (peroxisomal) | 21 | :heavy_check_mark: | :heavy_check_mark: | |
| 20 | Beta oxidation of poly-unsaturated fatty acids (mitochondrial) | 22 | :heavy_check_mark: | :heavy_check_mark: | |
| 21 | Beta oxidation of unsaturated fatty acids (n-7) (mitochondrial) | 17 | :heavy_check_mark: | :heavy_check_mark: | |
| 22 | Beta oxidation of unsaturated fatty acids (n-7) (peroxisomal) | 8 | :heavy_check_mark: | :heavy_check_mark: | |
| 23 | Beta oxidation of unsaturated fatty acids (n-9) (mitochondrial) | 21 | :heavy_check_mark: | :heavy_check_mark: | |
| 24 | Beta oxidation of unsaturated fatty acids (n-9) (peroxisomal) | 38 | :heavy_check_mark: | :heavy_check_mark: | |
| 25 | Beta-alanine metabolism | 17 | :heavy_check_mark: | :heavy_check_mark: | |
| 26 | Bile acid biosynthesis | 243 | :heavy_check_mark: | :heavy_check_mark: | |
| 27 | Bile acid recycling | 33 | :heavy_check_mark: | :heavy_check_mark: | |
| 28 | Biopterin metabolism | 27 | :heavy_check_mark: | :heavy_check_mark: | |
| 29 | Biotin metabolism | 14 | :heavy_check_mark: | :heavy_check_mark: | |
| 30 | Blood group biosynthesis | 52 |  |  | |
| 31 | Butanoate metabolism | 9 | :heavy_check_mark: | :heavy_check_mark: | |
| 32 | C5-branched dibasic acid metabolism | 8 | :heavy_check_mark: | :heavy_check_mark: | |
| 33 | Carnitine shuttle (cytosolic) | 57 |  |  | Skipped, disconnected |
| 34 | Carnitine shuttle (endoplasmic reticular) | 131 |  |  | Skipped, disconnected |
| 35 | Carnitine shuttle (mitochondrial) | 112 |  |  | Skipped, disconnected |
| 36 | Carnitine shuttle (peroxisomal) | 8 |  |  | Skipped, disconnected |
| 37 | Cholesterol biosynthesis 1 (Bloch pathway) | 27 | :heavy_check_mark: | :heavy_check_mark: | |
| 38 | Cholesterol biosynthesis 2 | 4 | :heavy_check_mark: | :heavy_check_mark: | |
| 39 | Cholesterol biosynthesis 3 (Kandustch-Russell pathway) | 16 | :heavy_check_mark: | :heavy_check_mark: | |
| 40 | Cholesterol metabolism | 121 | :heavy_check_mark: | :heavy_check_mark: | |
| 41 | Chondroitin / heparan sulfate biosynthesis | 46 | :heavy_check_mark: |  | |
| 42 | Chondroitin sulfate degradation | 44 | :heavy_check_mark: |  | |
| 43 | CoA catabolism | 1 |  |  |  |
| 44 | CoA synthesis | 4 | :heavy_check_mark: | :heavy_check_mark: | |
| 45 | Cysteine and methionine metabolism | 50 | :heavy_check_mark: |  | |
| 46 | Dietary fiber binding | 12 |  |  | |
| 47 | Drug metabolism | 573 |  |  | skipped, many transport reactions. But should be (partially) done |
| 48 | Eicosanoid metabolism | 64 | :heavy_check_mark: | :heavy_check_mark: | |
| 49 | Estrogen metabolism | 66 | :heavy_check_mark: |  | |
| 50 | Ether lipid metabolism | 15 | :heavy_check_mark: | :heavy_check_mark: | |
| 51 | Exchange/demand reactions | 1665 |  |  | skipped, too many reactions / disconnect |
| 52 | Fatty acid activation (cytosolic) | 67 | :heavy_check_mark: |  | |
| 53 | Fatty acid activation (endoplasmic reticular) | 55 | :heavy_check_mark: |  | |
| 54 | Fatty acid biosynthesis | 85 | :heavy_check_mark: |  | |
| 55 | Fatty acid biosynthesis (even-chain) | 30 | :heavy_check_mark: | :heavy_check_mark: | |
| 56 | Fatty acid biosynthesis (odd-chain) | 29 | :heavy_check_mark: | :heavy_check_mark: | |
| 57 | Fatty acid biosynthesis (unsaturated) | 32 | :heavy_check_mark: | :heavy_check_mark: | |
| 58 | Fatty acid desaturation (even-chain) | 12 | :heavy_check_mark: | :heavy_check_mark: | |
| 59 | Fatty acid desaturation (odd-chain) | 2 | :heavy_check_mark: | :heavy_check_mark: | |
| 60 | Fatty acid elongation (even-chain) | 20 | :heavy_check_mark: | :heavy_check_mark: | |
| 61 | Fatty acid elongation (odd-chain) | 12 | :heavy_check_mark: | :heavy_check_mark: | |
| 62 | Fatty acid oxidation | 542 | :heavy_check_mark: |  | |
| 63 | Folate metabolism | 65 | :heavy_check_mark: |  | |
| 64 | Formation and hydrolysis of cholesterol esters | 179 | :heavy_check_mark: |  | |
| 65 | Fructose and mannose metabolism | 23 | :heavy_check_mark: | :heavy_check_mark: | |
| 66 | Galactose metabolism | 21 | :heavy_check_mark: | :heavy_check_mark: | |
| 67 | Glucocorticoid biosynthesis | 11 | :heavy_check_mark: | :heavy_check_mark: | |
| 68 | Glutathione metabolism | 17 | :heavy_check_mark: | :heavy_check_mark: | |
| 69 | Glycerolipid metabolism | 76 | :heavy_check_mark: | :heavy_check_mark: | |
| 70 | Glycerophospholipid metabolism | 218 | :heavy_check_mark: |  | |
| 71 | Glycine, serine and threonine metabolism | 66 | :heavy_check_mark: |  | |
| 72 | Glycolysis / Gluconeogenesis | 42 | :heavy_check_mark: |  | |
| 73 | Glycosphingolipid biosynthesis-ganglio series | 37 | :heavy_check_mark: | :heavy_check_mark: | |
| 74 | Glycosphingolipid biosynthesis-globo series | 11 | :heavy_check_mark: | :heavy_check_mark: | |
| 75 | Glycosphingolipid biosynthesis-lacto and neolacto series | 51 |  |  | |
| 76 | Glycosphingolipid metabolism | 25 | :heavy_check_mark: |  | |
| 77 | Glycosylphosphatidylinositol (GPI)-anchor biosynthesis | 31 | :heavy_check_mark: | :heavy_check_mark: | |
| 78 | Heme degradation | 3 | :heavy_check_mark: | :heavy_check_mark: | |
| 79 | Heme synthesis | 4 | :heavy_check_mark: | :heavy_check_mark: | |
| 80 | Heparan sulfate degradation | 30 |  |  | |
| 81 | Hippurate metabolism | 2 |  |  |  |
| 82 | Histidine metabolism | 19 | :heavy_check_mark: | :heavy_check_mark: | |
| 83 | Inositol phosphate metabolism | 94 | :heavy_check_mark: | :heavy_check_mark: | |
| 84 | Isolated | 150 | :heavy_check_mark: | :heavy_check_mark: | |
| 85 | Keratan sulfate biosynthesis | 59 | :heavy_check_mark: |  | |
| 86 | Keratan sulfate degradation | 76 | :heavy_check_mark: | :heavy_check_mark: | |
| 87 | Leukotriene metabolism | 170 | :heavy_check_mark: |  | |
| 88 | Linoleate metabolism | 35 | :heavy_check_mark: |  | |
| 89 | Lipoic acid metabolism | 8 | :heavy_check_mark: | :heavy_check_mark: | |
| 90 | Lysine metabolism | 43 | :heavy_check_mark: | :heavy_check_mark: | |
| 91 | Metabolism of other amino acids | 22 | :heavy_check_mark: | :heavy_check_mark: | |
| 92 | Metabolism of xenobiotics by cytochrome P450 | 131 | :heavy_check_mark: |  | |
| 93 | Miscellaneous | 120 |  |  | skipped |
| 94 | N-glycan metabolism | 151 | :heavy_check_mark: | :heavy_check_mark: | |
| 95 | Nicotinate and nicotinamide metabolism | 37 | :heavy_check_mark: | :heavy_check_mark: | |
| 96 | Nitrogen metabolism | 1 |  |  | |
| 97 | Nucleotide metabolism | 125 | :heavy_check_mark: | :heavy_check_mark: | |
| 98 | O-glycan metabolism | 19 | :heavy_check_mark: | :heavy_check_mark: | |
| 99 | Omega-3 fatty acid metabolism | 75 | :heavy_check_mark: | :heavy_check_mark: | |
| 100 | Omega-6 fatty acid metabolism | 61 | :heavy_check_mark: | :heavy_check_mark: | |
| 101 | Oxidative phosphorylation | 10 | :heavy_check_mark: | :heavy_check_mark: | |
| 102 | Pantothenate and CoA biosynthesis | 20 | :heavy_check_mark: | :heavy_check_mark: | |
| 103 | Pentose and glucuronate interconversions | 16 | :heavy_check_mark: | :heavy_check_mark: | |
| 104 | Pentose phosphate pathway | 31 | :heavy_check_mark: | :heavy_check_mark: | |
| 105 | Peptide metabolism | 242 | :heavy_check_mark:  |  | |
| 106 | Phenylalanine metabolism | 6 | :heavy_check_mark: | :heavy_check_mark: | |
| 107 | Phenylalanine, tyrosine and tryptophan biosynthesis | 161 | :heavy_check_mark: | :heavy_check_mark: | |
| 108 | Phosphatidylinositol phosphate metabolism | 29 | :heavy_check_mark: | :heavy_check_mark: | |
| 109 | Pool reactions | 47 |  |  | skipped |
| 110 | Porphyrin metabolism | 22 | :heavy_check_mark: | :heavy_check_mark: | |
| 111 | Propanoate metabolism | 23 | :heavy_check_mark: | :heavy_check_mark: | |
| 112 | Prostaglandin biosynthesis | 71 | :heavy_check_mark:  |  | |
| 113 | Protein assembly | 25 | :heavy_check_mark:  |  | |
| 114 | Protein degradation | 36 | :heavy_check_mark:  |  | |
| 115 | Protein modification | 10 | :heavy_check_mark: | :heavy_check_mark: | |
| 116 | Purine metabolism | 108 | :heavy_check_mark: | :heavy_check_mark: | |
| 117 | Pyrimidine metabolism | 78 | :heavy_check_mark: |  | |
| 118 | Pyruvate metabolism | 34 | :heavy_check_mark: | :heavy_check_mark: | |
| 119 | R group synthesis | 50 |  |  | skipped |
| 120 | ROS detoxification | 10 | :heavy_check_mark: | :heavy_check_mark: | |
| 121 | Retinol metabolism | 86 | :heavy_check_mark: |  | |
| 122 | Riboflavin metabolism | 6 | :heavy_check_mark: | :heavy_check_mark: | |
| 123 | Serotonin and melatonin biosynthesis | 20 | :heavy_check_mark: | :heavy_check_mark: | |
| 124 | Sphingolipid metabolism | 141 | :heavy_check_mark: | :heavy_check_mark: | |
| 125 | Starch and sucrose metabolism | 41 | :heavy_check_mark: | :heavy_check_mark: | |
| 126 | Steroid metabolism | 95 | :heavy_check_mark: | :heavy_check_mark: | |
| 127 | Sulfur metabolism | 10 | :heavy_check_mark: | :heavy_check_mark: | |
| 128 | Terpenoid backbone biosynthesis | 17 | :heavy_check_mark: | :heavy_check_mark: | |
| 129 | Thiamine metabolism | 7 | :heavy_check_mark: | :heavy_check_mark: | |
| 130 | Transport reactions | 4247 |  |  | skipped, too many reactions / disconnected |
| 131 | Triacylglycerol synthesis | 13 | :heavy_check_mark: | :heavy_check_mark: | |
| 132 | Tricarboxylic acid cycle and glyoxylate/dicarboxylate metabolism | 47 | :heavy_check_mark: |  | |
| 133 | Triglycerides formation | 3 | :heavy_check_mark: | :heavy_check_mark: | |
| 134 | Tryptophan metabolism | 20 | :heavy_check_mark: | :heavy_check_mark: | |
| 135 | Tyrosine metabolism | 82 | :heavy_check_mark: | :heavy_check_mark: | |
| 136 | Ubiquinone synthesis | 10 | :heavy_check_mark: | :heavy_check_mark: | |
| 137 | Urea cycle | 2 | :heavy_check_mark: | :heavy_check_mark: | |
| 138 | Valine, leucine, and isoleucine metabolism | 58 | :heavy_check_mark: |  | |
| 139 | Vitamin A metabolism | 19 | :heavy_check_mark: | :heavy_check_mark: | |
| 140 | Vitamin B12 metabolism | 5 | :heavy_check_mark: | :heavy_check_mark: | |
| 141 | Vitamin B2 metabolism | 2 | :heavy_check_mark: | :heavy_check_mark: | |
| 142 | Vitamin B6 metabolism | 11 | :heavy_check_mark: | :heavy_check_mark: | |
| 143 | Vitamin C metabolism | 2 | :heavy_check_mark: | :heavy_check_mark: | |
| 144 | Vitamin D metabolism | 35 | :heavy_check_mark: | :heavy_check_mark: | |
| 145 | Vitamin E metabolism | 52 | :heavy_check_mark:  | :heavy_check_mark: | |
| 146 | Xenobiotics metabolism | 27 | :heavy_check_mark: | :heavy_check_mark: | |

