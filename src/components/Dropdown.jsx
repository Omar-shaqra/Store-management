import React, { useState } from 'react'

export default function Dropdown({ title, items }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative flex flex-col items-center w-fit h-[90px] rounded-lg '>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className='flex items-center justify-between gap-3 bg-[#171716] px-4 py-2 w-auto font-bold text-lg rounded-lg border-4 border-transparent focus:border-white duration-300 active:text-white'>
                {title}
                {!isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                )}
            </button>
            {isOpen && (
                <div className='bg-[#171716] absolute top-14 flex flex-col text-center rounded-lg p-2 '>
                    {(items).map((item, i) => (
                        <div key={i}
                            className='hover:bg-neutral-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4'>
                            <h3 className='m-1'>{item}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
