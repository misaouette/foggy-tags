# TagCloud Component


A component that integrates Jason Davies word cloud library 'd3-cloud'


## TODO
Expose more d3-cloud parameters as component props

## Props
- array tags: an array of tags with following structure:
  - text: tag label
  - size: tag font size
  - className: optional custom css class name
  - onTagClick: callback called when tag is clicked
- font: optional font
- svgWidth: optional width for svg
- svgHeight: optional height for svg
- shouldTagCloudUpdate: optional flag used to determine whether component should update
