import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getallgroups } from '../api'

export default function Rightdash({username}) {

  const navigate=useNavigate();
    const groupQuery=useQuery({
        queryKey:["groups",username],
        queryFn:()=>getallgroups(username)
    })

    if(groupQuery.status==="loading") return <h1>Loading...</h1>
    if(groupQuery.status==="error") {
      return <h1>{JSON.stringify(groupQuery.error)}</h1>
    }
      return (
    <div>
          <h2>
            My Groups
          </h2>
          <Table >
            <thead>
              <tr>
                <th>#</th>
                <th >Group Name</th>

              </tr>
            </thead>
            {groupQuery.data.map((data) => (
              <tbody>
                <tr className='tabrow' onClick={() => navigate(`/groups/${data.group_id}`)} >
                  <td>#</td>
                  <td key={data.group_id}>{data.grpname}</td>

                </tr>

              </tbody>
            ))}

          </Table>
    </div>
  )
}
