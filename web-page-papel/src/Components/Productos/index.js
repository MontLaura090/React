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
            paragraph: "papel pal culo"
          },
          {
            id: 2,
            name: "goma",
            paragraph: "goma pal culo"
          },
          {
            id: 3,
            name: "trapo",
            paragraph: "trapo pal culo"
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