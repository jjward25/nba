"use client"
import Atl from './blowitup/teams/atlanta';
import Bos from './blowitup/teams/boston';
import Orl from './blowitup/teams/orlando';
import Bkn from './blowitup/teams/brooklyn';
import Chl from './blowitup/teams/charlotte';
import Chi from './blowitup/teams/chicago';
import Cle from './blowitup/teams/cleveland'; 
//import { Danfo } from "next/font/google";



export default function Home() {
  return ( 
    <main className="font-inter flex min-h-screen flex-col mx-auto items-center justify-start p-10 w-auto max-w-[1000px] bg-neutral-100">
      <h1 className="text-2xl mb-4 tracking-tighter font-semibold">
        The Annual NBA <strong className={`bg-clip-text text-transparent w-screen animated-background h-screen animate-pulse bg-gradient-to-r from-amber-500 via-red-500 to-indigo-500`}>Blow-it-Up </strong> Post
      </h1>
      <div className='mt-3 mb-6 border-double h-auto w-full border-2 border-neutral-600'/>
      <p className='mb-4 mx-4 max-w-[700px] text-[.9rem]'>{`It's the end of the year and 29 teams have work to do. GMs might hang up as soon as these players are mentioned but we're imagining each team is going all-in for next year and putting their biggest names on the block.`}</p>
      <p className='mb-4 mx-4 max-w-[700px] text-[.9rem]'>{`The individual player cards in the trades show player percentile ranks for this past season. So "0.99" for Trae Young AST means he was in the 99th percentile for Total Assists this year (very good).`}</p>
      <div className='mt-3 mb-6 border-double h-auto w-full border-2 border-neutral-600'/>
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
