import React, { Component } from "react";
import axios from "axios";

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
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">Sua localização</span>
                <p>lat: {gasStations.lat}</p>
                <p>lng: {gasStations.lng}</p>
                <p>estado: {gasStations.endereco.estado}</p>
                <p>cidade: {gasStations.endereco.cidade}</p>
                <p>bairro: {gasStations.endereco.bairro}</p>
                <p>logradouro: {gasStations.endereco.logradouro}</p>
                <p>numero: {gasStations.endereco.numero}</p>
                <p>CEP: {gasStations.endereco.cep}</p>
              </div>
            </div>
            <h3>Postos de gasolina abertos</h3>
            {gasStations.postos.map(gasStation => (
              <div className="card" key={gasStation.lat}>
                <div className="card-content">
                  <span className="card-title">{gasStation.nome}</span>
                  <p>
                    lat : {gasStation.lat}, lng: {gasStation.lng}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${gasStation.endereco}`}
                    target="_blank"
                  >
                    {gasStation.endereco}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
