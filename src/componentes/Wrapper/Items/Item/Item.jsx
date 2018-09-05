import React from 'react';

const Item = ({elemento, handleEraseClick}) => {
  return (
    <div className="row item">
      <div className="col-10 texto">{elemento.texto}</div>
      <div className="col-2">
        <div className="btn btn-outline-primary" onClick={e => handleEraseClick(elemento.id)}>x</div>
      </div>
    </div>
  );
}

export default Item;
