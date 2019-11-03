import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import 'es6-promise';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/airports/`)
      .then(res => { return res.json() })
      .then(cityName => { console.log('user ', cityName); this.setState({ cityName }) });
  }
  render() {

    return (
      <div className="App">
        <h1>Select City</h1>
        {this.state.cityName.map(city_name =>

          <option>{city_name}</option>

        )}
        {this.state.cityName.map(airports =>
          <div key={airports.IATA_code}>user : {airports.airport_name} Password: {airports.ICAO_code}</div>
        )}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;