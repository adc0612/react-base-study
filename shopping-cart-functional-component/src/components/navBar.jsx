import React, { memo } from 'react';

const NavBar = memo(({ totalCount }) => {
  return (
    <div className='navbar'>
      <i className='navbar-logo fas fa-leaf'></i>
      <span>Shopping Cart</span>
      <span className='navbar-count'>{totalCount}</span>
    </div>
  );
});

export default NavBar;
