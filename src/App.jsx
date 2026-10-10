import { useState } from "react"
import Header from "./components/Header"
import TaskForm from "./components/TaskForm"
import TaskStats from "./components/TaskStats"
import TaskList from "./components/TaskList"
import EmptyState from "./components/EmptyState"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", [])
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  // Add task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  // Complete / Incomplete task
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  // Update task
  const updateTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, text: newText }
          : task
      )
    )
  }

  // Search + Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed)

    return matchesSearch && matchesFilter
  })

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">

        {/* Header + Search */}
        <Header
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />

        {/* Add Task */}
        <TaskForm onAddTask={addTask} />

        {/* Statistics */}
        <TaskStats tasks={tasks} />

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === "active"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Active
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === "completed"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Task List / Empty State */}
        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
          />
        ) : (
          <EmptyState />
        )}

      </div>
    </main>
  )
}

export default App