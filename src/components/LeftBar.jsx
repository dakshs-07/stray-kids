import Link from 'next/link'
import React from 'react'

function LeftBar() {
  return (
    <div className='flex flex-col justify-center max-w-70 p-1 ml-10'>
      <div className='bg-black h-6 w-full text-white tracking-wide'>Specials</div>
      <Link href="/">Lee Know</Link>
    </div> 
  )
}

export default LeftBar