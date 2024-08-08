
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]= useState("lightblue")

  return (
    
    <div className="w-full h-screen duration-200 " 
    style = {{backgroundColor: color}}
    >

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className=' flex flex-wrap gap-3 shadow-xl bg-white px-2 py-3 rounded-xl'>

      <button onClick={ () => setColor('red')} 
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor :"red"}} >Red</button>
      <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor :"Blue"}} >Blue</button>
      <button onClick={()=> setColor('orange')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor :"orange"}} >Orange</button>
      <button onClick={()=> setColor('black')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor :"Black"}} >Black</button>
      <button 
      onClick={()=> setColor('Green')}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor :"Green"}} >Green</button>
        </div>
      </div>
    </div>    
  )
}

export default App
