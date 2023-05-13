import { useState } from 'react'
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from '../features/api/apiSlice'
import Todo from './Todo'

const Todos = () => {
  const [inputValue, setInputValue] = useState('')
  const { data: todos, isError, isSuccess, isLoading, error } = useGetTodosQuery()
  const [addTodo] = useAddTodoMutation()

  const submitTodo = (e) => {
    e.preventDefault()
    addTodo({ id: new Date(), todo: inputValue, completed: false })
    setInputValue('')
  }

  const newItemSection = (
    <form onSubmit={submitTodo}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div>
        <input type="text" id="new-todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" />
      </div>
      <button>Submit</button>
    </form>
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <main>
      <h1>Todo List</h1>
      <div>{isSuccess && todos.map((todo) => <Todo key={todo.id} {...todo} />)}</div>
      {newItemSection}
    </main>
  )
}

export default Todos
