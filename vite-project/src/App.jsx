import React, { useCallback, useState, useRef } from 'react'
import { useEffect } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator= useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed) str += '0123456789';
    if(charAllowed) str+= '~`@#$%^&*()_+=';
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, numberAllowed, charAllowed, setPassword]);
  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator]);

//useRef hook
  const passwordRef = useRef(null);

  return (
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-500'>
      <h1 className=' text-4xl text-center'>Password Generator</h1>
      <div className='text-center m-3'>
        <input type="text" value={password} className='outline-none rounded-s-md p-2' readOnly />
        <button className='bg-blue-700 p-2 text-white rounded-e-md'>Copy</button>
      </div>
      <div className='flex my-3 gap-3'>
        <div className='flex'>
          <input type="range" min={6} max={16} name='length' value={length} onChange={(e)=>setLength(e.target.value)} id="" />
          <label htmlFor='length'>length is: {length}</label>
        </div>
        <div className='flex'>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed(!numberAllowed)} id='num'  name='numbers' />
          <label htmlFor="num">Numbers allowed</label>
        </div>
        <div className='flex'>
          <input type="checkbox" defaultChecked={charAllowed} onChange={()=>setCharAllowed(!charAllowed)} name="char" id="char" />
          <label htmlFor="char">Charecters allowed</label>
        </div>
      </div>
    </div>
  )
}

export default App
