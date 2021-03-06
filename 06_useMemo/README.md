## useMemo()

### 定义

useMemo ，“创建”一个依赖函数。当其中一个依赖项更改时， useMemo重新计算记忆的值。而不需要在每个渲染进行昂贵的计算。

useMemo 其实创建了一种数据缓存机制。比如登录页面需要向后台发送含用户名&密码的ajax请求，获取用户登录信息。useMemo 可以设置成只有当用户名密码改变后才向后台重新发送ajax，而在组件重新渲染时使用缓存的用户信息。

### 场景

#### useMemo 与 useEffect 生命周期

useMemo 与 useEffect 作用类似，都会在依赖值改变时重新执行，但 useMemo 有一个缓存的返回值。

因此在组织渲染生命周期中，很自然地会把useMemo放到渲染DOM之前执行，如下：

```typescript
useMemo => 渲染DOM => useEffect
```

### 注意点

记住，传入 `useMemo` 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 `useEffect` 的适用范畴，而不是 `useMemo`。

**你可以把 `useMemo` 作为性能优化的手段，但不要把它当成语义上的保证。**将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们，比如为离屏组件释放内存。先编写在没有 `useMemo` 的情况下也可以执行的代码 —— 之后再在你的代码中添加 `useMemo`，以达到优化性能的目的。
