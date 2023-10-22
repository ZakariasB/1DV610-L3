# HorizontalBarChart
The BarChart submodule is responsible for drawing a BarChart on a canvas element using the canvas api. 

## Code Example
```JavaScript
import HorizontalBarChart from './BarChart.js';

const chart = new HorizontalBarChart({
    canvasId: 'myCanvas',
    data: [5, 8, 3, 6, 7],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'],
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']
});

chart.draw();
chart.clear(); // Clears the chart.
```

## Usage Information

First off make sure you have a html canvas element with and id attribute. Import the HorizontalBarChart module, Use the constructor to create a new HorizontalBarChart and pass an object containing 3 fields as an argument to the constructor. The first field canvasId should be set to the id of your canvas element,The data field represents the data you wish to be the base of the chart and the colors field represents the colors of each bar. 

After instantiaitng a HorizontalBarChart object, call the draw method to draw the chart and the clear method to clear the chart.

## Known Issues