import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MultiSeriesAreaChartGs15 extends Component {
    render() {
        const { data } = this.props
        const options = {
            theme: "dark2",
            backgroundColor: "rgba(29,140,248,0)",
            animationEnabled: true,
            animationDuration: 5000,
            
            axisY: {
                includeZero: false,
                gridColor: "rgba(29,140,248,0.2)",
                gridThickness: 2,
                labelFontColor: "#9a9a9a",
                // minimum: 1004,
                maximum: 20,
                title: "m*3/s"
            },
            axisX: {
                includeZero: true,
                gridColor: "rgba(29,140,248,0.2)",
                gridThickness: 2,
                labelFontColor: "#9a9a9a",
            },
            toolTip: {
                shared: true
            },
            data: data
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

export default MultiSeriesAreaChartGs15;