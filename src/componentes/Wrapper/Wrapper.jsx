import React, { Component } from 'react';
import Items from './Items/Items';
import AddForm from './AddForm/AddForm';

class Wrapper extends Component{
  render(){
    return(
      <div className="container">
        <div className="wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-2 titulo">Lista</div>
          </div>
          <br/>
          <AddForm handleAddClick = {this.props.handleAddClick}/>
          <hr/>
          <Items elementos = {this.props.elementos} handleEraseClick = {this.props.handleEraseClick}/>
        </div>
      </div>
    );
  }
}

export default Wrapper;
