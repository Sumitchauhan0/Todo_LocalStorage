import React, { useState } from 'react';
import { useTodo } from '../../contexts/TodoContexts';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSavedPopup, setShowSavedPopup] = useState(false);

  const { toggleTodo, deleteTodo, updateTodo } = useTodo();

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, text: todoMsg });
    setIsTodoEditable(false);
    setShowSavedPopup(true);

    setTimeout(() => {
      setShowSavedPopup(false);
    }, 2000); // popup disappears after 2s
  };

  const confirmDelete = () => {
    deleteTodo(todo.id);
    setShowDeleteConfirm(false);
  };

  return (
    <>
      {/* ✅ Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Are you sure you want to delete this todo?
            </h3>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Saved Toast */}
      {showSavedPopup && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
          ✅ Changes Saved!
        </div>
      )}

      {/* ✅ Todo Item UI */}
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
          todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
          } ${todo.completed ? 'line-through' : ''}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* ✅ Edit/Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable(true);
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? '📁' : '✏️'}
        </button>

        {/* ✅ Delete Button (opens confirm) */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => setShowDeleteConfirm(true)}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItem;
