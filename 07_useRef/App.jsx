// 创建“外壳”组件(RFC)
import React, {useRef} from 'react'


export default function App() {
  const myRef = useRef(null)
  // `current` 指向已挂载到 DOM 上的文本输入元素
  const onButtonClick = ()=>{
    console.log(myRef.current.value)
  }

  return(
    <>
      <input ref={myRef} type="text" />
      <button onClick={onButtonClick}>Click</button>
    </>
  )
}
