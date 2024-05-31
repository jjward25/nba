"use client"
import * as NBAIcons from 'react-nba-logos'; <NBAIcons.TOR/>
import { useState } from 'react';
import ZachLavine from '../players/zach_lavine';
import BenSimmons from '../players/ben_simmons';

function Accordion({title,children}: {title: string, children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white  rounded-lg mb-4 mx-4  md:min-w-[550px]">
      <div className={`bg-neutral-800 hover:bg-black  cursor-pointer flex items-center justify-between round p-4 leading-4 h-9 ${isOpen ? 'border-b-1 border-white bg-gradient-to-r from-black to-neutral-600 rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`} onClick={toggleAccordion}>
        <h3 className={`h-auto text-md no-underline font-semibold text-neutral-100 ${isOpen? 'bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-neutral-100 to-red-700' : '' }`}>{title}</h3>
        <svg className={`ml-2 w-5 h-5 text-white transition-transform duration-6000 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-height duration-6000 rounded-bl-lg rounded-br-lg ${isOpen ? 'h-auto border-t-2 border-t-white' : 'h-0'}`}>
        <div className="p-4 pt-0 bg-black text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Chi() {

  return (
    <section className='w-full'>
      <div className='flex flex-col'>
        <div className="mt-4 mb-4 flex flex-col md:flex-row">
          <p className="mr-3 mb-3 md:mb-0 w-full md:w-auto flex justify-center items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            <NBAIcons.CHI/>
          </p>
          <div className="w-full mr-3 items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
            <h3 className='text-lg font-semibold p-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-neutral-100 to-red-700'>Chicago Bulls</h3>
            <p className='px-2 pb-4 leading-5'><em>{`Chicago extends this run of bottom-dwellers but at least they have some assets. Of course even those are overpaid though.`}</em></p>
            <Accordion title="Zach Lavine for... ">
              <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col min-w-1/2'>
                  <p className='mb-3 mt-3 md:pr-2 md:pb-2'><strong>Lebron James. </strong>{`Just kidding.  Lavine's salary is too high to find many matches, but maybe Klay Thompson and a First, or Ben Simmons and two firsts? Reinsdorf doesn't care.`}</p>
                </div>
                <div className='mt-0 mb-0 h-auto w-auto border-2 border-neutral-100'/>
                <img src='/trades/bulls.png' alt='NoTrade' className="w-2/3 md:w-1/2 mx-auto h-full object-cover border-1 border-white my-3 md:my-0"/>
              </div>
              <div className='m-0 h-auto w-full border-2 border-neutral-100'/>
              <div className='flex flex-wrap mt-4'>
                <div className='flex flex-col space-x-3 md:space-x-0 mb-3 mx-auto md:ml-0 md:mr-3'>
                  <em className='md:max-w-[300px]'>Chicago receives:</em> 
                  <div className='flex flex-wrap justify-center md:space-x-3'>
                    <BenSimmons/>
                  </div>
                </div>
                <div className='flex flex-col space-x-3 md:space-x-0 mb-3 mx-auto md:ml-0 md:mr-3'>
                  <em className='md:max-w-[300px]'>Brooklyn receives:</em>
                  <div className='flex flex-wrap justify-center md:space-x-3'>
                    <ZachLavine/>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
