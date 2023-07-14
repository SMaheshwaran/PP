import {React,useRef } from 'react';
import { motion,useScroll } from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({type,time,info}) =>{
    const ref = useRef(null);

    
    return (
    
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
          
           <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5,type:"spring"}}
            >
                <h3 className="text-2xl font-bold capitalize dark:text-primaryDark sm:text-xl xs:text-lg ">
                    {type}
                </h3>
                <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
                   {time}
                </span>
                <p className="w-full font-medium md:text-sm">
                    {info}
                </p>
            </motion.div>
     </li>
  );
};



const Process = () => {
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
     Design Process
         </h2>    
    
    <div ref={ref}className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div 
style={{scaleY: scrollYProgress}}
className="absolute left-10 top-0 w-[4px] h-full bg-dark origin-top bg-dark origin-top dark:bg-light
md:w-[2px] md:left-[35px] xs:left-[33px]"/>
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-5">
            <Details 
            type="Project Definition & Scope" 
            time="Phase One"
            info="The first step in Design Process is gathering input from different departments, team members, stakeholders and outline the project's goal and scope." 
            />
             <Details 
            type="Understanding the Problem" 
            time="Phase Two"
            info="Phase 2 involves defining the problem from a users' perspective. By empathizing with users to understand the problem by User Personas,Journey & Empathy maps." 
            />  
            
            <Details 
            type="Ideation" 
            time="Phase Four"
            info="Researching the problem is the next step to finding possible solutions, including users, markets, competitors, and products." 
            />  
            
             <Details 
            type="Mockups and Prototypes" 
            time="Phase Five"
            info="After converting the wireframes into mockups, high-fidelity prototypes are built that look and work like the final product." 
            />   
            
            <Details 
            type="Usability Testing" 
            time="Phase Six"
            info="The primary purpose of usability testing is to identify usability issues, assess accessibility, identify business opportunities, and validate ideas." 
            />  
            
             <Details 
            type="Design Handoff" 
            time="Phase Seven"
            info="It is during the second-to-last stage of UX design process, in which prototypes and documentation are handed over." 
            />   
            
            <Details 
            type="Quality Assurance" 
            time="Final Phase"
            info="The UX design process will culminate in a UX audit, which will be performed toward the end of the new release development.  " 
            />    
        </ul>

        </div>
    
    </div>
  )
}

export default Process