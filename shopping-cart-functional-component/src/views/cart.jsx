import React, { useState } from 'react';
import Items from '@/components/items';
import NavBar from '@/components/navBar';
import AddForm from '@/components/addForm';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Corn', count: 0 },
    { id: 2, name: 'Sunflower', count: 0 },
    { id: 3, name: 'Ham', count: 0 },
    { id: 4, name: 'Rice', count: 0 },
    { id: 5, name: 'Leek', count: 0 },
    { id: 6, name: 'Skittles', count: 0 },
    { id: 7, name: 'Kitkat', count: 0 },
  ]);

  const handleIncrement = (item) => {
    // map으로 state.items 배열 순회하면서 들어온 Item의 id와 같은 item을 찾는다.
    // 같으면 해당 item의 속성을 ...item을 이용해 기존 속성을 복사하고 count만 1증가해서 return한다.
    // 만약 id와 같지 않은 Item은 그냥 Return한다.
    const newItems = items.map((obj) => {
      if (obj.id === item.id) {
        return { ...item, count: item.count + 1 };
      }
      return obj;
    });
    setItems(newItems);
  };

  const handleDecrement = (item) => {
    const newItems = items.map((obj) => {
      if (obj.id === item.id) {
        const count = item.count - 1;
        return { ...item, count: count < 0 ? 0 : count };
      }
      return obj;
    });
    setItems(newItems);
  };

  const handleDelete = (item) => {
    const newItems = items.filter((val) => val.id !== item.id);
    setItems(newItems);
  };

  const addItem = (name) => {
    const newItems = [...items, { id: items[items.length - 1].id + 1, name, count: 0 }];
    setItems(newItems);
  };

  const resetItems = () => {
    const newItems = items.map((item) => {
      return { ...item, count: 0 };
    });
    setItems(newItems);
  };

  return (
    <>
      <NavBar totalCount={items.filter((item) => item.count > 0).length}></NavBar>
      <AddForm onAdd={addItem}></AddForm>
      <Items items={items} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete}></Items>
      <button className='items-reset' onClick={resetItems}>
        Reset All
      </button>
    </>
  );
};

export default Cart;
