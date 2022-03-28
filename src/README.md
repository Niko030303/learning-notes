```typescript
// index.js
import 'antd/dist/antd.css';
```

## useAntdTable

useAntdTable 基于 useRequest 实现，封装了常用的 Ant Design Form 与 Ant Design Table 联动逻辑，并且同时支持 antd v3 和 v4。

在使用之前，你需要了解它与 useRequest 不同的几个点：

- service 接收两个参数，第一个参数为分页数据 { current, pageSize, sorter, filters }，第二个参数为表单数据。
- service 返回的数据结构为 { total: number, list: Item[] }。
- 会额外返回 tableProps 和 search 字段，管理表格和表单。
- refreshDeps 变化，会重置 current 到第一页，并重新发起请求。