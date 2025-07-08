import React, { useState } from 'react'

function UseStateHook() {
    let [num,setNum]= useState(1)
    const handleAdd=()=>{
        setNum((currentValue)=>{
            return currentValue + 1
        })
    }
    const handleSub=()=>{
        setNum((currentValue)=>{
            return currentValue - 1
        })
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>sub</button>
    </div>
  )
}

export default UseStateHook