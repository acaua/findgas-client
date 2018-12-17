import React from "react";

const Location = ({ address, lat, lng }) => (
  <div className="card z-depth-0">
    <div className="card-content">
      <span className="card-title">Sua localização</span>
      <p>lat: {lat}</p>
      <p>lng: {lng}</p>
      <p>estado: {address.estado}</p>
      <p>cidade: {address.cidade}</p>
      <p>bairro: {address.bairro}</p>
      <p>logradouro: {address.logradouro}</p>
      <p>numero: {address.numero}</p>
      <p>CEP: {address.cep}</p>
    </div>
  </div>
);

export default Location;
