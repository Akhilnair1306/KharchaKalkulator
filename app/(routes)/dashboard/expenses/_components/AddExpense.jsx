'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import React, { useState } from 'react'
import { toast } from 'sonner';

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addNewExpense = async (event) => {
    event.preventDefault(); // Move preventDefault to the beginning

    const result = await db.insert(Expenses).values({
      name: name,
      amount: amount,
      budgetId: budgetId,
      createdAt: new Date().toISOString() // Ensure createdAt is a valid date string
    }).returning({ insertedId: Expenses.id }); // Correct the returning clause

    console.log(result);
    if (result) {
      refreshData();
      toast('New Expense Added');
      setName('')
      setAmount('')
    }
  }

  return (
    <div className='border p-5 rounded-lg'>
      <h2 className='font-bold text-lg'>
        Add Expense
      </h2>
      <form onSubmit={addNewExpense}> {/* Wrap inputs in a form and use onSubmit */}
        <div>
          <h2 className='text-black font-medium my-1'>Expense Name</h2>
          <Input placeholder="e.g Home Decor"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <h2 className='text-black font-medium my-1'>Expense Amount</h2>
          <Input placeholder="e.g $100"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>
        <Button disabled={!(name && amount)} className='mt-3 w-full' type="submit">
          Add New Expense
        </Button>
      </form>
    </div>
  )
}

export default AddExpense;
