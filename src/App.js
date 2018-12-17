import React, { Component } from "react";
import axios from "axios";

import GasStation from "./components/GasStation";
import Location from "./components/Location";

class App extends Component {
  state = { gasStations: null };

  searchGasStations = () => {
    const server = process.env.REACT_APP_API_SERVER;

    this.setState({ gasStations: null }, () => {
      navigator.geolocation.getCurrentPosition(position => {
        axios
          .get(
            `${server}/api/gasstations?latlng=${position.coords.latitude},${
              position.coords.longitude
            }`
          )
          .then(res => {
            this.setState({ gasStations: res.data });
          })
          .catch(e => console.log(e));
      });
    });
  };

  render() {
    const { gasStations } = this.state;
    return (
      <div className="App container">
        <h2>Encontre postos de gasolina próximos da sua localização</h2>
        <button onClick={this.searchGasStations}>Buscar</button>
        {gasStations ? (
          <div>
            <Location
              lat={gasStations.lat}
              lng={gasStations.lng}
              address={gasStations.endereco}
            />
            <h3>Postos de gasolina abertos</h3>
            {gasStations.postos.map(gasStation => (
              <GasStation key={gasStation.lat} gasStation={gasStation} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
