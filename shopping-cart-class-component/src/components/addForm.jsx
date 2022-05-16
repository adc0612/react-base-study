import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit} className='add-form'>
        <input ref={this.inputRef} type='text' className='add-input' placeholder='item' />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default AddForm;
