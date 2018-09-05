import React from 'react';

const AddForm = ({handleAddClick}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddClick(e, this.texto.value);
    this.texto.value = '';
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row add-form">
        <div className="col-8">
          <div className="form-group">
            <input type="text" className="form-control" id="elemento" placeholder="Nuevo" ref={(input) => this.texto = input} autoComplete = "off"/>
          </div>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </div>
    </form>
  );
}

export default AddForm;
