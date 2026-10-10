import { useState } from "react"

function TaskItem({ task, onToggleTask, onDeleteTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const handleUpdate = () => {
    if (!editText.trim()) {
      return
    }

    onUpdateTask(task.id, editText.trim())
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(task.text)
    setIsEditing(false)
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-blue-600"
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        ) : (
          <div className="min-w-0">
            <p
              className={`break-words font-medium ${
                task.completed
                  ? "text-gray-400 line-through"
                  : "text-gray-800"
              }`}
            >
              {task.text}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {task.completed ? "Completed" : "Active"}
            </p>
          </div>
        )}
      </div>

      <div className="ml-8 flex flex-wrap gap-2 sm:ml-4 sm:shrink-0">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="rounded-md px-3 py-2 text-sm text-green-600 transition hover:bg-green-50"
            >
              Update
            </button>

            <button
              onClick={handleCancel}
              className="rounded-md px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-md px-3 py-2 text-sm text-blue-600 transition hover:bg-blue-50"
            >
              Edit
            </button>

            <button
              onClick={() => onDeleteTask(task.id)}
              className="rounded-md px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskItem