import { useState } from 'react'
import MainBody from './components/main-body'
import { Heading } from './components/Heading'
import { DateTodo } from './components/Date'
import TodoComponents from './components/TodaComponents'
import { TodoItem } from './components/messageTodo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center>
     {/* <MainBody/> */}
     <Heading text="Todo App"/>
     
     
    <TodoComponents/>
    <TodoItem item_name="Buy Milk" time="4/10/2023"/>
    <TodoItem item_name="Go to College" time="5/10/2023"/>
     
    </center>
    </>
  )
}

export default App
