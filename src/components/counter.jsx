import React from "react"

const Counter = () =>{
    const [count,setCount] = React.useState(0); 
   
  function add () {
       setCount(count+1)
    }
   function adsub(){
       setCount(count-1)
   }
    return (
        <>
        <div>Counter:{count}</div>
        <button onClick={add}>ADD</button>
        <button onClick={adsub}>Reduce</button>
        </>
    )
}

export default Counter;