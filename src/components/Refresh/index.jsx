import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import Mock from 'mockjs'


const editUsername = (id) => {
  console.log('use-request-refresh-id', id)
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

export default function Refresh() {
  const {data, loading, run, refresh}  = useRequest(editUsername, {
    manual: true
  })

  useEffect(()=>{
    run(1)
  },[])

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <>
      <div>Username: {data}</div>
      <button onClick={refresh}>
        Refresh
      </button>
    </>
  )
}
