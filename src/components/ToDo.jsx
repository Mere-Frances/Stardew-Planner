import React, { useState, useRef } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const plottedNotes = useRef([]);

  const addTodo = () => {
    const input = document.getElementById('todoInput');
    const inputValue = input.value.trim();

    if (inputValue !== '') {
      // Generate random position
      const container = document.querySelector('.postit-container');
      const containerRect = container.getBoundingClientRect();

      let randomX = 0;
      let randomY = 0;
      let attempts = 0;
      const notes = plottedNotes.current;

      while (true) {
        randomX = Math.floor(Math.random() * (containerRect.width - 100)); // Keep inside container
        randomY = Math.floor(Math.random() * (containerRect.height - 100));

        let isOverlapping = false;
        for (let i = 0; i < notes.length; i++) {
          const [x, y] = notes[i];
          if (randomX > x - 100 && randomX < x + 100 && randomY > y - 100 && randomY < y + 100) {
            isOverlapping = true;
            break;
          }
        }

        if (notes.length === 0) isOverlapping = false;
        if (!isOverlapping || attempts > 1000) {
          notes.push([randomX, randomY]);
          break;
        }

        attempts++;
      }

      // Add new todo with random properties
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          text: inputValue,
          x: randomX,
          y: randomY,
          checked: false,
        },
      ]);

      input.value = '';
    } else {
      alert('Please enter a valid task');
    }
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div>
      <div className="input-container">
        <input className='input' id="todoInput" type="text" placeholder="Enter a task..." />
        <button className='button' onClick={addTodo}>Add Task</button>
      </div>

      <div className="postit-container">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="todo-item"
          >
            <input
              id='check'
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleComplete(todo.id)}
            />
            <p
              style={{
                textDecoration: todo.checked ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
