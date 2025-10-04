import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button className='tracking-widest px-6 py-2 bg-red-300 text-xl font-serif hover:bg-red-500 cursor-pointer hover:text-white rounded-lg'>{props.title}</button>
    </div>
  )
}
