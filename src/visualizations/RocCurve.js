import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const totalPointNumber = 100
var category1Points = new Array(totalPointNumber)
var category2Points = new Array(totalPointNumber)
var category3Points = new Array(totalPointNumber)

var category1Value = 0
var category2Value = 0
var category3Value = 0
for (var pointIndex = 0; pointIndex < totalPointNumber; pointIndex++) {
    category1Value += Math.random() * 0.05
    category2Value += Math.random() * 0.05
    category3Value += Math.random() * 0.05
    category1Value = (category1Value < 1) ? category1Value : 1
    category2Value = (category2Value < 1) ? category2Value : 1
    category3Value = (category3Value < 1) ? category3Value : 1

    category1Points[pointIndex] = { y: category1Value, label: pointIndex / 100 }
    category2Points[pointIndex] = { y: category2Value, label: pointIndex / 100 }
    category3Points[pointIndex] = { y: category3Value, label: pointIndex / 100 }
}
const options = {
    animationEnabled: true,
    axisY: {
        title: "True Positive Rate",
        includeZero: true
    },
    axisX: {
        title: "False Positive Rate",
        includeZero: true
    },
    toolTip: {
        shared: true
    },

    data: [{
        type: "spline",
        name: "category1",
        showInLegend: true,
        dataPoints: category1Points
    },
    {
        type: "spline",
        name: "category2",
        showInLegend: true,
        dataPoints: category2Points
    },
    {
        type: "spline",
        name: "category3",
        showInLegend: true,
        dataPoints: category3Points
    }]
}

class RocCurve extends React.Component {

    render() {
        return (
            <CanvasJSChart options={options} />
        )
    }
}



export default RocCurve;