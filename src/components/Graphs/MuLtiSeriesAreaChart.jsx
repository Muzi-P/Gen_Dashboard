import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MultiSeriesAreaChart extends Component {
    render() {
        const { dataPoints, defaultModel, reviewYear } = this.props
        console.log(reviewYear);
        const options = {
            theme: "dark2",
            backgroundColor: "rgba(29,140,248,0)",
            animationEnabled: true,
            animationDuration: 5000,
            // title: {
            // 	text: "Comparison of Exchange Rates - 2017"
            // },
            // subtitles: [{
            // 	text: "GBP & USD to INR"
            // }],
            axisY: {
                includeZero: false,
                gridColor: "rgba(29,140,248,0.2)",
                gridThickness: 2,
                labelFontColor: "#9a9a9a",
                minimum: 1004,
                maximum: 1017
            },
            axisX: {
                includeZero: true,
                gridColor: "rgba(29,140,248,0.2)",
                gridThickness: 2,
                labelFontColor: "#9a9a9a",
                // minimum: new Date('2009-01'),
                interval: 1,
                intervalType: "month",

            },
            toolTip: {
                shared: true
            },
            data: [
                {
                    type: "spline",
                    name: "model",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#,###.## m.a.s.l",
                    xValueType: "dateTime",
                    dataPoints: defaultModel
                },
                {
                    type: "spline",
                    name: "current year",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#,###.## m.a.s.l",
                    xValueType: "dateTime",
                    dataPoints: dataPoints
                }
            ]
        }

        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default MultiSeriesAreaChart;