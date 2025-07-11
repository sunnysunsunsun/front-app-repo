import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useTodoStore } from '@/Stores/todo'

export default function TodoCreator() {
  const [title, setTitle] = useState('')
  const createTodo = useTodoStore(state => state.createTodo)
  const isLoadingForCreate = useTodoStore(state => state.isLoadingForCreate)

  async function handleCreateTodo() {
    if (!title.trim()) return
    await createTodo(title)
    setTitle('')
  }
  return (
    <div className="grid grid-cols-[1fr_100px] gap-2">
      <TextField
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key == 'Enter') handleCreateTodo()
        }}
      />
      <Button
        variant="primary"
        loading={isLoadingForCreate}
        onClick={() => handleCreateTodo()}>
        추가
      </Button>
    </div>
  )
}
