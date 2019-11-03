import React, { Component } from 'react';
//import logo from './logo.svg';

class citiesImport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            findCities: []
        };
    }
    componentDidMount() {
        fetch(`http://localhost:3000/airports/${event.target.value}`)
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(findCities => {
                console.log(findCities);
                this.setState({ findCities })
            });
    }
    render() {
        const citiList = this.props.findCities.map(findCities => {
            return <option>{findCities}</option>;
        });


        const { findCities } = this.state;
        findCities.length
            ? alert(`airport: ${findCities[0].airport_name} IATA Code:${findCities[0].IATA_code}`)
            : console.log("loading");

        return <select onChange={this.handleChange}>{citiList}</select>;

    }
}
export default citiesImport;