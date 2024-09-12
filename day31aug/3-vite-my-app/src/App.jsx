// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/button';
import Heading from './components/Heading';
import Paragraph from './components/paragraph';
// import { DangerRedButton,SaveGreenButton, } from './components/Bottons';
// import { DangerRedButton } from './components/Bottons';
// import YellowBtn from './components/Bottons';
import DynamicComponets from './components/Dynamic-Components';
import Square from './components/square';
import { RandomNumber } from './components/RandomNumber';
import { Title } from './components/Title';
import Button from './components/Bottons'
function App() {
  const nums = [33,43,52,23,33,32];
  let onClickHandler = ()=>{
    console.log(
        'Button Clicked'
    );
}

  return (
    <> 
         <Title titleText='Hello World' />
         <Title titleText='Kg Cooding'/>
         <Title titleText='Subsrib'/>
         <Title titleText='learing Props'/>
         <Title/>
         
         <Heading/>
         <Paragraph/>
         <Btn/>
         <br />
         <Button type='success' btnText='Click me' Handler={onClickHandler}/>
        
         <br />
         <Button type='failure' Handler={()=>{
          console.log('Save'
          )
         }}/>
         <br />
         <Button/>
         <br />
         <RandomNumber/>
         <RandomNumber/>
         <RandomNumber/>
         <RandomNumber/>
         <h1>Sumnata Sahoo</h1>
         <DynamicComponets/>
         <Square nums={nums}/>
         <Square nums={[23,1,2,4]}/>
         <Square/>
       
         
         
         
    </>
  )
}

export default App
