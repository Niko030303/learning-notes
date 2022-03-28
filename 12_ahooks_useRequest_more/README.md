## useRequest

### 基础用法

#### 生命周期（The life cycle）

useRequest 提供了以下几个生命周期配置项，供你在异步函数的不同阶段做一些处理。

- onBefore：请求之前触发
- onSuccess：请求成功触发
- onError：请求失败触发
- onFinally：请求完成触发

#### 刷新（Refresh） - 重复上一次请求

useRequest 提供了 refresh 和 refreshAsync 方法，使我们可以使用上一次的参数，重新发起请求。

假如在读取用户信息的场景中

1. 我们读取了 ID 为 1 的用户信息 run(1)
2. 我们通过某种手段更新了用户信息
3. 我们想重新发起上一次的请求，那我们就可以使用 refresh 来代替 run(1)，这在复杂参数的场景中是非常有用的

#### 立即变更数据（Change data immediately）

useRequest 提供了 mutate, 支持立即修改 useRequest 返回的 data 参数。

mutate 的用法与 React.setState 一致，支持 mutate(newData) 和 mutate((oldData) => newData) 两种写法。

下面的示例，我们演示了一种 mutate 的应用场景。

我们修改了用户名，但是我们不希望等编辑接口调用成功之后，才给用户反馈。而是直接修改页面数据，同时在背后去调用修改接口，等修改接口返回之后，另外提供反馈。

#### 取消请求（Cancel request）

useRequest 提供了 cancel 函数，可以取消当前正在进行的请求。同时 useRequest 会在以下时机自动取消当前请求：

- 组件卸载时，取消正在进行的请求
- 竞态取消，当上一次请求还没返回时，又发起了下一次请求，则会取消上一次请求

#### 参数管理（Parameter management）

useRequest 返回的 params 会记录当次调用 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3] 。

如果我们设置了 options.manual = false，则首次调用 service 的参数可以通过 options.defaultParams 来设置。
