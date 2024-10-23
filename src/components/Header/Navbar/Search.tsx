'use client'
import React from 'react'
import {BiSearch} from 'react-icons/bi'

type Props = {}

export default function Search({ }: Props) {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transiton cursor-pointer lg:ml-8 xl:ml-36">
            <div className='flex flex-row items-center justify-between'>
                <div className='text-sm font-semibold px-6'>Tìm kiếm</div>
                <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                    <div className='p-2 bg-rose-500 rounded-full text-white'><BiSearch /></div>
                </div>
            </div>
        </div>
    )
}