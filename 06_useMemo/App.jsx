// 创建“外壳”组件(RFC)
import React, { useState, useEffect, useMemo } from 'react'


export default function App() {
  let [ip, setIp] = useState(0)
  let [pv, setPv] = useState(0)

  let memoIp = useMemo(()=>{
    return  "useMemo ip here:" + Date.now() + ip
  }, [ip])

  let effectMessage = "useEffect here:"
  
  useEffect(()=>{
    effectMessage =  "useEffect here:" + Date.now
  })

  return (
    <>
      <div>{ip}</div>
      <div>{pv}</div>
      <div>{memoIp}</div>
      <div>{effectMessage}</div>
      <button onClick={()=>setIp(ip+1)}>Click IP</button>
      <button onClick={()=>setPv(pv+1)}>Click PV</button>
    </>       
  )
}
