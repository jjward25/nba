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
    <main className="font-inter flex min-h-screen flex-col mx-auto items-center justify-start py-12 px-6 md:p-10  w-auto max-w-[900px] bg-neutral-100">
      <h1 className="text-2xl text-center mb-4 tracking-tighter font-semibold text-black">
        The Annual NBA <strong className={`bg-clip-text text-transparent w-screen animated-background h-screen animate-pulse bg-gradient-to-r from-amber-500 via-red-500 to-indigo-500`}>Blow-it-Up </strong> Post
      </h1>
      <div className='mt-3 mb-6 border-double h-auto w-full border-2 border-neutral-600'/>

      <div className="hover:scale-105 focus:scale-95 cursor-pointer relative rounded-xl w-auto my-1 h-full">  
        <div className="absolute -inset-1  bg-gradient-to-r from-white via-blue-950 to-white blur opacity-95"></div>
        <img src='/trades/kat.png' alt='HawksTrade' className="opacity-70 w-4/5 p-4 mx-auto h-full object-cover border-1 border-white md:my-0"/>
      </div>

      <div className="px-2 pt-4 pb-4 md:pb-0 text-black">
        <p className='mb-2 mx-4'>{`It's the end of the year and 29 teams have work to do. GMs might hang up as soon as these players are mentioned but we're imagining each team is going all-in for next year and putting their biggest names on the block.`}</p>
        <p className='mb-2 mx-4'>{`The individual player cards in the trades show player percentile ranks for this past season. So "0.99" for Trae Young AST means he was in the 99th percentile for Total Assists this year (very good).`}</p>
      </div>

      <div className='px-2'>
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
      </div>
    </main> 

  ); 
}
