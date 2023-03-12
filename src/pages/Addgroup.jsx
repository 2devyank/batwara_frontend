import React from 'react'
import { useSelector } from 'react-redux'
import GroupModal from '../components/GroupModal'

export default function Addgroup() {
    const {isgrpOpen}=useSelector((store)=>store.group)
  return (
   
   <>
   {isgrpOpen && <GroupModal/>}
   </>
  )
}
