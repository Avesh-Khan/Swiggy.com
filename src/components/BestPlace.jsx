import React from 'react'
import { data, secandData } from './data'

function BestPlace() {
    return (
        <div className='mt-5 mb-12 max-w-[1200px] mx-auto'>
            <div className='mb-5 flex items-center justify-between'>
                <h1 className='font-bold text-2xl'>Best Places to Eat Across Cities</h1>
            </div>
            <div className='grid grid-cols-1 mx-3 md:grid-cols-4 gap-5 text-[16px] font-semibold'>
                {data.map((val, i) => (
                    <div key={i} className='p-4 flex justify-center items-center border-[0.5px] border-gray-300 rounded-lg text-[#02060cbf]'>{val.name}</div>
                ))}
            </div>
            <div className='mt-10 mb-5 flex items-center justify-between'>
                <h1 className='font-bold text-2xl'>Best Cuisines Near Me</h1>
            </div>
            <div className='grid grid-cols-1 mx-3 overflow-hidden md:grid-cols-4 gap-5 text-[16px] font-semibold'>
                {secandData.map((val, i) => (
                    <div key={i} className='p-4 flex justify-center items-center border-[0.5px] border-gray-300 rounded-lg text-[#02060cbf]'>{val.name}</div>
                ))}
            </div>
            <div className='mt-10 mb-5 flex items-center justify-between'>
                <h1 className='font-bold text-2xl'>Explore Every Restaurants Near Me</h1>
            </div>
            <div className='grid grid-cols-1 mx-3 md:grid-cols-2 gap-5 text-[16px] font-semibold'>
                <div className='p-4 flex justify-center items-center border-[0.5px] border-gray-300 rounded-lg text-[#02060cbf]'>Explore Restaurant Near Me</div>
                <div className='p-4 flex justify-center items-center border-[0.5px] border-gray-300 rounded-lg text-[#02060cbf]'>Explore Top Rated Restaurant Near Me</div>
            </div>
        </div>
    )
}

export default BestPlace