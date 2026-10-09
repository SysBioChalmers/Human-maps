## Human-maps repository

This repository contains the metabolic maps of [Human-GEM](https://github.com/SysBioChalmers/Human-GEM) that [Metabolic Atlas](https://metabolicatlas.org) serves, in four formats.

The maps match **Human-GEM 2.1.1**.

### Content

- `subsystem/`: 118 maps: one per subsystem of the model, and 12 transport maps, one per organelle membrane (`transport_<organelle>`), the plasma membrane divided over five maps (`transport_plasma_membrane_1` to `_5`), and one for transport between organelles.
- `compartment/`: 12 maps, one per compartment. The cytosol is divided over five maps (`cytosol_1` to `cytosol_5`), and the inner mitochondrial membrane is part of the mitochondria map.

Each folder holds the same maps in each format:

| Folder | Format | Content |
| --- | --- | --- |
| `svg/` | SVG | The map as Metabolic Atlas shows it. |
| `sbgn/` | [SBGN-ML](https://sbgn.github.io) 0.3, process description | Metabolites as simple chemicals, reactions as processes, genes as macromolecules catalysing them, and compartments, at the positions of the SVG. Validated against the libsbgn schema. |
| `sbml/` | [SBML](https://sbml.org) Level 3 Version 1, with the layout and groups packages | The reactions on the map with their stoichiometry, reversibility and genes (as modifiers) from Human-GEM 2.1.1; the layout of every drawn metabolite, gene and edge; one group per subsystem. Checked with libsbml. |
| `escher/` | [Escher](https://escher.github.io) map (JSON, schema 1-0-0) | Metabolites and reactions where the SVG draws them, edges as Bézier curves through the SVG's bends, with stoichiometry, reversibility and gene rules from Human-GEM 2.1.1; the title and compartment headings as text labels (Escher has no compartment boxes or gene boxes). Open it in Escher with *Load map JSON*; loading the model as well (COBRA JSON) shows names and lets you overlay data. Checked against Escher's schema and its own consistency checks. |

### How the maps are made

The maps were drawn in [Omix](https://www.omix-visualization.com/) for Human-GEM 1.x. Since Human-GEM 2.1.0 they are fitted to each model release by script, keeping the drawing: identifiers follow the model, removed reactions and metabolites are taken off, reactions of a map's subsystem or compartment that were not drawn are added, and parts that share a metabolite are connected. The script and its rules are in [MetabolicAtlas/data-generation](https://github.com/MetabolicAtlas/data-generation) (`maps`, rules in `maps/RULES.md`). The SVG maps that Metabolic Atlas serves are kept in [MetabolicAtlas/data-files](https://github.com/MetabolicAtlas/data-files) (`svg/Human-GEM`), and the SBGN, SBML and Escher files are written from them with `maps/publish_maps.py`. After each model update in data-files, a workflow there opens a pull request here with the new maps.

Custom maps (such as the protein secretion map) are only in data-files.

This repository is administered by Pierre Cholley (@pecholleyc), Division of Systems and Synthetic Biology, Department of Biology and Biological Engineering, Chalmers University of Technology.
