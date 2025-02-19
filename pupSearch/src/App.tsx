import { useState } from 'react'
import { Input } from '@/components/ui/input'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-xl font-bold'>Login</h1>
      <Input placeholder='Enter your Username' />
    </>
  )
}

export default App
