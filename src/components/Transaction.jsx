import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { expenseformember, settle } from '../api'
import "../styles/Trans.css"

export default function Transaction({member}) {
  console.log(member)
    

    const transQuery=useQuery({
      queryKey:["expens",member],
      queryFn:()=>expenseformember(member)
  })
    
    
    if(transQuery.status==="loading")return <h1>Loading ...</h1>
    if(transQuery.status==="error"){
        return <h1>{JSON.stringify(transQuery.error)}</h1>
    }

    let tot=0;

localStorage.removeItem("get")
    
    transQuery.data.map((data) => {
      let cost = data.totalprice
      let num = data.member.length
      
      if(data.member!==null){
        
        return data.member.map((d) => (
          d != member ? (
            <div>
             
             {tot+=cost/num}

      {localStorage.setItem("get",tot.toFixed(1))}
              
                   </div>
            
        ) : (<div></div>)
        
        ))
      }


     })
    //  console.log(mon)
    
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
                                <td className='get'>+ ₹ {(cost / num).toFixed(1)}</td>
                              </tr>
                            </tbody>
                          ) : (<div></div>)
                          
                          ))
                        }


                       })} 
                    
                  </Table>
    </div>
  )
}
