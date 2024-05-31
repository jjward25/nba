"use client"
import * as NBAIcons from 'react-nba-logos'; 
import { useState } from 'react';
import ZachCollins from '../players/zach_collins';
import Lamelo from '../players/lamelo';

function Accordion({title,children}: {title: string, children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white rounded mb-4 mx-2 md:mx-4 md:min-w-[550px] mt-2">
      <div className={`bg-neutral-800 hover:bg-black cursor-pointer flex items-center justify-between round p-4 leading-4 h-9 ${isOpen ? 'border-b-1 border-white bg-gradient-to-r from-black to-neutral-600 rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`} onClick={toggleAccordion}>
        <h3 className={`h-auto text-md no-underline font-semibold text-neutral-100 ${isOpen? '' : '' }`}>{title}</h3>
        <svg className={`ml-2 w-5 h-5 text-white transition-transform duration-6000 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-height duration-6000 rounded-bl-lg rounded-br-lg ${isOpen ? 'h-auto border-t-2 border-t-white' : 'h-0'}`}>
      <div className="p-0 pt-0 bg-gray-300 text-sm">
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
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <p className="hover:scale-105 md:mr-3 mb-6 md:mb-0 mx-auto md:w-auto flex justify-center items-center rounded-full md:rounded-lg border p-1 text-sm leading-4 border-neutral-200  text-neutral-100 no-underline bg-gradient-to-r from-amber-700 via-white to-orange-950">
            <NBAIcons.CLE/>
          </p>
          <div className="w-full mr-3 items-center p-1 text-sm leading-4 bg-gray-300 text-black no-underline overflow-hidden border border-neutral-200 rounded-lg opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
            <h3 className='text-lg font-semibold p-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-800 via-neutral-600 to-orange-950'>Cleveland Caveliers</h3>
            <p className='px-2 md:px-4 pb-2 leading-5 text-[0.8rem] font-semibold'>{`Bad vibes ruined what should be an up-and-coming team in a weak Eastern conference. All signs seem to be that Mitchell wants out, so out he goes.`}</p>
            <Accordion title="Donovan Mitchell sign-and-trade for... ">
              <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col'>
                  <p className='mb-3 mt-3 px-4 md:pr-2 md:pb-2 text-[0.8rem] font-semibold'><strong className='bg-clip-text text-transparent bg-gradient-to-r from-amber-800 via-neutral-600 to-orange-950'>{`Everything Popovich will give us. `}</strong>  {`Ben Simmons is available but San Antonio is still the team with the most draft capital that's most likely to salivate over LaMelo coming on the trade block.`}</p>
                  <p className='mb-3 mt-3 px-4 md:pr-2 md:pb-2 text-[0.8rem] font-semibold'>{`New Orleans should raise an eyebrow but Ingram makes 3x as much as Ball.  The Hornets could get their own pick back, or bet against the Bulls or Hawks - San Antonio has firsts from all of them.`}</p>
                </div>
                <div className='mt-0 mb-0 h-auto w-auto md:border-2 border-neutral-100'/>
                <img src='/trades/spurs.png' alt='Celtics' className="w-2/3 md:w-1/2 mx-auto h-0 md:h-full object-cover border-1 border-white md:my-0"/>
              </div>
              <div className='m-0 h-auto w-full border-2 border-neutral-100'/>
              <div className='flex flex-wrap mt-4'>
                <div className='flex flex-col mb-3 mx-auto md:ml-3 md:mr-3'>
                  <em className='md:max-w-[300px] font-semibold text-center md:text-left'>Charlotte receives:</em> 
                  <div className='flex flex-wrap justify-center md:justify-start '>
                    <ZachCollins/>
                  </div>
                </div>
                <div className='flex flex-col mb-3 mx-auto md:ml-3 md:mr-3'>
                  <em className='md:max-w-[300px] font-semibold text-center md:text-left'>San Antonio receives:</em>
                  <div className='flex flex-wrap justify-center md:space-x-3'>
                    <Lamelo/>
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
