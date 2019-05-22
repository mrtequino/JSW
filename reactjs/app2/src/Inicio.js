import React from "react";

import "./Inicio.css";

export default class Inicio extends React.Component {
  constructor() {
    super();

    this.props = {};

    this.state = {
      valor1: "",
      valores: [{ id: 1, nombre: "D1" }, { id: 2, nombre: "D2" }]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.valor1}
          onChange={this.handleChange}
        />

        <ul>
          {this.state.valores.map((valor, index) => (
            <li key={index}>{valor.nombre}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Mostrar texto</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ valor1: event.target.value });
  }

  handleClick() {
    alert(JSON.stringify(this.state));
  }
}
