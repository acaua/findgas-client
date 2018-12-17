import React from "react";

const GasStation = ({ gasStation }) => (
  <div className="card" key={gasStation.lat}>
    <div className="card-content">
      <span className="card-title">{gasStation.nome}</span>
      <p>
        lat : {gasStation.lat}, lng: {gasStation.lng}
      </p>
      <a
        href={`https://maps.google.com/?q=${gasStation.endereco}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {gasStation.endereco}
      </a>
    </div>
  </div>
);

export default GasStation;
