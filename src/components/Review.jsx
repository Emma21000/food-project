import React from 'react'
import ReviewCard from '../layouts/ReviewCard'

export default function Review({ data }) {
  return (
    <div className='lg:mb-20 my-8 flex flex-col items-center justify-center md:px-30 px-10' id='Reviews'>
        <h3 className='text-4xl font-serif mb-10'>{data.title}</h3>
        <div className='flex flex-col lg:flex-row lg:gap-10 gap-6'>
            <ReviewCard img='oneperson.jpg' name='Sofia Azura'/>
            <ReviewCard img='twoperson.jpg' name='Victoria Zeo'/>
            <ReviewCard img='threeperson.jpg' name='John Deo'/>
        </div>
    </div>
  )
}
