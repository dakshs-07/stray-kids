import Image from 'next/image'
import React from 'react'

function LatestAlbum() {
  return (
    <div>
        <h1 className='text-4xl tracking-wide text-center'>Latest Comeback</h1>
    <Image src="/main/doitalbum.jpg" alt='do it logo' height={200} width={200} />
    </div>
  )
}

export default LatestAlbum