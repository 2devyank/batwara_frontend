import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from 'react-bootstrap'
import { getallgroups, getallgroupsmember } from '../api'

export default function Rightgroup({id}) {

    const groupmemQuery=useQuery({
        queryKey:["groupsmem",id],
        queryFn:()=>getallgroupsmember(id)
    })

    if(groupmemQuery.status==="loading") return <h1>Loading...</h1>
    if(groupmemQuery.status==="error") {
      return <h1>{JSON.stringify(groupmemQuery.error)}</h1>
    }
    // console.log(groupmemQuery.data);
  return (
    <div>
        <h3>
        Group Members
        </h3>
            <Table >
            <thead>
              <tr>
                <th>#</th>
                <th >{groupmemQuery.data[0].grpname}</th>
               
              </tr>
            </thead>
            
              {groupmemQuery.data[0].grpmember.map((mem,index)=>(
                <tbody>
                <tr>
                  <td>#</td>
                  <td key={index}>{mem}</td>
              
                </tr>
               
              </tbody>
              ))}
          </Table>
    </div>
  )
}
