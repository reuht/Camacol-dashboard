// Proyecto1.js
import React from "react";

const ListProyects = ({ title, data }) => {
  return (
    <div className="title-container">
      <div className="title-container-title">
        <p className="title-container-title-text">{title}</p>
      </div>
        <div className="content-list-constructor">
          {data.length > 0 ? (
            <table className="content-list-constructor-table">
              <thead>
                <tr>
                  <th>Constructora</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
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

export default ListProyects;
