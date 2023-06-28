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

             En Impulso Juvenil, nos apasiona empoderar a la población juvenil y brindarles oportunidades para su crecimiento personal y profesional. Somos una empresa comprometida en ayudar a los jóvenes que se encuentran en la situación conocida como "NINI" (Ni estudian, ni trabajan) a descubrir su potencial y adquirir las habilidades necesarias para ingresar al mundo laboral.
             <p>
             Nuestra misión es romper el ciclo de desmotivación y falta de oportunidades que muchos jóvenes enfrentan en la actualidad. Creemos firmemente en el poder transformador de la educación y la capacitación, y nos esforzamos por ofrecer programas de formación integral que les permitan adquirir conocimientos prácticos y competencias demandadas en el mercado laboral.
             </p>
            
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