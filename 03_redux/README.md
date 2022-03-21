redux：状态管理的 JS 库

作用：集中式管理 React 应用中多个组件**共享**的状态

## 设计思想

（1）Web 应用是一个状态机，视图与状态是一一对应的。

（2）所有的状态，保存在一个对象里面。

## 使用情况

- 某个组件的状态，需要让其他组件可以随时拿到（共享）
- 
- 一个组件需要改变另一个组件的状态（通信）

## 要点

应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。 惟一改变 state 的办法是触发 action，一个描述发生什么的对象。 为了描述 action 如何改变 state 树，你需要编写 reducers。


## 理解不变性(Immutability)

```javascript
> let a = [1, 2, 3]
> let b = a
> b.push(8)
> b
[1, 2, 3, 8]
> a
[1, 2, 3, 8]
```

更新数组b也会同时改变数组a。这是因为对象和数组是引用数据类型 → 这意味着这样的数据类型实际上并不保存值，而是存储指向存储单元的指针。

将a赋值给b，其实只是创建了第二个指向同一存储单元的指针。要解决这个问题，需要将引用的值复制到一个新的存储单元。

```javascript
// 使用 ES6 执行不可变操作，也可以使用操作符(...)执行不可变操作
> a = [1,2,3]
[ 1, 2, 3 ]
> b = Object.assign([],a)
[ 1, 2, 3 ]
> b.push(8)
> b
[ 1, 2, 3, 8 ] // b output
> a
[ 1, 2, 3 ] // a output
```

## 基本概念和 API

**Store**

保存数据的地方，整个应用只能有一个 Store

createStore()：接受另一个函数作为参数，返回新生成的 Store 对象

**State**

Store 的快照（Snapshot）

Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。

当前时刻的 State，可以通过store.getState()拿到。

```javascript
import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();
```

**Action**

Action 表示视图层（view）发出通知————state要变化了

Action 是一个对象。type属性（必选）表示 Action 的名称

```javascript
const action = {
    type: 'ADD_TODO',
    payload: 'Learn Redux'
};
```

**Action Creator**

定义函数生成 Action（封装）

```javascript
const ADD_TODO = '添加 TODO';

function addTodo =  (text) {
    return {
        type: ADD_TODO,
        text
    }
}

const action = addTodo('Learn Redux')
```

**store.dispatch()**

是视图层（view）发出 Action 的唯一方法（即接收一个 Aciton 对象作为参数，然后将它发送出去）

```javascript
import { createStore } from 'redux';

const store = createStore(fn);

store.dispatch({
    type: 'ADD_TODO',
    patload: 'Learn Redux'
});
```

可以改写成：

```javascript
store.dispatch(addTodo('Learn Redux'))
```

**Reducer**

Store 在接收到 Action后，计算出新 State 的过程叫 Reducer（接收 Action 和当前 State 作为参数，返回一个新的 State）

```javascript
const reducer = (state, action) {
    // ...
    return new_state
}
```

初始状态可以作为 State 的默认值，比如

```javascript
const defaultState = 0;
const reducer = (state = defaultState, action) {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
}

const state = reducer(1, {
    type: 'ADD',
    payload: 2
})
```

实际应用中，Reducer 函数不用像上面这样手动调用，store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。

```javascript
import { createStore } from 'redux'

const store = createStore(reducer)
```

以后每当 store.dispatch 发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。

**纯函数**

同样输入 >> 必定得到同样输出

Reducer 是一个纯函数————同样的 State，必然得到同样的 View

- 不得改写参数
- 不能调用系统I/O的API
- 不能调用Date.now()或者Math.random()等不纯的方法，因为每次返回的值都不同

```javascript
// State 是一个对象
function reducer(state, action) {
  return Object.assign({}, state, { thingToChange });
  // 或者
  return { ...state, ...newState };
}

// State 是一个数组
function reducer(state, action) {
  return [...state, newItem];
}
```

保证无论何时，View和对应的State总是一个不变的对象

**store.subscribe()**

subscribe：订阅

设置监听函数：一旦 State 发生变化，就自动执行这个函数

```javascript
import { createStore } from 'redux'

const store = createStore(reducer)

store.subscribe(listener)
```

一般用于将 View 的更新函数（组件的 render 方法或 setState 方法）放入 listener，可以实时实现 View 的自动渲染

```javascript
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
```

## Store 的实现

Store 的三个方法

- store.getState()
- store.dispatch()
- store.subscribe()

```javascript
// 解构对象
import { createStore } form 'reudx'

let { getState, dispatch, subscribe } = createStore(reducer)
```

createStore 可以接收第二个参数，表示 State 的最初状态（通常由服务器给出）

```javascript
// window.STATE_FROM_SERVER就是整个应用的状态初始值。注意，如果提供了这个参数，它会覆盖 Reducer 函数的默认初始值
let store = createStore(todoApp, window.STATE_FROM_SERVER)
```

## Reducer 的拆分

- Reducer 函数负责生成 State
- 整个应用只有一个 State 对象，包含所有的数据
- 对于大型应用，State 一定很庞大 >> Reducer 一定很庞大

不同 Action 分别改变 State 的不同属性，不同属性之间可能没有人和联系。

可以将 Reducer 函数拆分————不同函数负责处理不同属性，然后将他们合并成一个大的 Reducer 即可

```javascript
const chatReducer = (state = defaultState, action = {}) {
    return {
        chatLog: chatLog(state.chatLog, action),
        statusMessage: statusMessage(state.statusMessage, action),
        userName: userName(state.userName, action)
    }
}
```

redux 提供 combineReducers() 方法，用于拆分 Reducer——产生一个整体的 Reducer 函数。

该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State 对象。

```javascript
// 前提是 State 的属性名必须与子 Reducer 同名
import { combineReducers } from 'redux';

const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})
```

可以将所有子 Reducer 放在一个文件里，然后统一引入

```javascript
import { combineReducers } from 'redux'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
```

## 工作流程

1. 用户发出 Action >> store.dispatch(action)
2. Store 调用 Reducers 并传入 previousState、Action
3. Reducers 返回 newState 给到 Store
4. State变化时，Store 调用监听函数（listener）
5. 监听函数通过 store.getState() 获得当前状态，重新渲染组件

## 参考文档

[Redux 入门教程 - 阮一峰](https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

[Redux 入门教程（快速上手）](https://segmentfault.com/a/1190000011474522)



