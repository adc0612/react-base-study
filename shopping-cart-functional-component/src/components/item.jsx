import React, { memo } from 'react';

const Item = memo(({ item, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(item);
  };
  const handleDecrement = () => {
    onDecrement(item);
  };
  const handleDelete = () => {
    onDelete(item);
  };
  return (
    <li>
      <span className='item-name'>{item.name}</span>
      <span className='item-count'>{item.count}</span>
      <button className='item-button item-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
      <button className='item-button item-decrease' onClick={handleDecrement}>
        <i className='fas fa-minus-square'></i>
      </button>
      <button className='item-button item-delete' onClick={handleDelete}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
});

export default Item;
