import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddComponents from './components/AddItem'
import Heading from './components/Heading'
import ListItem from './AddItem-List'
import ListItems from './components/ListItems'

function App() {
  
 

  return (
    <>
     <center >
      <div className='middle'>
      <Heading/>
      <AddComponents/>
      <ListItems/>
     
     </div>
     </center>
    </>
  )
}

export default App
