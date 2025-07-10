import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry'])
  const [inputText, setInputText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  function addFruit() {
    setFruits([...fruits, inputText])
    setInputText('')
  }

  return (
    <>
      <h1> 과일 목록 </h1>
      <input
        ref={inputRef}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addFruit()
          }
        }}
      />
      <button onClick={() => addFruit()}> 추가 </button>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit}> {fruit}</li>
        })}
      </ul>
    </>
  )
}
