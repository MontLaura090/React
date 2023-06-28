import React from "react";

function ProyectoLista(props) {
  const { proyecto } = props;

  return (
    <li className="list-group-item">
      <div className="row p-1">
        <div className="col-xl-8 col-lg-7 col-xs-6">
          <h4>{proyecto.name}</h4>
          <p className="text-justify">
            <span className="font-weight-bold">Proyecto: {proyecto.name}</span>
            <br />
            {proyecto.paragraph}
          </p>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-xs-2">
        <img
          className="logo rounded-circle"
          src={`${process.env.PUBLIC_URL}imagen${proyecto.id}.jpg`}
          alt="logo"
        />
      </div>
    </li>
  );
}

export default ProyectoLista;
