import AnimatedText from '@/components/AnimatedText'
import React,{ useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilepicture from "../../public/images/profile/image 3.jpg";
import Image from 'next/image'
import { useMotionValue, useInView, useSpring } from 'framer-motion';
import Skills from '@/components/skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect';
import BackToTop from '@/components/BackToTop';


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue,value])

    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
    
     <Head>
         <title>Mahesh | About</title>
         <meta name="description" content="any description" />
     </Head>
     <TransitionEffect/>
     <main className='flex flex-col items-center justify-center w-full dark:text-light'>
         <Layout className='pt-16'>
             <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
             <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                 <div className='flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8'>
                     <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
<p className='font-medium'>Hi there! This is<span className="text-teal-500"> Maheshwaran </span> , a web developer and UI/UX & Graphic Designer with a passion for creating beautiful, functional, and user-centered digital experiences.
I&apos;m passionate about creating functional designs that help businesses and individuals achieve their goals and make their mark in the digital world.</p>
<p className='font-medium'>My love of design started when I was young and has grown stronger over the years. 
Making an abstract concept tangible and visually appealing has always fascinated me. </p>
<p><span className="text-teal-500"> That&apos;s what motivated me to pursue design. </span></p>
<p className='font-medium'>My role as a designer is to create innovative web applications.
Regardless of the project, I bring my passion for design excellence and user-centered thinking to every project.</p>
                 </div>

<div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light'/>
     <Image src={profilepicture} alt="Mahesh" className='w-full h-auto rounded-2xl'
     priority
     sizes='(maz-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw'/>
    </div>
    <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={50}/>+
        </span>
        <h2 className='text-xl font-medium captalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
            User Experience & User Interface Designs</h2>
    </div>

    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={50}/>+
        </span>
        <h2 className='text-xl font-medium captalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Front-End Projects</h2>
    </div>
    
    
    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
        <AnimatedNumbers value={3}/>+
        </span>
        <h2 className='text-xl font-medium captalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
    </div>

    </div>
    
             </div>
             <BackToTop/>
             <Skills />
             <Experience/>
             <Education/>
             </Layout>
             
     </main>
    </>
  )
}

export default about