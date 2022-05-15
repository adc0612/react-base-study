import React, { Component } from 'react';
import Items from '@/components/items';
import NavBar from '@/components/navBar';
import AddForm from '@/components/addForm';

class Cart extends Component {
  state = {
    items: [
      { id: 1, name: 'Corn', count: 0 },
      { id: 2, name: 'Sunflower', count: 0 },
      { id: 3, name: 'Ham', count: 0 },
      { id: 4, name: 'Rice', count: 0 },
      { id: 5, name: 'Leek', count: 0 },
      { id: 6, name: 'Skittles', count: 0 },
      { id: 7, name: 'Kitkat', count: 0 },
    ],
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count++;
    this.setState({ items });
  };

  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count = items[index].count - 1 < 0 ? 0 : items[index].count - 1;
    this.setState({ items });
  };

  handleDelete = (item) => {
    const items = this.state.items.filter((val) => val.id !== item.id);
    this.setState({ items });
  };

  addItem = (name) => {
    const items = [...this.state.items, { id: this.state.items[this.state.items.length - 1].id + 1, name, count: 0 }];
    this.setState({ items });
  };

  resetItems = () => {
    const items = this.state.items.map((item) => {
      item.count = 0;
      return item;
    });
    this.setState({ items });
  };

  render() {
    return (
      <>
        <NavBar totalCount={this.state.items.filter((item) => item.count > 0).length}></NavBar>
        <AddForm onAdd={this.addItem}></AddForm>
        <Items items={this.state.items} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}></Items>
        <button className='items-reset' onClick={this.resetItems}>
          Reset All
        </button>
      </>
    );
  }
}

export default Cart;
