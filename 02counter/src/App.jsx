import { useState } from 'react'   // use of Hook 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

 let [counter,setCounter] = useState(15) // it is hook use to change the state to responsible, the means of the change is not to update the value , this change is propagate inside the UI means inside the DOM  OR useState is a React Hook that allows a component to store and update data (state). When the state changes, React automatically re-renders the component and updates the UI OR 
 // const [state, setState] = useState(initialValue);
// state → Current value
// setState → Function to update the value
// initialValue → Starting value
 

  // let  counter = 15
 
  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    //  setCounter( prevcounter = prevcounter + 1)
    //   setCounter( prevcounter = prevcounter + 1)
    //    setCounter( prevcounter = prevcounter + 1)
    //     setCounter( prevcounter = prevcounter + 1)  ,output = 19. (*********** INTERVIEW question)
    // console.log("clicked", counter);

  }

     const removeValue = () => {
    setCounter(counter - 1)

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter} </h2>

      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button
       onClick={removeValue}
      >remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App



// if we want to perform any action on any button then we write a "onclick method "
// agar kabhi bhi huma value inject karna ho to {} braces ka use karya.

// Hooks are  useContext,useState,useReducer,useEffect,useInsertionEffect, useLayoutEffect,useCallback,useMemo,useDeferredValue,useDispatchValue,useDebugValue, etc has a unique function,and special job and work, and hooks  are used to update the data of UI which are changed, ek task ek hi function ko assign ho na ki 5 jagah kam kara or 5 function se kam karao.


// IMPORTANT is that UI updation ko React control karta ha jassa ek button ko click karna pa 5 ya fir alag jagha change ho to UI ko update karna ka liya REact ka use hota hai.

//@@@@@@@%%%%%***** ####( IMPORTANT FOR INTERVIEW)) concept of useState
// useState apka jitna bhi update bhajana hai UI ma ,sath ma variable tak ma  unko batches ma bhajata hai, setCounter ka andar ek callback()  milta hai
