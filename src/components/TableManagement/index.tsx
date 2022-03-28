import React from 'react'
import { Table } from 'antd'
import { useAntdTable } from 'ahooks'

interface Item {
  name: {
    last: string
  },
  email: string,
  phone: string,
  gender: 'male' | 'female'
}

interface Result {
  total: number,
  list: Item[]
}

const getTableData = ({current, pageSize}): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`;

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then(res=>res.json())
    .then(res=>({
      total: res.info.results,
      list: res.results
    }))
}

export default function TableManagement() {
  const {tableProps} = useAntdTable(getTableData)
  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ]
  return (
    <Table columns={columns} {...tableProps}/>
  )
}
