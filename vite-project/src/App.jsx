import React, { useCallback, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator= useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    numberAllowed? str+= '0123456789': '';
    charAllowed? str+= '~`@#$%^&*()_+=':'';
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+= str.charAt(char);
    }
    setPassword(pass);
  },[length, numberAllowed, charAllowed])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-500'>
      <h1 className=' text-4xl text-center'>Password Generator</h1>
    </div>
  )
}

export default App
