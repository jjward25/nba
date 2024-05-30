"use client"
import Atl from './blowitup/hawks'

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col mx-auto items-center justify-start p-10 w-auto max-w-[1250px]">
      <h1 className="text-2xl mb-4 tracking-tighter font-semibold">
        The Annual NBA <em className='bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-neutral-400 to-red-800'>Blow-it-Up </em> Article
      </h1>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'></div>
      <em className='mb-4 mx-4'>It's the end of the year so we're looking at 3 of the biggest trades we think each team could make to improve.</em>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'></div>
      <Atl/> 
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'></div>
    </main> 

  ); 
}
