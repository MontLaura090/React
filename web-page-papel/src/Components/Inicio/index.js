import React, { Component } from "react";

import LinesChart from "./LinesChart";
//import BarsChart from "./BarsChart";
//import PiesChart from "./PiesChart";
import { getDataAntioquia } from "../../Utils/ApiRequests";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Aquí almacenaremos los datos de la API
    };
  }

  async componentWillMount() {
    const apiData = await getDataAntioquia();
    console.log(apiData.data);
    this.setState({ data: apiData.data });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Inicio</h1>
        <div>
          <p className="m-2"><b>Ejemplo #1: </b>Gráfico de líneas básico</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
            <LinesChart data={this.state.data} /> {/* Pasar los datos a tu componente de gráfica */}
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
