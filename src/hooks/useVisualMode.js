import { useState } from "react";


export default function useVisualMode(initial) {

  //  state variables
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  
  function transition(newMode, replace = false) {
   
    if (replace) {
      const diffHistory = [...history]
      diffHistory.pop()
      setHistory([...diffHistory, newMode])
    } else {
      setHistory([...history, newMode])
    }

    setMode(newMode)


 }

 function back() {

  if (history.length > 1) {
    const diffHistory = [...history]
    diffHistory.pop()
    setHistory([...diffHistory])
    setMode(diffHistory[diffHistory.length - 1])
  
  }
   
 }
  return { mode, transition, back }
}





// pop removes last element returns that element

// useState returns a pair: the current state value and a function that lets you update it

// the array destructuring syntax lets us give different names to the state variables we declared by calling useState 

// hooks are functions that let you "hook into" react state 

//state variable 
// let index = 0
// const [index, setIndex] = useState(0)

//index is a state variable and setIndex is the setter function


//[] array destructuring and it lets you read values from an array

// the array returned by useState always have exactly two items


// setter methods are used to change the values of an object 
//can be used to execute a functon whenever a specified property is attempted to be changed 

//useState is hook

//when you call useState you are telling React that you want this componenet to remember something 

// const [index, setIndex] = useState(0)

// you want React to remember index

// think of it like const [something, setSomething]

// the only argument to useState is the initial value of your state variable

//in this example the indexs initial value is set to 0 with useState(0)

// everytime component renders, useState gives you an array containing two values

// 1. the state variable (index) with value you stored
// 2. the state setter function (setIndex) which can update the state variable abnd trigger React to render the component again

// Use a state variable when a component needs to “remember” some information between renders.

