import React, { Component } from 'react'
import axios from 'axios'
import defaultModel from "../../model/models";

const InflowsContext = React.createContext();

class InflowsProvider extends Component {
    constructor(props) {
        super()
        this.state = {
            inflows: [],
            currentYear: new Date().getFullYear(),
            reviewYears: [],
            data: [
                {
                    type: "spline",
                    name: "model",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#,###.## m.a.s.l",
                    xValueType: "dateTime",
                    dataPoints: defaultModel.defaultModel.opt()
                }
            ]
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/inflows/')
            .then(res => this.setState({ inflows: res.data }))
    }

    // populateModel = () => {
    //     let singleYearInflows = this.state.inflows.filter(inflow => inflow.Day_of_Input.includes("2009"))
    //     let result = {}
    //     let dataPoints = singleYearInflows.map(inflow => {
    //         let data = { x: inflow.Day_of_Input, y: inflow.Luphohlo_Daily_Level }
    //         result = { ...data }
    //         return result
    //     })
    //     return dataPoints

    // }

    // populateGS15Model = (reviewYear) => {
    //     let singleYearInflows = this.state.inflows.filter(inflow => inflow.Day_of_Input.includes(reviewYear))

    //     for (let i = 1;i <=12; i++){
    //         let 
    //     }
    // }
    populateModel = (reviewYear) => {



        // Current model
        let singleYearInflows = this.state.inflows.filter(inflow => inflow.Day_of_Input.includes(reviewYear))

        let sample = singleYearInflows.filter(inflow => inflow.Day_of_Input.slice(-2).includes("01") || inflow.Day_of_Input.includes("01-01"))
        let result = {}
        let dataPoints = sample.map(inflow => {
            let data = { label: (new Date(inflow.Day_of_Input)).toLocaleString('default', { month: 'long' }), y: parseFloat(inflow.Luphohlo_Daily_Level) }
            result = { ...data }
            return result
        })
        return dataPoints

    }

    getDefaultModel = () => {
        // default model
        let defaultdataPoints = defaultModel.defaultModel.opt()
        return defaultdataPoints
    }
    // populateModel = () => {
    //     let singleYearInflows = this.state.inflows.filter(inflow => inflow.Day_of_Input.includes("2009"))

    //     let sample = singleYearInflows.filter(inflow => inflow.Day_of_Input.slice(-2).includes("15")|| inflow.Day_of_Input.includes("01-01"))
    //     let result = []
    //     let dataPoints = sample.map(inflow => {
    //         result.push(parseInt(inflow.Luphohlo_Daily_Level))
    //     })
    //     return result


    // }

    changeForecastYear = (year) => {
        // console.log(year)
        this.setState({ reviewYear: year })
    }

    handleReviewYear = (year) => {
        if (this.state.reviewYears.includes(year)) {
            this.setState({ reviewYears: this.state.reviewYears.filter(item => item !== year) })
        } else {
            this.setState({ reviewYears: [...this.state.reviewYears, year] })
        }

    }

    populateDataPoints = () => {
        let data = [
            {
                type: "spline",
                name: "model",
                showInLegend: true,
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "#,###.## m.a.s.l",
                xValueType: "dateTime",
                dataPoints: defaultModel.defaultModel.opt()
            }
        ]

        let reviewYearsDataPoints = this.state.reviewYears.map(year => {
            let singleYearDataPoint = this.singleYearDataPoint(year)
            // reviewYearsDataPoints = [...singleYearDataPoint]
            return singleYearDataPoint
        })

        if (reviewYearsDataPoints.length === 0) {
            return data
        } else {
            let merge = data.concat(reviewYearsDataPoints)
            return merge

        }

    }

    singleYearDataPoint = (year) => {
        let data = {
            type: "spline",
            name: year,
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,###.## m.a.s.l",
            xValueType: "dateTime",
            dataPoints: this.populateModel(year)
        }
        return data
    }

    render() {
        return (
            <InflowsContext.Provider value={{ ...this.state, getData: this.populateModel, getDefaultModel: this.getDefaultModel, changeForecastYear: this.changeForecastYear, handleReviewYear: this.handleReviewYear, populateDataPoints: this.populateDataPoints }}>
                {this.props.children}
            </InflowsContext.Provider>
        )
    }
}

const InflowsConsumer = InflowsContext.Consumer

export { InflowsProvider, InflowsConsumer, InflowsContext }


