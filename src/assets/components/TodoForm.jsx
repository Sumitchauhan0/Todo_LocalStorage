import React, { useState } from 'react'
import { useTodo } from '../../contexts/TodoContexts'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const [showAddedPopup, setShowAddedPopup] = useState(false)
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo.trim()) return

        addTodo({ text: todo, completed: false })
        setTodo("")

        // ✅ Show popup
        setShowAddedPopup(true)
        setTimeout(() => setShowAddedPopup(false), 2000)
    }

    return (
        <>
            {/* ✅ Add Toast */}
            {showAddedPopup && (
                <div className="fixed top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded shadow-md z-50">
                    ✅ New Todo Added!
                </div>
            )}

            {/* ✅ Todo Input Form */}
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    type="submit"
                    className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoForm
