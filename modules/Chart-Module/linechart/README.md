# LineChart
The LineChart submodule is responsible for drawing a LineChart on a canvas element using the canvas api.

## Code Example
```JavaScript

import LineChart from './LineChart.js';

const line = new LineChart({
    canvasId: 'myCanvas',
    data: [10, 40, 30, 50, 20, 60, 70],
    color: '#FF0000'
});

line.draw();
line.clear(); // Clears the chart.
```

## Usage Information

First off make sure you have a html canvas element with and id attribute. Import the LineChart module, Use the constructor to create a new LineChart and pass an object containing 3 fields as an argument to the constructor. The first field canvasId should be set to the id of your canvas element,The data field represents the data you wish to be the base of the chart and the color field represents the colors of the line.

After instantiaitng a LineChart object, call the draw method to draw the chart and the clear method to clear the chart.

## Known Issues

### Label feature

Currently because of an issue with labels this feature does not work so abstain from setting the label field as this currently does not work.