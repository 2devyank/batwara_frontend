import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from 'react-bootstrap'
import { getallexpensesbyid } from '../api'

export default function GroupExpenses({id}) {
  const expenseQuery=useQuery({
    queryKey:["expenses",id],
    queryFn:()=>getallexpensesbyid(id)
  })
  
  
  if(expenseQuery.status==="loading") return <h1>Loading ...</h1>
  if(expenseQuery.status==="error") {
    return <h1>{JSON.stringify(expenseQuery.error)}</h1>
  }
  // console.log(expenseQuery.data)
  return (
    <div>
       <h3>Expenses</h3>

        <Table >
        <thead>
          <tr>
            <th>#</th>
            <th>topic</th>
            <th>payer</th>
            <th>totalprice</th>
          
          </tr>
        </thead>
        {
          expenseQuery.data.map((mem)=>(
            <tbody>
            <tr key={mem.expense_id}>
              <td>#</td>
              <td >{mem.topic}</td>
              <td >{mem.payer}</td>
              <td >₹ {mem.totalprice}</td>
          
            </tr>
           
          </tbody>
          ))
        }
        </Table>

    </div>
  )
}
