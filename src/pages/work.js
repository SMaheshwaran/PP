import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Process from '@/components/Process'
import GraphicProcess from '@/components/GraphicProcess'
import BackToTop from '@/components/BackToTop';

const work = () => {
    return (
        <>
        <Head>
           <title>Mahesh | Work</title>
           <meta name="description" content="any description" />
       </Head>
       <TransitionEffect/>
       <main className='flex flex-col items-center justify-center w-full my-4 dark:text-light'>
       <Layout>
           <AnimatedText text="Words can change the World!" className='mb-16 my-4 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
           <div className="my-10">
     <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
     UI/UX</h2>   
     <p className='p-2 my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'>
           My design process involves understanding user needs and creating designs that exceed expectations, adhere to best practices, and are innovative and engaging.Having a technical background  enables me to collaborate with developers to implement designs correctly and efficiently. </p>
           <p className='my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'> &quot;The ultimate goal is to provide an exceptional user experience that satisfies users and clients!&quot;</p>
           <Process/>
           <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
     Graphic Design</h2>   
     <p className='p-2 my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'>
     As a graphic designer, I&apos;m dedicated to providing outstanding design solutions that not only look beautiful but also aid in the achievement of your business objectives, whether you require a new logo, a website design, or a complete rebranding. </p>
           <p className='my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'> My goal is &quot;Make it simple, but significant!&quot;</p>
           <GraphicProcess/>

           <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
     Front-End</h2>   
     <p className='p-2 my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'>
     In addition to UI/UX design, I&apos;m also experienced in frontend development.I have a thorough understanding of HTML, CSS, and JavaScript, and I stay current with the newest trends and technology in web development.
      I&apos;ve worked with a variety of frameworks and libraries, including React, Vue.js, and Angular, and I know how to build scalable, responsive online applications that function well on all devices.</p>
           <p className='my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'> I always look for the latest trends and best practices in the industry.</p>
           
     </div>
     <BackToTop/>
           
       </Layout>
       </main>
  
  </>
    )
  }

export default work