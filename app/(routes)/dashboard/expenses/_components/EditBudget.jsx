"use client"
import { Button } from '@/components/ui/button'
import { PenBox } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'
import { Budgets } from '@/utils/schema'
import { toast } from 'sonner'
import { db } from '@/utils/dbConfig'
import { eq } from 'drizzle-orm'

function EditBudget({budgetInfo,refreshData}) {
    const { user } = useUser();

    const [name, setName] = useState(budgetInfo?.name);
    const [amount, setAmount] = useState(budgetInfo?.amount);

    const onUpdateBudget =async() =>{
            const result = await db.update(Budgets).set({
                name: name,
                amount: amount
            }).where(eq(Budgets.id,budgetInfo.id))
            .returning();

            if(result)
                {
                    refreshData()
                    toast('Budget Updated')
                }
    }
    return (
        <div>
            
            <Dialog>
                <DialogTrigger asChild>
                <Button className='flex gap-2'><PenBox />Edit</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Budget Info</DialogTitle>
                        <DialogDescription>
                            <div>
                                <h2 className='text-black font-medium my-1'>Budget Name</h2>
                                <Input placeholer="e.g Home Decor"
                                defaultValue ={budgetInfo?.name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                                <Input placeholer="e.g $100"
                                    type="number"
                                    defaultValue ={budgetInfo?.amount}
                                    onChange={(e) => setAmount(e.target.value)} />
                            </div>

                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button
                                disabled={!(name && amount)}
                                onClick={() => onUpdateBudget()}
                                className='mt-5 w-full'>Update Budget</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EditBudget