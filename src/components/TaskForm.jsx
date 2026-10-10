import { useState } from "react"

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!task.trim()) {
      return
    }

    onAddTask(task.trim())

    setTask("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 sm:flex-row"
    >
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
        className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95 sm:w-auto"
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskForm