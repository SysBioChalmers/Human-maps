## Human-maps repository

This repository contains the metabolic maps of [Human-GEM](https://github.com/SysBioChalmers/Human-GEM) that [Metabolic Atlas](https://metabolicatlas.org) serves, in three formats.

The maps match **Human-GEM 2.1.1**.

### Content

- `subsystem/`: 118 maps: one per subsystem of the model, and 12 transport maps, one per organelle membrane (`transport_<organelle>`), the plasma membrane divided over five maps (`transport_plasma_membrane_1` to `_5`), and one for transport between organelles.
- `compartment/`: 12 maps, one per compartment. The cytosol is divided over five maps (`cytosol_1` to `cytosol_5`), and the inner mitochondrial membrane is part of the mitochondria map.
- `subsystemSVG.tsv`, `compartmentSVG.tsv`: for each map, the subsystem or compartment it shows, its name on Metabolic Atlas and its file name.

Each folder holds the same maps in each format:

| Folder | Format | Content |
| --- | --- | --- |
| `svg/` | SVG | The map as Metabolic Atlas shows it. |
| `sbgn/` | [SBGN-ML](https://sbgn.github.io) 0.3, process description | Metabolites as simple chemicals, reactions as processes, genes as macromolecules catalysing them, and compartments, at the positions of the SVG. Validated against the libsbgn schema. |
| `escher/` | [Escher](https://escher.github.io) map (JSON, schema 1-0-0) | Metabolites and reactions where the SVG draws them, edges as Bézier curves through the SVG's bends, with stoichiometry, reversibility and gene rules from Human-GEM 2.1.1; the title and compartment headings as text labels (Escher has no compartment boxes or gene boxes). Open it in Escher with *Load map JSON*; loading the model as well (COBRA JSON) shows names and lets you overlay data. Checked with Escher's own consistency checks. |

### How the maps are made

The maps were drawn in [Omix](https://www.omix-visualization.com/) for Human-GEM 1.x. Since Human-GEM 2.1.0 they are fitted to each model release by script, keeping the drawing: identifiers follow the model, removed reactions and metabolites are taken off, reactions of a map's subsystem or compartment that were not drawn are added, and parts that share a metabolite are connected. The script and its rules are in [MetabolicAtlas/data-generation](https://github.com/MetabolicAtlas/data-generation) (`maps`, rules in `maps/RULES.md`). The maps are made in this repository, and [MetabolicAtlas/data-files](https://github.com/MetabolicAtlas/data-files) copies them. The workflow `update-maps.yml` checks daily whether Human-GEM has a release newer than the one above. For a new release it runs `maps/update_maps.py`, which also adapts the two lists to the subsystems and compartments of the release (a subsystem or compartment that is gone loses its row and map, a new one gets a row and a blank map that the script fills), writes the SBGN and Escher files, and opens a pull request here. The workflow can also be started by hand with a release number. The procedure is described in [UPDATING_MODELS.md](https://github.com/MetabolicAtlas/data-files/blob/main/UPDATING_MODELS.md) in data-files.

Custom maps (such as the protein secretion map) are only in data-files.
