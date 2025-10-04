import React from 'react'
import DishesCard from '../layouts/DishesCard'

export default function Menu({ data }) {
  return (
    <div className='flex flex-col justify-center items-center lg:px-30 p-10 lg:p-0' id='Menu'>
        <p className='text-4xl font-light font-serif tracking-widest'>{data.title}</p>
        <div className='flex flex-wrap gap-8 justify-center py-10'>
            <DishesCard img='soup.jpg' title='Delicious Dish ' price='$ 20.12'/>
            <DishesCard img='pizza.jpg' title='Delicious Dish ' price='$ 10.12'/>
            <DishesCard img='salad.jpg' title='Delicious Dish ' price='$ 18.12'/>
        </div>
    </div>
  )
}
