// 创建“外壳”组件(RFC)
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom";
// 引入 App 组件
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './Reducers'




const store = createStore(counter)

const render = () => {
    ReactDOM.render(
    <Counter 
      value={store.getState()} 
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />, 
    document.getElementById('root'))
  }

render()
store.subscribe(render)

  