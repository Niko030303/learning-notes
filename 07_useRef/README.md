## useRef

### 定义

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 ref 对象在组件的整个生命周期内持续存在。

### 场景

一个常见的用例便是命令式地访问子组件

### 示例

```typescript
const refContainer = useRef(initialValue);
```

### 注意点

`useRef` 会在每次渲染时返回同一个 ref 对象

当 ref 对象内容发生变化时，`useRef` 并_不会_通知你。变更 `.current` 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用[回调 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 来实现。