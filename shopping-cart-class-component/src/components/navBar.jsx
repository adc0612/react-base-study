import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <i className='navbar-logo fas fa-leaf'></i>
        <span>Shopping Cart</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </div>
    );
  }
}

export default NavBar;
