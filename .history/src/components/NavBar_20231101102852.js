import Link from 'next/link'
import {React } from 'react';
import { useRouter } from 'next/router';
import { NavBar } from './NavBar.1';

export const CustomLink = ({href, title, className=""}) => {
   const router = useRouter();


return(
  <Link href={href}  className={`${className} relative group`}>
    {title}

    <span className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 
    group-hover:w-full transition-[width] ease duration-300
    ${router.asPath == href ? 'w-full' : 'w-0'}
    dark:bg-light
  `}
    >&nbsp;</span>
  </Link>
)
};


export const CustomMobileLink = ({href, title, className= "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }


return(
 <button href={href}  className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
   {title}

   <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
   group-hover:w-full transition-[width] ease duration-300
   ${router.asPath == href ? 'w-full' : 'w-0'}
   dark:bg-dark
 `}
   >&nbsp;</span>
 </button>
)
};
 

export default NavBar