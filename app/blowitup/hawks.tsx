"use client"
import * as NBAIcons from 'react-nba-logos'; <NBAIcons.TOR/>
import { useState } from 'react';
import TraeYoung from './trae_young';
import ZionWilliamson from './zion_williamson';

function Accordion({title,children}: {title: string, children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white hover:border-neutral-400 rounded-lg mb-4 mx-4 bg-grad md:min-w-[550px]">
      <div className={`bg-neutral-800 hover:bg-black hover:border-neutral-400 cursor-pointer flex items-center justify-between round p-4 leading-4 h-9 ${isOpen ? 'border-b-1 border-white bg-gradient-to-r from-black to-neutral-600 rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`} onClick={toggleAccordion}>
        <h3 className={`h-auto text-md no-underline font-light text-neutral-100 `}>{title}</h3>
        <svg className={`ml-2 w-5 h-5 text-white transition-transform duration-6000 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-height duration-6000 rounded-bl-lg rounded-br-lg ${isOpen ? 'h-auto border-t-2 border-t-white' : 'h-0'}`}>
        <div className="p-4 bg-black text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Atl() {

  return (
    <section className='w-full'>
      <div className='flex flex-col'>
        <div className="mt-4 mb-4 flex flex-row">
          <p className="mr-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            <NBAIcons.ATL/>
          </p>
          <div className="w-full mr-3 items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            <h3 className='text-lg font-semibold p-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-neutral-100 to-red-700'>Atlanta Hawks</h3>
            <p className='px-2 pb-4'><em>The Hawks season....</em></p>
            <Accordion title="Revenue Growth & Business Intelligence">
              <p className='mb-3 mt-1'>Content for Section 2</p>
              <div className='mt-0 mb-4 h-auto w-full border-2 border-neutral-100'></div>
              <em>Atlanta giving up:</em>
              <div className='flex flex-wrap space-x-3 mb-3'>
                <TraeYoung/>
                <ZionWilliamson/>
              </div>
              <em>New Orleans giving up:</em>
              <div className='flex flex-wrap space-x-3 mb-3'>
                <TraeYoung/>
                <ZionWilliamson/>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
