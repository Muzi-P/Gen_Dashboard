import React, { Component } from 'react'
import { Scatter, Line } from "react-chartjs-2";
import { chartExample1 } from "variables/charts.jsx";

export default class LineGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { dataPoints } = this.props
        console.log(dataPoints);
        const data = (canvas) => {
            let ctx = canvas.getContext("2d");

            let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

            gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
            gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
            gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
            return {
                labels: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "m.a.s.l",
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: "#1f8ef1",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#1f8ef1",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#1f8ef1",
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        showLine: true,
                        data: this.props.dataPoints,
                        // data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70]

                        // data:
                        //     [{
                        //         x: 1,
                        //         y: 50
                        //     }, {
                        //         x: 2,
                        //         y: 80
                        //     }, {
                        //         x: 3.8,
                        //         y: 5
                        //     }, {
                        //         x: 4.11,
                        //         y: 5
                        //     }, {
                        //         x: 7.22,
                        //         y: 5000
                        //     }]
                    }
                ]
            }
        }
        return (
            <div className="chart-area">
                <Line
                    data={data}
                    options={chartExample1.options}
                />
            </div>
        )
    }
}
