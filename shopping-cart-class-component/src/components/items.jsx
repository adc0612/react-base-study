import React, { Component } from 'react';
import Item from '@/components/item';

class Items extends Component {
  state = {
    items: [
      { id: '1', name: 'Corn', count: 0 },
      { id: '2', name: 'Sunflower', count: 0 },
      { id: '3', name: 'Ham', count: 0 },
      { id: '4', name: 'Rice', count: 0 },
      { id: '5', name: 'Leek', count: 0 },
      { id: '6', name: 'Skittles', count: 0 },
      { id: '7', name: 'Kitkat', count: 0 },
    ],
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    console.log(index);
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

  render() {
    return (
      <ul>
        {this.state.items.map((item) => {
          return <Item key={item.id} item={item} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}></Item>;
        })}
      </ul>
    );
  }
}

export default Items;
