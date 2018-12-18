import React from "react";

const Location = ({ address, lat, lng }) => (
  <div className="row">
    <div className="col s12 l10 offset-l1">
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            <i className="material-icons left">my_location</i>
            Sua localização
            <span className="badge">
              latlng: {lat},{lng}
            </span>
          </span>
          <table className="striped">
            <tbody>
              <tr>
                <td>logradouro</td>
                <td>{address.logradouro}</td>
              </tr>
              <tr>
                <td>número</td>
                <td>{address.numero}</td>
              </tr>
              <tr>
                <td>bairro</td>
                <td>{address.bairro}</td>
              </tr>
              <tr>
                <td>cidade</td>
                <td>{address.cidade}</td>
              </tr>
              <tr>
                <td>estado</td>
                <td>{address.estado}</td>
              </tr>
              <tr>
                <td>CEP</td>
                <td>{address.cep}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Location;
