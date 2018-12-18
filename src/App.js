import React, { Component } from "react";
import axios from "axios";

import GasStation from "./components/GasStation";
import Location from "./components/Location";

class App extends Component {
  state = { gasStations: null, loading: false };

  searchGasStations = () => {
    const server = process.env.REACT_APP_API_SERVER;

    this.setState({ gasStations: null, loading: true }, () => {
      navigator.geolocation.getCurrentPosition(position => {
        axios
          .get(
            `${server}/api/gasstations?latlng=${position.coords.latitude},${
              position.coords.longitude
            }`
          )
          .then(res => {
            this.setState({ gasStations: res.data, loading: false });
          })
          .catch(e => console.log(e));
      });
    });
  };

  render() {
    const { gasStations, loading } = this.state;
    return (
      <div className="App container">
        <h3 className="center">Encontre postos de gasolina próximos</h3>
        <div className="center" style={{ marginBottom: 36 }}>
          <button onClick={this.searchGasStations} className="btn-large">
            Buscar <i className="material-icons right">my_location</i>
          </button>
        </div>
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
        ) : loading ? (
          <div className="container" style={{ marginTop: 72 }}>
            <div className="progress ">
              <div className="indeterminate" />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
