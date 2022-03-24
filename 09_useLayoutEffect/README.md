## useLayoutEffect

### 定义

useLayoutEffect 的作用和 useEffect 几乎差不多，把现有代码的 useEffect 全部替换成 useLayoutEffect，几乎看不到任何差别。

其函数签名与 `useEffect` 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。

尽可能使用标准的 `useEffect` 以避免阻塞视觉更新。

### 场景

#### 99%的场景，适用于useEffect

大部分的场景都是通过effect同步一些状态或者props，这些是不需要立即执行的，或者做一些不影响页面显示的事情。

例如请求远程数据，是不需要立即应用结果修改的。 或者设置某个事件监听 或者在弹窗显示/消失的时候，重置某些状态

大部分的场景，useEffect足够了。

#### 什么时候使用useLayoutEffect?

什么样的场景需要使用useLayoutEffect？当你看见的时候，你就知道了。（字面意思）

如果状态更新，导致组件渲染闪烁，这个时候，就应该用_useLayoutEffect_，例如初次渲染只有部分状态正确，然后立刻使用最终状态重新渲染时，可能会发生上述情况。

### 注意点

1.  useLayoutEffect 相比 useEffect，通过同步执行状态更新可解决一些特性场景下的页面闪烁问题。
2.  useEffect 可以满足百分之99的场景，而且 useLayoutEffect 会阻塞渲染，请谨慎使用。
