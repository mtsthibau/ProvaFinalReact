import React from "react";
import { Campo } from "./componentes/Campo/Campo";
import { Botao } from "./componentes/Botao/Botao";

export default class Calculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroUm: null,
      numeroDois: null,
    };
  }

  setNumeroUm = (value) => {
    this.setState({
      numeroUm: value
    });
  }


  setNumeroDois = (value) => {
    this.setState({
      numeroDois: value
    });
  }

  calcular = () =>{
    const { numeroUm, numeroDois } = this.state;

    if((numeroUm % numeroDois) === 0)
      alert("Divisivel")
    else
      alert("Não é Divisivel")
  }

  render() {
    return (
      <div>
        <div className="lista">
          <div className="header">
            <h1>
              PROVA FINAL
            </h1>
          </div>
        </div>
        <div className="body">
          <div className="inputs">
            <Campo
              name="Primeiro Número"
              onChange={(e) => this.setNumeroUm(e.target.value)}
            />
            <Campo
              name="Segundo Número"
              onChange={(e) => this.setNumeroDois(e.target.value)}
            />
            <Botao name="Calcular" onClick={()=> this.calcular()} />
          </div>
        </div>
      </div>
    );
  }
}
