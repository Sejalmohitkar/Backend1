import { useState } from 'react'
import axios from 'axios';

import './App.css'
import { useEffect } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
     <h2>Full stack | By Sejal</h2>
     <p>Jokes: {jokes.length}</p>

     {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      )
    )}
    </>
  )
}

export default App
