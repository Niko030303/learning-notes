// 创建“外壳”组件(RFC)
import React from 'react'
import GetUsernameRun from './components/GetUsernameRun'
import GetUsernameRunAsync from './components/GetUsernameRunAsync'


export default function App() { 
  return (
    <>
      <h2>GetUsernameRun</h2>
      <GetUsernameRun />
      <h2>GetUsernameRunAsync</h2>
      <GetUsernameRunAsync />
    </>
    )
}
