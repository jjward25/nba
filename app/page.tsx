"use client"
import Atl from './blowitup/teams/atlanta';
import Bos from './blowitup/teams/boston';
import Bkn from './blowitup/teams/brooklyn';
import Chl from './blowitup/teams/charlotte';
import Chi from './blowitup/teams/chicago';
import Cle from './blowitup/teams/cleveland'; 
import Dal from './blowitup/teams/dallas';
import Den from './blowitup/teams/denver';
import Det from './blowitup/teams/detroit';
import Gsw from './blowitup/teams/goldenstate';
import Hou from './blowitup/teams/houston';
import Ind from './blowitup/teams/indiana';
//import { Danfo } from "next/font/google";



export default function Home() {
  return ( 
    <main className="font-inter flex min-h-screen flex-col mx-auto items-center justify-start pt-8 pb-12 px-6 md:p-10  w-auto max-w-[900px] bg-neutral-100">
      
      <div className="block rounded-lg bg-gray-300 shadow-secondary-1 dark:bg-surface-dark mb-4 bg-gradient-to-br from-neutral-600 via-black to-neutral-600 opacity-85">
        <img src='/trades/kat.png' alt='TitleImg' className="rounded-t-lg opacity-80 mx-auto w-full object-cover border-1 border-white md:my-0"/>
        <div className="p-6 text-surface dark:text-white">
          <h1 className="text-4xl text-center mb-4 tracking-tighter font-semibold text-white">
            The Annual NBA <strong className={`bg-clip-text text-transparent w-screen animated-background h-screen animate-pulse bg-gradient-to-r from-amber-500 via-red-500 to-indigo-500`}>Blow-it-Up </strong> Post
          </h1>
          <p className="mb-4 text-base text-white">
            {`It's the end of the year and 29 teams have work to do. GMs might hang up as soon as these players are mentioned but we're imagining each team is going all-in for next year and putting their biggest names on the block with maximal schmoozing.`}
          </p>
        </div>
      </div>

      <div className='px-2'>

        <div className='mt-3 mb-6 border-double h-auto w-full border-2 border-neutral-600'/>
        <div className='bg-gradient-to-br from-neutral-600 via-black to-neutral-600 opacity-85 transition-opacity duration-300 ease-in-out rounded-xl'>
          <p className='mb-6 mx-0 bg-gradient-to-tr from-neutral-600 via-black to-neutral-600 p-3 text-white rounded-xl'>{`The player cards in the trades below show player percentile ranks for this past season. So "0.99" for Trae Young AST means he was in the 99th percentile for Total Assists this year (very good).`}</p>
        </div>
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
        <Dal/>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
        <Den/>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
        <Det/>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
        <Gsw/>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
        <Hou/>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
        <Ind/>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'/>
      </div>

    </main> 

  ); 
}
