import React from 'react'
import DishesCard from '../layouts/DishesCard'

export default function Dishes({ data }) {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-12'>
      <h1 className='text-4xl font-mono '>{data.title}</h1>
      <div className='flex flex-wrap gap-8 justify-center items-center pt-6'>
        <DishesCard img='soup.jpg' title='Tasty Dish' price='$ 10.11'/>
        <DishesCard img='pizza.jpg' title='Tasty Dish' price='$ 12.11'/>
        <DishesCard img='meat.jpg' title='Tasty Dish' price='$ 14.11'/>
        <DishesCard img='pancake.jpg' title='Tasty Dish' price='$ 11.11'/>
        <DishesCard img='salad.jpg' title='Tasty Dish' price='$ 15.11'/>
        <DishesCard img='sweet.jpg' title='Tasty Dish' price='$ 18.11'/>
      </div>
    </div>
  )
}
