import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux';

const ExpenseModal=lazy(()=>import("../components/ExpenseModal"))

export default function Addexpense() {
  const {isOpen}=useSelector((store)=>store.split);
  return (
   <>
     <Suspense fallback={<div>Loading ...</div>}>
   {isOpen&&<ExpenseModal />}
     </Suspense>
   </>
  )
}
