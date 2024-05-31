"use client"
import * as NBAIcons from 'react-nba-logos'; <NBAIcons.TOR/>
import { useState } from 'react';
import JaylenBrown from '../players/jaylen_brown';
import Kristaps from '../players/kristaps';
import JalenWilliams from '../players/jalen_williams';
import Chet from '../players/chet';
import JoshGiddey from '../players/josh_giddey';

function Accordion({title,children}: {title: string, children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white  rounded-lg mb-4 md:mx-4 md:min-w-[550px]">
      <div className={`bg-neutral-800 hover:bg-black  cursor-pointer flex items-center justify-between round p-4 leading-4 h-9 ${isOpen ? 'border-b-1 border-white bg-gradient-to-r from-black to-neutral-600 rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`} onClick={toggleAccordion}>
        <h3 className={`h-auto text-md no-underline font-semibold text-neutral-100 ${isOpen? 'bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-neutral-100 to-green-700' : '' }`}>{title}</h3>
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

export default function Bos() {

  return (
    <section className='w-full'>
      <div className='flex flex-col'>
        <div className="mb-4 flex flex-col md:flex-row">
          <p className="mr-3 mb-3 md:mb-0 w-full md:w-auto flex justify-center items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            <NBAIcons.BOS/>
          </p>
          <div className="w-full mr-3 items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
            <h3 className='text-lg font-semibold p-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-neutral-100 to-green-700'>Boston Celtics</h3>
            <p className='px-2 pb-4 leading-5'><em>{`The Celtics might win the finals, but it's time to Blow it Up. Jaylen Brown's trade value may be at an all-time high and we're shipping him out.`}</em></p>
            <Accordion title="Jaylen Brown for... ">
              <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col'>
                  <p className='mb-3 mt-3 md:pr-2 md:pb-2'><strong>{`OKC's Big Men. `}</strong>  {`For Boston, Chet and J.Williams provide stability at center (knock on wood) and kickstart the obvious post-title two-timelines approach. `}<em>{`Al Horford won't last forever.`}</em></p>
                  <p className='mb-3 md:pr-2 md:pb-2'>{`Boston also gets notable white person Josh Giddey to run the bench unit with J.Williams as Derek White supports Tatum in the starting lineup. Stingy Boston might try and get something for the draft too.`}</p>
                  <p className='mb-3 md:pr-2 md:pb-2'>{`That's because OKC gets another top-tier closer to pair with Shai, and another Finals vet in Kristaps. Free agent bigs include RFA Obi Toppin, UFA Kyle Anderson, UFA Bol Bol, UFA Nic Claxton, or finding another big by trading more assets for someone like Wendell Carter or Vucevic.`}</p>
                </div>
                <div className='mt-0 mb-0 h-auto w-auto border-2 border-neutral-100'/>
                <img src='/trades/celtics.png' alt='NoTrade' className="w-2/3 md:w-1/2 mx-auto h-full object-cover border-1 border-white my-3 md:my-0"/>
              </div>
              <div className='m-0 h-auto w-full border-2 border-neutral-100'/>
              <div className='flex flex-wrap mt-4'>
                <div className='flex flex-col mb-3 mx-auto md:ml-0 md:mr-3'>
                  <em className='md:max-w-[300px]'>Boston receives:</em> 
                  <div className='flex flex-wrap justify-center md:space-x-3'>
                    <Chet/>
                    <JalenWilliams/>
                    <JoshGiddey/>
                  </div>
                </div>
                <div className='flex flex-col mb-3 mx-auto md:ml-0 md:mr-3'>
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
