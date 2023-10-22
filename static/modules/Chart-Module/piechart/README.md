# PieChart
The PieChart submodule is responsible for drawing a PieChart on a canvas element using the canvas api.

## Code Example

```JavaScript
import PieChart from './PieChart.js';

const pie = new PieChart({
    canvasId: 'myCanvas',
    data: [45, 25, 20, 10],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
});

pie.draw();
pie.clear() // Clears the chart.
```

## Usage Information

First off make sure you have a html canvas element with and id attribute. Import the PieChart module, Use the constructor to create a new PieChart and pass an object containing 3 fields as an argument to the constructor. The first field canvasId should be set to the id of your canvas element,The data field represents the data you wish to be the base of the chart and the colors field represents the colors of each part of the pie chart. 

After instantiaitng a PieChart object, call the draw method to draw the chart and the clear method to clear the chart.

## Known Issues

### Label feature

Currently because of an issue with labels this feature does not work so abstain from setting the label field as this currently does not work.