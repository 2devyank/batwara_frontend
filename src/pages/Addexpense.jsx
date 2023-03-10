import React from 'react'
import { useSelector } from 'react-redux';
import ExpenseModal from '../components/ExpenseModal'

export default function Addexpense() {
  const {isOpen}=useSelector((store)=>store.split);
  return (
   <>
   {isOpen&&<ExpenseModal />}
   </>
  )
}
