function EmptyState() {
  return (
    <div className="mt-6 rounded-xl bg-white p-8 text-center shadow-sm sm:p-10">
      <div className="text-5xl">📝</div>

      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        No tasks found
      </h2>

      <p className="mx-auto mt-2 max-w-md text-gray-500">
        You don't have any tasks here. Add a new task to get started.
      </p>
    </div>
  )
}

export default EmptyState