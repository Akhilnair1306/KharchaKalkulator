
import Link from 'next/link'
import React from 'react'

function BudgetItem({budget}) {

  const calcProgPerc = () => {
    const perc = (budget.totalSpend/budget.amount) * 100;
    return perc.toFixed(2);
  }
  return (
    <Link href={'/dashboard/expenses/'+budget?.id} >
      <div className='p-5 border rounded-lg cursor-pointer h-[170px]'>
      <div className='flex gap-2 items-center justify-between '>
        <div className='gap-2 items-center'>
            <h2 className='font-bold'>
              {budget?.name}
            </h2>
            <h2 className='text-sm text-gray-700'>{budget?.totalItem} Item</h2>
        </div>
        
        <h2 className='font-bold text-primary'>${budget?.amount}</h2>
        </div>
        <div className='mt-5'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xs text-slate-400'> ${budget?.totalSpend?budget.totalSpend:0}</h2>
            <h2 className='text-xs text-slate-400'> ${budget?.amount-budget?.totalSpend} Remaining</h2>
          </div>
        <div className='w-full bg-slate-300 h-2 rounded-full'>
          <div className= ' bg-primary h-2 rounded-full'
          style={{
            width: `${calcProgPerc()}%`
          }}>


          </div>

        </div>
        </div>
        </div>
    </Link>
  )
}

export default BudgetItem