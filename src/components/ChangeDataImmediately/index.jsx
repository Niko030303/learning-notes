import { useRequest } from 'ahooks'
import React, { useRef, useState } from 'react'
import { message } from 'antd'
import Mock from 'mockjs'


const getUsername = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(Mock.mock('@name'));
    }, 1000)
  })
}

const editUsername = (username) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(Math.random()>0.5){
        resolve()
      }else{
        reject(new Error('Failed to modify username'))
      }
    }, 1000)
  })
}

export default function ChangeDataImmediately() {
  const [state, setState] = useState('')
  const lastRef = useRef()

  // 没传 manual，自动 useRequest
  const {data: username, mutate} = useRequest(getUsername)

  const {run: edit} = useRequest(editUsername, {
    manual: true,
    onSuccess: (params)=>{
      setState('')
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError: (error)=>{
      message.error(error.message)
      mutate(lastRef.current)
    }
  })

  const onChange = () => {
    lastRef.current = username
    mutate(state)
    edit(state)
  }

  return (
    <>
      <div>Username: {username}</div>
      <input 
        type="text"
        placeholder='Please enter username'
        value={state}
        onChange={(e)=>setState(e.target.value)}
        style={{
          width: 250,
          marginRight: 16
        }}
      />
      <button onClick={onChange}>Edit</button>
    </> 
  )
}
