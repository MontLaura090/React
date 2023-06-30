import React, { Component } from "react";

import LinesChart from "./LinesChart";
//import BarsChart from "./BarsChart";
//import PiesChart from "./PiesChart";
import { getDataAntioquia, getDataPerYear } from "../../Utils/ApiRequests";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Aquí almacenaremos los datos de la API
      data2018: [],
      data2019: [],
    };
  }

  async componentWillMount() {
    const apiData = await getDataAntioquia();
    const apiData2018 = await getDataPerYear(2018);
    const apiData2019 = await getDataPerYear(2019);

    const rowsAndColumnsAntioquia = this.getColumnsAndRowsAntioquia(apiData.data);
    const rowsAndColumns2018 = this.getColumnsAndRowsYear(apiData2018.data.data);
    const rowsAndColumns2019 = this.getColumnsAndRowsYear(apiData2019.data.data);

    this.setState({ data: rowsAndColumnsAntioquia });
    this.setState({ data2018: rowsAndColumns2018 });
    this.setState({ data2019: rowsAndColumns2019 });
  }

  getColumnsAndRowsAntioquia(data) {
    const years = [];
    const percentaje = [];

    data.sort((a, b) => a.Ano - b.Ano).map((dataFragment) => {
        years.push(dataFragment.Ano);
        percentaje.push(dataFragment.Porcentaje);
    });

    return {
      rows: years,
      columns: percentaje
    };
  }

  getColumnsAndRowsYear(data) {
    const territory = [];
    const percentaje = [];

    data.map((dataFragment) => {
      territory.push(dataFragment.DominioGeografico);
      percentaje.push(dataFragment.Porcentaje);
    });

    return {
      rows: territory,
      columns: percentaje
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Mapeo de Datos de Poblacion</h1>
        <div>
          <p className="m-2"><b> PORCENTAJE DE POBLACION NINI EN ANTIOQUIA : </b>Gráfico de líneas básico</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
            <LinesChart data={this.state.data} /> {/* Pasar los datos a tu componente de gráfica */}
          </div>
        </div>
        <div>
        <p className="m-2"><b> PORCENTAJE DE POBLACION NINI 2018 : </b>Gráfico de líneas básico</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
            <LinesChart data={this.state.data2018} /> {/* Pasar los datos a tu componente de gráfica */}
          </div>
        </div>
        <div>
        <p className="m-2"><b> PORCENTAJE DE POBLACION NINI 2019 : </b>Gráfico de líneas básico</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
            <LinesChart data={this.state.data2019} /> {/* Pasar los datos a tu componente de gráfica */}
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
