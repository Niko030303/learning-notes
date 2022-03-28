import { useRequest } from 'ahooks'
import React, {useState} from 'react'
import Mock from 'mockjs'

const getUserName = (id) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

export default function ParameterManagement() {
  const [state, setState] = useState('')
  const {data, run, params} = useRequest(getUserName, {
    defaultParams: ['1'],
  })

  return (
    <>
      <input 
        type="text" 
        value={state}
        onChange={e=>setState(e.target.value)}
        placeholder="Please enter userId"
        style={{
          width: 250,
          marginRight: 16
        }}
      />
      <button onClick={()=>run(state)}>GetUserName</button>
      <div>UserId: {params[0]}</div>
      <div>UserName: {data}</div>
    </> 
  )
}
