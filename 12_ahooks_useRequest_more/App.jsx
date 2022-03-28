// 创建“外壳”组件(RFC)
import React from 'react'
import LifeCycle from './components/LifeCycle'
import Refresh from './components/Refresh'
import ChangeDataImmediately from './components/ChangeDataImmediately'
import CancelRequest from './components/CancelRequest'
import ParameterManagement from './components/ParameterManagement'

export default function App() { 
  return (
    <>
      <h2>Life cycle</h2>
      <LifeCycle />
      <br /><br /><hr />
      <h2>Refresh</h2>
      <Refresh />
      <br /><br /><hr />
      <h2>Change Data Immediately</h2>
      <ChangeDataImmediately />
      <br /><br /><hr />
      <h2>Cancel Request</h2>
      <CancelRequest />
      <br /><br /><hr />
      <br /><br /><hr />
      <h2>Parameter Management</h2>
      <ParameterManagement />
      <br /><br /><hr />
    </> 
    )
}
