import React, { memo, useRef } from 'react';

const AddForm = memo(({ onAdd }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className='add-form'>
      <input ref={inputRef} type='text' className='add-input' placeholder='item' />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default AddForm;
