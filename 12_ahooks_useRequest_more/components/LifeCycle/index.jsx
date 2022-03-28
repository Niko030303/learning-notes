import { useRequest } from 'ahooks'
import React, {useState} from 'react'
import { message } from 'antd'

const editUsername = (username) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(Math.random()>0.5){
        console.log(username)
        resolve()
      }else{
        reject(new Error('Failed to modify username'))
      }
    }, 1000)
  })
}

export default function LifeCycle() {
  const [state, setState] = useState('')
  const {data, loading, error ,run} = useRequest(editUsername,{
    manual:true,
    onBefore: (params)=>{message.info(`Start Request: ${params[0]}`)},
    onSuccess: (data, params)=>{
      setState('')
      message.success(`The username was changed to "${params[0]}" !`
    )},
    onError: (e, params)=>{message.error(e.message)},
    onFinally: (data, params)=>{message.info(`Request finish`)}
    
  })

  return (
    <>
      <input 
        type="text" 
        placeholder='Please enter username'
        value={state}
        onChange={(e)=>{setState(e.target.value)}}
        style={{
          width:250,
          marginRight: 16
        }}
      />
      <button onClick={()=>run(state)}>
        {loading ? 'Loading' : 'Exit'}
      </button>
    </>
    
  )
}
