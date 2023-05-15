import React, { Component } from "react";

class Somos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pelicula: {},
      };
    }
  
    render() {
      return (
        <div>
           <h1 className="text-center">
             ¿Quiénes Somos?
           </h1>
             <p align="justify">
                Papercraft es una empresa que se dedica a la creación de productos de papel innovadores y de alta calidad para satisfacer las necesidades de nuestros clientes. Nos inspiramos en el papel como un medio de expresión creativa, y por eso buscamos constantemente nuevas formas de innovar en nuestra producción. En nuestra empresa, nos enorgullece ofrecer una atención personalizada y cercana a nuestros clientes, para que juntos podamos crear productos de papel únicos e inolvidables. Además, trabajamos en armonía con el medio ambiente, para ofrecer productos sostenibles y responsables con el planeta. En definitiva, en nuestra empresa estamos comprometidos con la creatividad, la calidad y la sostenibilidad. Queremos que nuestros productos sean una expresión única de la personalidad y estilo de cada uno de nuestros clientes.    
            </p>
            <img
                class="img-fluid" alt="Responsive image"
                src={`${process.env.PUBLIC_URL}${"somos"}.jpg`}
            />
        </div>
      );
    }
  }
  
  export default Somos;