import { useEffect, useState } from 'react';

import './App.css';
import { TodoProvider } from './contexts/TodoContexts';
import TodoForm from './assets/components/TodoForm';
import TodoItem from './assets/components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos(prevTodos =>
      prevTodos.map(item => item.id === id ? { ...item, ...todo } : item)
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(item => item.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
