// 创建“外壳”组件(RFC)
import React, {useState, useRef, useCallback, useMemo} from 'react'

export default function App() {
  let [ip, setIp] = useState(0)
	let [pv, setPv] = useState(0)

  function a(ip){
    return "useCallback ip here:" + Date.now() + ip
  }

  let callbackIp = useCallback(
		a(ip)
	, [ip])

  let memoIp = useMemo(()=>{
		return "useMemo ip here:" + Date.now() + ip
	}, [ip])

  return (
      <div>
          <div>{ip}</div>
          <div>{pv}</div>
          <div>{callbackIp}</div>
          <div>{memoIp}</div>
          <button onClick={()=>setIp(c=>c+1)}>Click Ip</button>
          <button onClick={()=>setPv(c=>c+1)}>Click Pv</button>
      </div>
  );


}
