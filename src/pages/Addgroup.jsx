import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

const GroupModal=lazy(()=>import("../components/GroupModal"))

export default function Addgroup() {
    const {isgrpOpen}=useSelector((store)=>store.group)
  return (
   
   <>
     <Suspense fallback={<div>Loading ...</div>}>

   {isgrpOpen && <GroupModal/>}
     </Suspense>
   </>
  )
}
