## Human-maps repository

This repository contains metabolic maps for the [Human-GEM](https://github.com/SysBioChalmers/Human-GEM) (Human1) and are served by [Metabolic Atlas](https://www.metabolicatlas.com).

### Content

Two types of map have been produced:

#### Compartments maps

Correspond to a compartment in the model. Note that the _Cytosol_ has been divided into 5 separate maps, and the _Inner mitochondrial membrane_ compartment is included on the _Mitochondria_ map. We do not provide maps for _Boundary_ and _Extracellular_ compartments, as reactions on thoses maps are largely disconnected and uninformative.

#### Subsystem maps

Each map corresponds to a subsystem as it is annotated in the model. Some subsystem maps are still under construction:

_Arachidonic acid metabolism_, _Beta oxidation of even-chain fatty acids (peroxisomal)_, _Chondroitin / heparan sulfate biosynthesis_, _Chondroitin sulfate degradation_, _Estrogen metabolism_, _Fatty acid biosynthesis_, _Fatty acid oxidation_, _Folate metabolism_, _Formation and hydrolysis of cholesterol esters_, _Glycine_, _serine and threonine metabolism_, _Glycosphingolipid biosynthesis-lacto and neolacto series_, _Glycosphingolipid metabolism_, _Heparan sulfate degradation_, _Keratan sulfate biosynthesis_, _Linoleate metabolism_, _Metabolism of xenobiotics by cytochrome P450_, _Peptide metabolism_, _Prostaglandin biosynthesis_, _Protein assembly_, _Protein degradation_, _Retinol metabolism_, _Valine, leucine, and isoleucine metabolism_, _Vitamin E metabolism_.

A few subsystem maps are not planned for construction because they contain artificial reactions, are highly disconnected, or are very small, and thus a map would be uninformative:

_Artificial reactions_, _Beta oxidation of odd-chain fatty acids (peroxisomal)_, _Carnitine shuttle (cytosolic)_, _Carnitine shuttle (endoplasmic reticular)_, _Carnitine shuttle (mitochondrial)_, _Carnitine shuttle (peroxisomal)_, _CoA catabolism_, _Exchange/demand reactions_, _Miscellaneous_, _Nitrogen metabolism_, _Pool reactions_, _R group synthesis_, _Transport reactions_.

Custom maps or combination maps of multiple subsystems are planned, but are still under development.

### Map formats

**SVG**: Scalable Vector Graphics, ideal for web browsers; these maps are displayed on Metabolic Atlas but do not contain metabolic network information and thus are only used for visualization.

**SBML**: Systems Biology Markup Language extended to incorporate graphical information. While SBML files may be used for metabolic analysis or flux visualization, SBML maps exported using Omix have not been used or tested for such purposes.

**SBGN**: Systems Biology Graphical Notation files. They have not been used for any analyses.

All three formats were exported from maps made using [Omix](https://www.omix-visualization.com/), using the built-in Omix plugins (SBML, SBGN) or a custom plugin (SVG).

### Comment

Some metabolic reactions are excluded from the maps. Only Transport/Exchange reactions associated with enzymes have been added (mostly disconnected) on compartment maps. Subsystem maps do not currently include any transport reactions (those belonging to the _Transport reactions_ subsystem).

Subsystem maps are synced with **version 1.3.0** of the Human-GEM model, but compartment maps are synced with **version 1.0.5**.

This repository is administered by Pierre Cholley (@pecholleyc), Division of Systems and Synthetic Biology, Department of Biology and Biological Engineering, Chalmers University of Technology.
