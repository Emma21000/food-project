import React from 'react'

export default function ReviewCard(props) {
  return (
    <div className='text-white my-4 p-10 w-full md:w-1/3  border-2 border-lg border-gray-400 md:border-none rounded-lg shadow-2xl shadow-black bg-[#AAC0AF]'>
        <div>
            <p className='tracking-widest w-80 mx-auto font-serif'>The food was absolutely delicious! Everything tasted fresh and full of flavor. I’ll definitely order again.</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-6 mt-4'>
            <img src={props.img} alt='img' className='rounded-full w-1/4'/>
            <p className='text-2xl font-serif'>{props.name}</p>
        </div>
    </div>
  )
}
