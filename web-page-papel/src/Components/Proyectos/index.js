import React, { Component, Fragment } from "react";

import ProyectoLista from "./ProyectoLista";

class Proyectos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        proyectos: [
          {
            id: 1,
            name: "Curso de programación básica",
            paragraph: "Cubre conceptos como lógica de programación, estructuras de datos, algoritmos y lenguajes de programación populares."
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
      const { proyectos } = this.state;
      return proyectos.map((proyecto) => (
        <ProyectoLista
          key={proyecto.id}
          proyecto={proyecto}
        />
      ));
    }
  
    render() {
      return (
        <div>
          <h1 className="text-center">
            Nuestros Proyectos
          </h1>

          <Fragment>
            <ul className="list-group mt-5">{this.ponerFilas()}</ul>
          </Fragment>
        </div>
      );
    }
  }
  
  export default Proyectos;