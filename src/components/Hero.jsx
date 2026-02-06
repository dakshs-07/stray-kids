import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div>
        <Image src="/main/banner.webp" alt='stray kids banner' height={2000} width={2000} />
        <h1 className='text-center tracking-widest text-2xl font-light py-5'>STRAY KIDS FANDOM</h1>
    </div>
  )
}

export default Hero