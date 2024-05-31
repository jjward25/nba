"use client"
import Atl from './blowitup/teams/atlanta';
import Bos from './blowitup/teams/boston';
import Orl from './blowitup/teams/orlando';
import Bkn from './blowitup/teams/brooklyn';
import Chl from './blowitup/teams/charlotte';
import Chi from './blowitup/teams/chicago';
import Cle from './blowitup/teams/cleveland';

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col mx-auto items-center justify-start p-10 w-auto max-w-[1250px]">
      <h1 className="text-2xl mb-4 tracking-tighter font-semibold">
        The Annual NBA <em className='bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-neutral-400 to-red-800'>Blow-it-Up </em> Article
      </h1>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      <em className='mb-4 mx-4 max-w-[750px]'>{`It's the end of the year so we're looking at the biggest trades we think each team could make this offseason to compete for a title next year.`}</em>
      <em className='mb-4 mx-4 text-neutral-600 max-w-[750px]'>{`Individual player cards show player percentile ranks for this past season. So "0.99" for Trae Young AST means he was in the 99th percentile for Total Assists this year (very good).`}</em>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      <Atl/> 
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      <Bos/>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      <Bkn/>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      <Chl/>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      <Chi/>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      <Cle/>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
    </main> 

  ); 
}
