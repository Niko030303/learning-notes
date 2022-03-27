import { useRequest } from 'ahooks'
import React, {useState} from 'react'
import { message } from 'antd'

const service = (username) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(Math.random()>0.5){
        resolve()
      }else{
        reject(new Error('Error'))
      }
    }, 1000)

  })
}
export default function GetUsernameRun() {
  const [state, setState] = useState('')

  const {loading, run} = useRequest(
    service, 
    {
      manual: true,
      onSuccess: (data, params)=>{
        setState("")
        message.success(`The username was changed to "${params[0]}" !`)
      },
      onError: (error, params) => {
        message.error(error.message)
      }

    }
    )
  return (
    <>
      <input 
      value={state} 
      onChange={(e)=>{setState(e.target.value)}}  
      type="text"
      placeholder="Please enter username"
      style={{width: 250, marginRight:16}} />
    <button onClick={()=>run(state)}>
      {loading ? 'Loading' : 'Exit'}
    </button>
    </>
    
  )
}
