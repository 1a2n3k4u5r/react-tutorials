import { useState } from 'react'   // use of Hook 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
 import './App.css'
 import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "ankur",
    age: 21
  }

  let newArray = [1, 2, 3]
  return (
    <>
       <h1 className='bg-green-400  text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
       <Card username="chaiaurcode" btnText="click me" />
       <Card username="ankur" btnText="visit me" />
       <Card />

    </>
    
  )
} 

export default App

//  <> this sign is called fragements, and  the concept of a image is that each tag is the closing tag but this concept is wrong

// props make  a component reusable