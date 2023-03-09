import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from 'react-bootstrap'
import { expenseformember, settle } from '../api'
import "../styles/Trans.css"

export default function Transaction({member}) {
  console.log(member)
    // const settleQuery=useQuery({
    //     queryKey:["expenses",member],
    //     queryFn:()=>settle(member)
    // })

    const transQuery=useQuery({
      queryKey:["expens",member],
      queryFn:()=>expenseformember(member)
  })
    // if(settleQuery.status==="loading")return <h1>Loading ...</h1>
    // if(settleQuery.status==="error"){
    //     return <h1>{JSON.stringify(settleQuery.error)}</h1>
    // }
    
    if(transQuery.status==="loading")return <h1>Loading ...</h1>
    if(transQuery.status==="error"){
        return <h1>{JSON.stringify(transQuery.error)}</h1>
    }
    console.log(transQuery.data);
    // console.log(settleQuery.data);
  return (
    <div>
        
                  <Table >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Person</th>
                        <th>Amount</th>

                      </tr>
                    </thead>
                    {
                     transQuery.data.map((data) => {
                        let cost = data.totalprice
                        let num = data.member.length
                        if(data.member!==null){

                          return data.member.map((d) => (
                            d != member ? (
                            <tbody>
                              <tr >
                                <td>#</td>

                                <td>{d}</td>
                                <td className='get'>+ ₹ {cost / num}</td>
                              </tr>
                            </tbody>
                          ) : (<div></div>)
                          
                          ))
                        }


                       })} 
                    {/* {
                      settleQuery.data.map((data) => {
                        let nam = data.payer
                        let cost = data.totalprice
                        let num = data.member.length
                        return data.member.map((d) => (
                          d == nam ? (
                            <tbody>
                              <tr >
                                <td>#</td>

                                <td>{d}</td>
                                <td>-{cost / num}</td>
                              </tr>
                            </tbody>
                          ) : (<div></div>)

                        ))


                      })} */}
                  </Table>
    </div>
  )
}
