"use client"
import * as NBAIcons from 'react-nba-logos'; <NBAIcons.TOR/>
import { useState } from 'react';
import JalenWilliams from '../players/jalen_williams';
import Chet from '../players/chet';
import JoshGiddey from '../players/josh_giddey';import JaylenBrown from '../players/jaylen_brown';
import Kristaps from '../players/kristaps';

function Accordion({title,children}: {title: string, children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white  rounded-lg mb-4 md:mx-4 md:min-w-[550px]">
      <div className={`bg-neutral-800 hover:bg-black  cursor-pointer flex items-center justify-between round p-4 leading-4 h-9 ${isOpen ? 'border-b-1 border-white bg-gradient-to-r from-black to-neutral-600 rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`} onClick={toggleAccordion}>
        <h3 className={`h-auto text-md no-underline font-semibold text-neutral-100 ${isOpen? 'bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-neutral-100 to-neutral-700' : '' }`}>{title}</h3>
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

export default function Bkn() {

  return (
    <section className='w-full'>
      <div className='flex flex-col'>
        <div className="mt-4 mb-4 flex flex-col md:flex-row">
          <p className="mr-3 mb-3 md:mb-0 w-full md:w-auto flex justify-center items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            <NBAIcons.BKN/>
          </p>
          <div className="w-full mr-3 items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
            <h3 className='text-lg font-semibold p-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-neutral-100 to-neutral-700'>Brooklynettes</h3>
            <p className='px-2 pb-4 leading-5'><em>{`Brooklyn has very few options, so we're going to try and maximize draft returns. We auction Mikal & Co. between OKC, San Antonio, Utah and New Orleans.`}</em></p>
            <p className='px-2 pb-4 leading-5'><em>{`Utah bows out quick, seeing no benefit in going from 12th to 12th. San Antonio hangs up when we jokingly ask for Wemby then calls back about Ben Simmons.  Finally we land on:`}</em></p>
            <Accordion title="Mikal & Co. for... ">
              <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col'>
                  <p className='mb-3 mt-3 md:pr-2 md:pb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-black'><strong>Who cares?</strong>  {`They can't get picks swapping Bridges (+ Claxton?) for Ingram with New Orleans... maybe Mikal for Harrison Barnes + a first round pick... how about a sign-and-trade for Chandler Parsons? I mean Gordan Hayward (and picks)?`}</p>
                  <p className='mb-3 md:pr-2 md:pb-2'>{``}</p>
                </div>
                <div className='mt-0 mb-0 h-auto w-auto border-2 border-neutral-100'/>
                <img src='/trades/nets.png' alt='NoTrade' className="w-2/3 md:w-1/2 mx-auto h-full object-cover border-1 border-white my-3 md:my-0"/>
              </div>
              <div className='m-0 h-auto w-full border-2 border-neutral-100'/>
              <div className='flex flex-wrap mt-4'>
                <div className='flex flex-col space-x-3 md:space-x-0 mb-3 mx-auto md:ml-0 md:mr-3'>
                  <em className='md:max-w-[300px]'>Boston receives:</em> 
                  <div className='flex flex-wrap justify-center md:space-x-3'>
                    <Chet/>
                    <JalenWilliams/>
                    <JoshGiddey/>
                  </div>
                </div>
                <div className='flex flex-col space-x-3 md:space-x-0 mb-3 mx-auto md:ml-0 md:mr-3'>
                  <em className='md:max-w-[300px]'>OKC receives:</em>
                  <div className='flex flex-wrap justify-center md:space-x-3'>
                    <JaylenBrown/>
                    <Kristaps/>
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
