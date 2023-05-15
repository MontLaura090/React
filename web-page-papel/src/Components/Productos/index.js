import React, { Component, Fragment } from "react";

import ProductoLista from "./ProductoLista";

class Productos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productos: [
          {
            id: 1,
            name: "papel",
            paragraph: "papel higienico"
          },
          {
            id: 2,
            name: "Malla de cartón",
            paragraph: "Malla de cartón"
          },
          {
            id: 3,
            name: "Libreta",
            paragraph: "Libreta argollada"
          }
        ]
      };
    }

    ponerFilas = () => {
      const { productos } = this.state;
      return productos.map((producto) => (
        <ProductoLista
          key={producto.id}
          producto={producto}
        />
      ));
    }
  
    render() {
      return (
        <div>
          <h1 className="text-center">
            Nuestros Productos
          </h1>

          <Fragment>
            <ul className="list-group mt-5">{this.ponerFilas()}</ul>
          </Fragment>
        </div>
      );
    }
  }
  
  export default Productos;