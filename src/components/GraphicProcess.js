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



const GraphicProcess = () => {
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
            type="Creative Brief" 
            time="Phase One"
            info="With the assistance of creative brief materials such as corporate facts, guidelines, audience timeframe, budget, project scope, and end product version." 
            />
             <Details 
            type="Research" 
            time="Phase Two"
            info="Researching the market, competitors, and target audience follows. This allows market research and audience-targeted design." 
            />  
            
            <Details 
            type="Brainstorm" 
            time="Phase Three"
            info="3 to 5 ideas from the ideation and brainstorming stage should be presented in this phase for a seamless graphic design workflow." 
            />  
            
             <Details 
            type="Review" 
            time="Phase Four"
            info="When determining your milestones in creative brief, throughout the design process. The  20/50/90 feedback process ensures  the most crucial parts of a project, allows to give the right feedback." 
            />   
            
            <Details 
            type="Final" 
            time="Final Phase"
            info="Whoo Hoo! The design is complete. It’s time to get the final files and put the designs into action.  Over time, you’ll be able to scale your design process effectively." 
            />   
        </ul>

        </div>
    
    </div>
  )
}

export default GraphicProcess