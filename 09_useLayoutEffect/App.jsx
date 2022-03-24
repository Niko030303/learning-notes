// 创建“外壳”组件(RFC)
import React, { useEffect, useState, useLayoutEffect } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(count===0){
      const randomNum = 10 + Math.random()*200
      setCount(randomNum);
    }
  },[count])

  useLayoutEffect(()=>{
    if(count===1){
      const randomNum = 10 + Math.random()*200
      setCount(randomNum);
    }
  },[count])
  
  return (
      <div>
         <h2>{count}</h2>
         <button onClick={()=>setCount(0)}>Count Effect</button>
         <button onClick={()=>setCount(1)}>Count Effect</button>
      </div>
  );
}
