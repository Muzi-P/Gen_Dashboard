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
            reviewYear: '2009'
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
    populateModel = () => {
        // Current model
        let singleYearInflows = this.state.inflows.filter(inflow => inflow.Day_of_Input.includes(this.state.reviewYear))

        let sample = singleYearInflows.filter(inflow => inflow.Day_of_Input.slice(-2).includes("01") || inflow.Day_of_Input.includes("01-01"))
        let result = {}
        let dataPoints = sample.map(inflow => {
            let data = { x: new Date(inflow.Day_of_Input), y: parseFloat(inflow.Luphohlo_Daily_Level) }
            result = { ...data }
            return result
        })
        return dataPoints

    }

    getDefaultModel = () => {
        // default model
        let defaultdataPoints = defaultModel.defaultModel.opt(this.state.reviewYear)
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
        console.log(year)
        this.setState({ reviewYear: year})
    }



    render() {
        return (
            <InflowsContext.Provider value={{ ...this.state, getData: this.populateModel, getDefaultModel: this.getDefaultModel, changeForecastYear : this.changeForecastYear  }}>
                {this.props.children}
            </InflowsContext.Provider>
        )
    }
}

const InflowsConsumer = InflowsContext.Consumer

export { InflowsProvider, InflowsConsumer, InflowsContext }


