## useRequest

useRequest 是一个强大的异步数据管理的 Hooks，React 项目中的网络请求场景使用 useRequest 就够了。

### 默认请求

默认情况下，useRequest 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的 loading , data , error 等状态。

```typescript
const { data, error, loading } = useRequest(service);
```