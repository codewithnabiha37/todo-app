function TaskStats({ tasks }) {
  const totalTasks = tasks.length

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="rounded-xl bg-white p-5 text-center shadow-sm transition hover:shadow-md">
        <p className="text-2xl font-bold text-gray-800">
          {totalTasks}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Total
        </p>
      </div>

      <div className="rounded-xl bg-white p-5 text-center shadow-sm transition hover:shadow-md">
        <p className="text-2xl font-bold text-blue-600">
          {activeTasks}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Active
        </p>
      </div>

      <div className="rounded-xl bg-white p-5 text-center shadow-sm transition hover:shadow-md">
        <p className="text-2xl font-bold text-green-600">
          {completedTasks}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Completed
        </p>
      </div>
    </div>
  )
}

export default TaskStats