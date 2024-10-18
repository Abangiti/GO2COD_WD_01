import { useState } from 'react'
import Todolist from './Todolist'
import Header from './Header'
import "./App.css";

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <div className='app-wrapper'>
    <div>
      <Header/>
    </div>
    <div>
    <Todolist/>
    </div>
 </div>
</div>
   
     
    </>
  )
}

export default App
