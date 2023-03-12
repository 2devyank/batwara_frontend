import React from 'react'
import { useSelector } from 'react-redux'
import Member from '../components/Member'

export default function Addmember() {
    const {ismemOpen}=useSelector((store)=>store.member)
  return (
    <>
{ismemOpen && <Member/>}
    </>
  )
}
