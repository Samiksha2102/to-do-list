import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <div>
          <input
            className='todo-input edit'
            type='text'
            placeholder='Update your item'
            value={input}
            name='text'
            onChange={handleChange}
            ref={inputRef}
            />
          <button className='todo-button edit'
                  onClick={handleSubmit}>Update</button>
        </div>
         ) : (
          <div>
            <input
              className='todo-input'
              type='text'
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
              Add todo
            </button>
          </div>
      )}
    </form>
  );
}

export default TodoForm;