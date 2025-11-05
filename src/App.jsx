import React from 'react'
import './App.css'
import { useState } from 'react'
import Card from './Card'

const App = () => {
  const [count, setCount] = useState(0)
  const [userdata, setUserdata] = useState({
    name: 'John Doe',
    age: 30,
    email: 'bazilurrehman08@gmail.com'
  })
 console.log(userdata);
 



  return (
    <div>
      <h1 className='bg-amber-400 pt-7 text-center font-serif'>Counter: {count}</h1>
      <button className="border-1 translate-x-180 translate-y-2.5 ml-px text-center font-serif" onClick={() => setCount(count + 1)}>Increment</button>
      <button className='border-1 translate-x-95 translate-y-2.5 ' onClick={() => setCount(count - 1)}>Decrement</button>

      <div className='mt-7 bg-center flex justify-center' > 
        <Card />
      </div>
    </div>
    
    
  )
}

export default App
