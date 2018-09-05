import React from 'react';
import Item from './Item/Item';

const Items = ({elementos, handleEraseClick}) => {
  return (
    <div className="elementos">
      {elementos.map(elemento => {
        return (<Item key = {elemento.id} elemento = {elemento} handleEraseClick = {handleEraseClick} />);
      })}
    </div>
    );
}

export default Items;
