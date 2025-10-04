import React from 'react'
import { CiStar } from 'react-icons/ci'
import Button from './Button'
import { PiStarHalfFill } from 'react-icons/pi'

export default function DishesCard(props) {
  return (
    <div className='w-full lg:w-1/4 p-5 shadow-xl shadow-[#EDBBB4] rounded-lg bg-[#EDBBB4] text-white'>
        <img className='rounded-lg cursor-pointer lg:h-72 h-80 w-full' src={props.img} alt='soup'></img>
      <div className='space-y-4 '>
        <h2 className='text-center text-4xl font-serif pt-6'>{props.title}</h2>
        <div className='flex justify-center flex-row text-2xl text-red-400'>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <PiStarHalfFill />
        </div>
        <div className='flex flex-row items-center justify-center gap-6 pt-2'>
            <h3 className='font-mono text-lg'>{props.price}</h3>
            <Button title="Buy Now" />
        </div>
      </div>
    </div>
  )
}
