import TaskItem from "./TaskItem"

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onUpdateTask,
}) {
  return (
    <div className="mt-6 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  )
}

export default TaskList