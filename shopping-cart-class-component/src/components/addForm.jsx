import React, { Component } from 'react';

class AddForm extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='add-form'>
        <input ref={this.inputRef} type='text' className='add-input' placeholder='item' />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default AddForm;
