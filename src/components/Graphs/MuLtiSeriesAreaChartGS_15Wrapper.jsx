import React, { Component } from 'react'
import MultiSeriesAreaChartGs15 from "./MuLtiSeriesAreaChartGS_15"
import { InflowsContext } from "../../components/Context/context"

import {
    // ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    Input,
    Row,
    InputGroupText,
    Col,
} from "reactstrap";

export default class MuLtiSeriesAreaChartGS15Wrapper extends Component {
    static contextType = InflowsContext
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1",
            inflows: [],
            data: [],
            years: ['2009', '2010', '2011'],
        };
    }
    
    handleChange = (e) => {
        this.setState({ checkboxChecked: e.target.checked })
        this.context.handleGS15ReviewYear(e.target.value);
        // if (e.target.checked) {
        //     this.context.changeGS15ForecastYear(e.target.value);
        // }
    }
    render() {
        const { gs15ReviewYears } = this.context

        let yearInfocus = this.state.years.map((year, key) => {
            return <InputGroupText className="reveiwYear">
                <Input addon type="checkbox" aria-label="Checkbox for following text input" onChange={e => this.handleChange(e)} value={year} key={year} />
                {year}
            </InputGroupText>
        })
        return (
            <Row>
                <Col xs="12">
                    <Card className="card-chart">
                        <CardHeader>
                            <Row>
                                <Col className="text-left" sm="6">
                                    {gs15ReviewYears.length !== 0 && <h5 className="card-category">Review Year: {gs15ReviewYears.toString()}</h5>}
                                    <CardTitle tag="h2">GS 15 Inflows</CardTitle>
                                </Col>
                                <Col>
                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            caret
                                            className="btn-icon"
                                            color="link"
                                            data-toggle="dropdown"
                                            type="button"
                                        >
                                            <i className="tim-icons icon-settings-gear-63" />
                                        </DropdownToggle>
                                        <DropdownMenu aria-labelledby="dropdownMenuLink" right persist overflow="auto" className="reviewYearMenu">
                                            {yearInfocus}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <MultiSeriesAreaChartGs15 data={this.context.populateGS15DataPoints()} dataPoints={this.context.getData()} defaultModel={this.context.getDefaultModel()} reviewYear={this.context.reviewYear} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}
