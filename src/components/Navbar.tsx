"use client"

import React from 'react'
import useScrollObserver from '@/hooks/useScroll'
import Link from 'next/link'
import { RouteInterface } from '@/types/routes.types'

const Navbar = () => {

 const {scrollY} = useScrollObserver();

 const Routes : RouteInterface[] = [
    {
        name : 'Home',
        path : '/'
    } ,
    {
       name : 'Personal-goals',
       path : '/personal-goals'
    }
 ]


 return ( 
    <div className={`${scrollY > 0 ? 'bg-blue-300' : 'bg-blue-500'} flex justify-center items-center h-[80px] w-full text-white`}>
     <ul className='flex gap-2 text-white'>
        {Routes.map((item : RouteInterface) => (
            <Link className='text-[22px] md:text-[20px] font-semibold text-white hover:text-gray-200 duration-150' href={item.path} key={item.name}>
             {item.name}
            </Link>
        ))}
     </ul>
    </div>
 )
}

export default Navbar