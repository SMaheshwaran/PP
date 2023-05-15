import {React,useRef } from 'react';
import { motion,useScroll } from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({type,time,place,info}) =>{
    const ref = useRef(null);

    
    return (
    
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
          
           <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5,type:"spring"}}
            >
                <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
                    {type}
                </h3>
                <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
                   {time} | {place}
                </span>
                <p className="w-full font-medium md:text-sm">
                    {info}
                </p>
            </motion.div>
     </li>
  );
};



const Education = () => {
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
     Education
         </h2>    
    
    <div ref={ref}className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div 
style={{scaleY: scrollYProgress}}
className="absolute left-10 top-0 w-[4px] h-full bg-dark origin-top bg-dark origin-top dark:bg-light
md:w-[2px] md:left-[35px] xs:left-[33px]"/>
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-5">
            <Details 
            type="Bachelor Of Engineering In Computer Science" 
            time="2020-Current"
            place="Jaya Engineering College (JEC)"
            info=" The courses that were relevant to the career involved Data Structures and Algorithms, DBMS,Networks and Artificial Intelligence." 
            />
            <Details 
            type="Google UI/UX Design" 
            time="July 2022-December 2022"
            place="Course By Google on Coursera.Certificate earned at December 30, 2022  "
            info="Through the course, I gained an understanding of understanding user experience, building wireframes, high- and low-fidelity designs, and responsive web design." 
            />
             <Details 
            type="Full Stack" 
            time="Nov 22'-Dec 22"
            place="Course By Infosys Springboard"
            info="Through this course, I gained a deeper understanding of and experience working on Full Stack Projects." 
            />
            <Details 
            type="Microsoft Data Fundamentals" 
            time="Sept-22'"
            place="Course By Microsoft"
            info="Gained knowledge and experience with Exploring
            modern data warehouse analytics in Microsoft Azure through this course." 
            />
              <Details 
            type="CAD Modeling" 
            time="Sept-22'"
            place="Course By Bentley Institute"
            info="Through this training, I have have acquired skills and knowledge that helps in 2D/3D CAD Modeling of Building Design" 
            />  
            <Details 
            type="Robotics Automation Process" 
            time="Oct-22'"
            place="Course By Automation Anywhere"
            info="Through this training, I have have acquired skills and knowledge that allows 
             to continue my journey to Robotics Process Automation success." 
            />            
            <Details 
            type="Python" 
            time="Jan-2019'"
            place="Course By University Of Michigan"
            info="An online non-credit course authorized by University of Michigan and offered through
            Coursera on PYTHON" 
            />            
        </ul>

        </div>
    
    </div>
  )
}

export default Education