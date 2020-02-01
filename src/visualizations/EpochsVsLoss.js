import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const totalPointNumber = 100
var trainDataPoints = new Array(totalPointNumber)
var validDataPoints = new Array(totalPointNumber)

for (var pointIndex = 0; pointIndex < totalPointNumber; pointIndex++) {
    var trainNoise = Math.random()*0.2-0.1
    var validNoise = Math.random()*0.2-0.1 
    trainDataPoints[pointIndex] = { y: Math.pow(1/2,pointIndex)+0.1 + trainNoise, label: pointIndex }
    validDataPoints[pointIndex] = { y: Math.pow(1/2,pointIndex)+0.1 + validNoise, label: pointIndex }
}
const options = {
    animationEnabled: true,
    axisY: {
        title: "cross entropy",
        includeZero: true
    },
    axisX: {
        title: "epochs",
        includeZero: true
    },
    toolTip: {
        shared: true
    },

    data: [{
        type: "spline",
        name: "Train",
        showInLegend: true,
        dataPoints: trainDataPoints
    },
    {
        type: "spline",
        name: "Validation",
        showInLegend: true,
        dataPoints: validDataPoints
    }]
}

class EpochsVsLoss extends React.Component {

    render() {
        return (
            <CanvasJSChart options={options} />
        )
    }
}



export default EpochsVsLoss;