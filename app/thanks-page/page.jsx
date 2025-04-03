import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <p className='text-base font-medium text-primary'>Thank you!</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
            Thanks For compeleting.
          </h1>
          <p className='mt-2 text-base text-zinc-500'>
           Hope you Liked the course and generate more courses with Coach<span className='text-blue-700'>Ai</span>
          </p>
                    </div>
                    <Link href={'/dashboard'} className='mt-4'>
                    <Button  className='mt-4'>Go Back to Dashboard</Button>
                    </Link>
                   
          </div>
         
</div>
  )
}

export default page
