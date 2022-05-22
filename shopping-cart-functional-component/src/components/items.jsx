import React from 'react';
import Item from '@/components/item';

const Items = ({ items, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = (item) => {
    onIncrement(item);
  };

  const handleDecrement = (item) => {
    onDecrement(item);
  };

  const handleDelete = (item) => {
    onDelete(item);
  };

  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete}></Item>;
      })}
    </ul>
  );
};

export default Items;
