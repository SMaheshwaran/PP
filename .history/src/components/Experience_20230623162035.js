import {React,useRef } from 'react';
import { motion,useScroll } from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({position,company,companyLink,time,address,work}) =>{
    const ref = useRef(null);

    
    return (
    
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
          
           <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5,type:"spring"}}
            >
                <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
                target="_blank"
                className="capitalize dark:text-primaryDark text-primary"
                >@{company}</a></h3>
                <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
                   {time} | {address}
                </span>
                <p className="w-full font-medium md:text-sm">
                    {work}
                </p>
            </motion.div>
     </li>
  );
};



const Experience = () => {
    const ref = useRef (null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]

        }
    )
  return (
    <div className="my-64">
     <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
         Experience
         </h2>    
    
    <div ref={ref}className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div 
style={{scaleY: scrollYProgress}}
className="absolute left-10 top-0 w-[4px] h-full bg-dark origin-top bg-dark origin-top dark:bg-light
md:w-[2px] md:left-[35px] xs:left-[33px]
"/>
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-5">
            <Details 
            position="Intern" 
            company="LIMRA United Technology"
            commpanyLink="https://www.linkedin.com/company/limraunited/mycompany/"
            time="2022-Present" 
            address="21, 10, Cart Track Rd,Velachery,Chennai-42" 
            work="The experience of doing internships as a Software Tester and in other aspects of the development process allowed me to gain a deeper understanding of how the IT industry operates."
            />

<Details 
            position="UI/UX Designer" 
            company="Gryffindors"
            commpanyLink="https://gryffindors.vercel.app/"
            time="2023-Present" 
            address="Freelancing Platform" 
            work="Being a part of Gryffindor where I was a part of the team as a Designer at various hackathons as well as a freelancer on various projects throughout this time."
            />     

 

            
        </ul>

        </div>
    
    </div>
  )
}

export default Experience