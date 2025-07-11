import { useEffect } from 'react'
import { useTodoStore } from '@/Stores/todo'
import Loader from '@/components/Loader'
import TodoItem from '@/components/todos/TodoItem'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const isLoadingForFetch = useTodoStore(state => state.isLoadingForFetch)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {isLoadingForFetch && <Loader size={100} />}
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}
