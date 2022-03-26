// 创建“外壳”组件(RFC)
import React from 'react'
import { useRequest } from 'ahooks';

const service = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(Math.random() > 0.5){
        resolve('Hello World')
      }else{
        reject(new Error('Failed to get username'))
      }
    }, 1000)
  })
}

export default function App() {
  const {data, error, loading} = useRequest(service)

  if(error){
    return <div>{error.message}</div>
  }
  if(loading){
    return <div>Loading...</div>
  }
  return <div>Message:{data}</div>
  

  
}
