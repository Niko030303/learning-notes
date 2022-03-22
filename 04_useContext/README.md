## useContext

### 定义

createContext 能够**创建**组件之间共享的上下文状态。然后通过 useContext 在组件中**使用**这些状态

### 场景

现在有两个组件 Navbar 和 Messages，我们希望它们之间共享状态。

```typescript
<div className="App">
  <Navbar/>
  <Messages/>
</div>
```

第一步就是使用 React Context API，在组件外部建立一个 Context。

```typescript
const AppContext = React.createContext({});
```

组件封装代码如下

```typescript
<AppContext.Provider value={{
  username: 'Hello'
}}>
  <div>
    <Navbar/>
    <Messages/>
  </div>
</AppContext.Provider>
```

上面代码中，`AppContext.Provider`提供了一个 Context 对象，这个对象可以被子组件共享。

Navbar 组件的代码如下。

```typescript
export default function Messages() {
	const {username} = React.useContext(AppContext)
	return (
		<div>
			<h1>Navbar</h1>
			<div>{username}</div>
		</div>
	)
}
```

上面代码中，`useContext()`钩子函数用来引入 Context 对象，从中获取`username`属性。

Message 组件的代码也类似。

```typescript

export default function Messages() {
	const {username} = React.useContext(AppContext)
	return (
		<div>
			<h1>Message</h1>
			<div>{username}</div>
		</div>
	)
}
```

![[Pasted image 20220322011636.png]]

### 示例

**createContext 用法**

只需要一个defaultValue默认值参数，可不填。

```typescript
const MyContext = React.createContext(defaultValue)
```

**useContext 示例**

比如上文中的例子，我们把显示计数器放到了一个叫 ExampleChild 的子组件中，然后创建一个全局CountContext来共享计数器，然后通过 CountContext.Provider 向子组件传递状态。

### 注意点

`useContext` 的参数必须是 _context 对象本身_：

-   **正确：** `useContext(MyContext)`
-   **错误：** `useContext(MyContext.Consumer)`
-   **错误：** `useContext(MyContext.Provider)`
- 
调用了 `useContext` 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以 [通过使用 memoization 来优化](https://github.com/facebook/react/issues/15156#issuecomment-474590693)。