import Image from 'next/image'
import React from 'react'
import { ImageCarousel } from './Main/ImageCarousel'

function Hero() {
  return (
    <div>
        <ImageCarousel />
        <h1 className='text-center tracking-widest text-6xl font-light py-10'>STRAY KIDS FANDOM</h1>
    </div>
  )
}

export default Hero