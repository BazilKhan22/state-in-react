import React, { useState } from 'react'

const Card = () => {
  const [data, setData] = useState({
    name: "John Doe",
    age: 30
  })

  return (
    <div>
      <h2>Card Component</h2>
      <h3>Name: {data.name}</h3>
      <h3>Age: {data.age}</h3>

      <button className=" bg-amber-100 border-1 translate-y-2.5" onClick={() => setData({ ...data, name: "Bazil" })}>
        Change Name
      </button>

      <button className="bg-amber-100 border-1 translate-x-7 translate-y-2.5" onClick={() => setData({ ...data, age: 22 })}>
        Change Age
      </button>
    </div>
  )
}

export default Card
