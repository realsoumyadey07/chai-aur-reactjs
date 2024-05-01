import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const getJokes = async()=> {
    try {
      const res = await axios.get('/api/jokes');
      setJokes(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getJokes();
  },[])
  const [jokes, setJokes] = useState([]);
  return (
    <div>
      <h1>Chai and react</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes && jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))} 
    </div>
  );
}

export default App;
