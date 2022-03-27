import { useRequest } from 'ahooks'
import React, {useState} from 'react'
import { message } from 'antd'

const getUsernameRunAsync = (username)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(Math.random() > 0.5){
        resolve()
      }else{
        reject(new Error('Error'))
      }
    }, 1000)
  })
}

export default function GetUsernameRunAsync() {
  const [state, setState] = useState('')


  const {loading, runAsync} = useRequest(getUsernameRunAsync, {
    manual: true,
  })

  const onClick = async () => {
    try {
      await runAsync(state)
      setState('')
      message.success(`The username was changed to "${state}" !`)
    } catch (error) {
      message.error(error.message)
    }
  }

  return (
    <>
      <input 
        placeholder='Please enter username' 
        value={state}
        onChange={(e)=>setState(e.target.value)}
        style={{
          width: 250,
          marginRight: 16
        }}
      />
      <button onClick={onClick}>
        {loading ? 'Loading' : 'Exit'}
      </button>
    </>
  )
}
