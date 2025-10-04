"use client";
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'
import { MdMenuOpen } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";


export default function Navbar({ data }) {
    const [menu, setMenu] = useState(false);
    function handleChange (){
        setMenu(!menu); 
    }

  return (
    <div className='w-full fixed top-0 left-0'>
        <div className='relative w-full flex justify-between items-center p-5 md:px-32 px-10 bg-white shadow-lg'>
            <p className='text-xl font-serif tracking-wider'>{data.title}</p>
            <div className={`lg:flex ${ menu ? 'flex' : 'hidden'}  absolute lg:static left-0 h-screen lg:h-auto top-full lg:w-auto w-1/2 bg-black text-white lg:text-black lg:bg-white lg:flex-row flex-col text-xl font-serif lg:gap-10 gap-6 py-10 lg:py-0 lg:items-center px-12 lg:px-0`}>
                {data.links.map((link, index)=>(
                    <div className={`relative group`} key={index}>
                        <Link to={link.path} smooth={true} duration={500} className='cursor-pointer hover:text-red-400 text-xl tracking-wider'>{link.name}</Link>
                        {link.sublinks && (
                        <div className='absolute hidden group-hover:block bg-white border-gray-300 border rounded-lg p-5 space-y-2 text-black'>
                            {link.sublinks.map((sublink, idx)=>(
                                <Link key={idx} to={sublink.path} smooth={true} duration={400} className='flex flex-col cursor-pointer text-xl hover:text-red-400  font-serif tracking-widest'>{sublink.title}</Link>
                            ))}
                        </div>
                    )}
                    </div>
                ))}
                <Button title="LogIn" />
            </div>
                <div className={`lg:hidden cursor-pointer`}>
                    {menu ? (<IoCloseOutline onClick={handleChange} size={30}/>) :
                    (<MdMenuOpen onClick={handleChange} size={30}/>)}
                </div>
        </div>
    </div>
  )
}