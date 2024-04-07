import { useState } from 'react'
import './App.css'
import ChildA from './ChildA'
function App() {
 const [text,setText] =useState("")
  return (
    <>
   {/*<ChildA name="Aman" age={25}/>*/}
   <ChildA name={text} age={setText}/>
    </>
  )
}

export default App
