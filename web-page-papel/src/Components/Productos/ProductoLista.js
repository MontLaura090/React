import React from "react";

function ProductoLista(props) {
  const { producto } = props;

  return (
    <li className="list-group-item">
      <div className="row p-1">
        <div className="col-xl-8 col-lg-7 col-xs-6">
          <h4>{producto.name}</h4>
          <p className="text-justify">
            <span className="font-weight-bold">Producto: {producto.name}</span>
            <br />
            {producto.paragraph}
          </p>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-xs-2">
        <img
          className="logo rounded-circle"
          src={`${process.env.PUBLIC_URL}producto${producto.id}.png`}
          alt="logo"
        />
      </div>
    </li>
  );
}

export default ProductoLista;
