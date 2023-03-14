import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

const Member =lazy(()=>import("../components/Member"))

export default function Addmember() {
    const {ismemOpen}=useSelector((store)=>store.member)
  return (
    <>
     <Suspense fallback={<div>Loading ...</div>}>
{ismemOpen && <Member/>}
     </Suspense>
    </>
  )
}
