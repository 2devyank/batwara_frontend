import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from 'react-bootstrap'
import { settle } from '../api'
import "../styles/Settle.css"

export default function Settle({member}) {
    const settleQuery=useQuery({
            queryKey:["expensive",member],
            queryFn:()=>settle(member)
        })
        if(settleQuery.status==="loading")return <h1>Loading ...</h1>
        if(settleQuery.status==="error"){
        return <h1>{JSON.stringify(settleQuery.error)}</h1>
    }
    console.log(settleQuery.data)
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
                                <td className="retrn">- ₹ {cost / num}</td>
                              </tr>
                            </tbody>
                          ) : (<div></div>)

                        ))


                      })}
                    </Table>
    </div>
  )
}
