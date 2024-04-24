// Proyecto2.js
import React from 'react';

const Proyecto2 = ({ title, info, total }) => {
  return (
    <div className="container">
      <div className="title-container">
        <h2 className="title">{title}</h2>
        <div className="subtitle">Constructora</div>
      </div>
      <div className="total">
        <p>{total}</p>
      </div>
      
      <div className="wrapper small-scroll"> {/* Aplica la clase para el scroll */}
        {info.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {info.map((item, index) => (
                <tr key={index}>
                  <td>{item.texto}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay información disponible</p>
        )}
      </div>
    </div>
  );
};

export default Proyecto2;

