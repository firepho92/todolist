import React, { Component } from 'react';
import Wrapper from './componentes/Wrapper/Wrapper';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      elementos: []
    }
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleEraseClick = this.handleEraseClick.bind(this);
  }

  handleEraseClick(id){
    var elementos = this.state.elementos;
    var index = elementos.map(elemento => {
      return elemento.id
    }).indexOf(id);
    elementos.splice(index, 1);
    this.setState({
      elementos: elementos
    });
  }

  handleAddClick(e, texto){
    console.log(this.state.elementos.length + 1);
    var elementos = this.state.elementos;
    var elemento = {
      id: this.state.elementos.length + 1,
      texto: texto
    }
    elementos.push(elemento);
    this.setState({
      elementos: elementos
    });
  }

  render() {
    return (
      <Wrapper elementos = {this.state.elementos} handleAddClick = {this.handleAddClick} handleEraseClick = {this.handleEraseClick} />
    );
  }
}

export default App;
