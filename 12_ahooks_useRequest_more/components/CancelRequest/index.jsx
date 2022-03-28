import React, {useState} from 'react'
import { message } from 'antd'
import { useRequest } from 'ahooks'

const editUsername = (username) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      if(Math.random()>0.5){
        resolve()
      }else{
        reject(new Error('Failed to modify username'))
      }
    }, 1000)
  })
}

export default function CancelRequest() {
  const [state, setState] = useState('')

  const {loading, error, run, cancel} = useRequest(editUsername, {
    manual:true,
    onSuccess: (result, params)=>{
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError: ()=>{
      message.error(error.message)
    }

  })

  return (
    <>
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
      <button style={{marginRight: 16}} onClick={()=>run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </button>
      <button onClick={cancel}>
        Cancel
      </button>
    </>
  )
}
