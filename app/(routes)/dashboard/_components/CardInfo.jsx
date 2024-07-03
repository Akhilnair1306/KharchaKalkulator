import { IndianRupee, PiggyBank, PiggyBankIcon, ReceiptTextIcon, Wallet2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CardInfo({budgetList}) {

    const[totalBudget,setTotalBudget] = useState(0);
    const[totalSpend,setTotalSpend] = useState(0);
    useEffect(() => {
       budgetList&& calcInfo();
    },[budgetList])

    const calcInfo =() => {
        console.log(budgetList);
        let totalBudget_ = 0;
        let totalSpend_ = 0;
        budgetList.forEach(element => {
            totalBudget_ = totalBudget_+Number(element.amount)
            totalSpend_ = totalSpend_+ element.totalSpend
        });
        setTotalBudget(totalBudget_)
        setTotalSpend(totalSpend_)
        console.log(totalBudget_,totalSpend_)
    }
  return (
    <div>
        {budgetList?.length>0?
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
            <h2 className='text-sm'>Total Budget</h2>
            <h2 className='font-bold text-2xl'>${totalBudget}</h2>
            </div>
            <PiggyBankIcon className='text-white rounded-full bg-primary h-12 w-12 p-3'/>
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
            <h2 className='text-sm'>Total Spend</h2>
            <h2 className='font-bold text-2xl'>${totalSpend}</h2>
            </div>
            <ReceiptTextIcon className='text-white rounded-full bg-primary h-12 w-12 p-3'/>
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
            <h2 className='text-sm'>No of Budget</h2>
            <h2 className='font-bold text-2xl'>{budgetList.length}</h2>
            </div>
            <Wallet2 className='text-white rounded-full bg-primary h-12 w-12 p-3'/>
        </div>
       
    </div>:
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       { [1,2,3].map((item,index)=>{
            <div className='h-[110px] w-full bg-slate-200 animate-pulse rounded-lg'>

            </div>
        })}
    </div>
    }
    </div>
  )
}

export default CardInfo