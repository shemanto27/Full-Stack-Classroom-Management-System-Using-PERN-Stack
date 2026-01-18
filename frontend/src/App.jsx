import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
         .then((response) =>{setJokes(response.data)})
         .catch((error)=>{console.log(error)})
  }, [])

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>
      {
        jokes.map((joke) => (
        <div key={joke.id}>
        <p>{joke.text}</p>
        </div>
))
      }
    </>
  )
}

export default App
