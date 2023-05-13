import { useUpdateTodoMutation, useDeleteTodoMutation } from '../features/api/apiSlice'

const Todo = ({ id, completed, todo }) => {
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  return (
    <div>
      <p>{todo}</p>
      <input type="checkbox" checked={completed} onChange={() => updateTodo({ todo, id, completed: !completed })} />
      <button onClick={() => deleteTodo({ id: id })}>Delete</button>
    </div>
  )
}
export default Todo
