import React from 'react'
import Button from '../layouts/Button'

export default function About({ data }) {
  return (
    <div className='w-full my-10 flex flex-col justify-center  items-center' id='About'> 
      <p className='tracking-widest text-4xl font-serif font-light mt-6'>About US</p>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:px-30 p-10 gap-14 mt-6'>
        <img src={data.img} alt='dish.jpg' className='lg:w-[40%] w-full h-96 rounded-lg cursor-pointer shadow-lg shadow-black' />
        <div className='space-y-6'>
            <p className='text-2xl font-mono'>{data.title}</p>
            <p className='text-base overflow-hidden w-full lg:w-2xl font-serif leading-8'>{data.description}</p>
            <div className='flex justify-center lg:justify-start'>
              <Button title='Learn more' />
            </div>
        </div>
      </div>
    </div>
  )
}
