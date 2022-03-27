## useRequest

### 手动请求

如果设置了 options.manual = true，则 useRequest 不会默认执行，需要通过 run 或者 runAsync 来触发执行。

run 与 runAsync 的区别在于：

run 是一个普通的同步函数，我们会自动捕获异常，你可以通过 options.onError 来处理异常时的行为。(通过 onSuccess 和 onError 来处理成功和失败。)

runAsync 是一个返回 Promise 的异步函数，如果使用 runAsync 来调用，则意味着你需要自己捕获异常。(通过 try/catch 来自行处理异常。)

```typescript
runAsync().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})
```

