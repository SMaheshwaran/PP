import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Link from "next/link"
import { ,GithubIcon } from '@/components/icon'
import { ImBehance } from "react-icons/im";
import Image from 'next/image'
import project1 from "../../public/images/projects/Sushi order.png"
import project2 from "../../public/images/projects/twitter clone.png"
import project3 from "../../public/images/projects/Plorest.png"
import project4 from "../../public/images/projects/Nike.png"
import project5 from "../../public/images/projects/Book Haven.png"
import project6 from "../../public/images/projects/Bendita.png"
import project7 from "../../public/images/projects/Ai tshirt.png"
import project8 from "../../public/images/projects/Metaverse Madness.png"
import project9 from "../../public/images/projects/Portfolio Home Page.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import BackToTop from '@/components/BackToTop';


const FramerImage = motion(Image);

const FeaturedProject=({type,title,summary,img,link,github}) => {

    return(
        <article className='relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  rounded-br-2xl bg-dark dark:bg-light dark:bg-light rounded-br-2xl xs:right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
                
                />
            </Link>

            <div className='flex flex-col items-start justify-between w-1/2 pl-6 lg:pl-0 lg:pt-6'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='flex items-center mt-2'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
                    {/* <Link href={link} target="_blank" 
                    className='p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base'> 
                    
                    Visit Project</Link> */}
                </div>
            </div>
        </article>
    )
}

const Design=({type,title,summary,img,link,github}) => {

    return(
        <article className='relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  rounded-br-3xl bg-dark dark:bg-light dark:bg-light rounded-br-3xl xs:right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
                
                />
            </Link>

            <div className='flex flex-col items-start justify-between w-1/2 pl-6 lg:pl-0 lg:pt-6'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='flex items-center mt-2'>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><DribbbleIcon/> {" "}
                   </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) =>{
    return(
        <article className='relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-full overflow-hidden rounded-lg cursor-pointer'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                 whileHover={{scale:1.05}}
                 transition={{duration:0.2}}
                 priority
              sizes='(maz-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
                />
            </Link>

            <div className='flex flex-col items-start justify-between w-full mt-4'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='w-full my-2 text-3xl font-bold text-left lg:text-2xl'>{title}</h2>
                </Link>
                <div className='flex items-center justify-between w-full mt-2'>
                {/* <Link href={link} target="_blank" 
                    className='text-lg font-semibold underline md:text-base'> 
                    
                    Visit</Link> */}

                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/> {" "}
                    </Link>
                </div>
            </div>
        </article>

    )
}

const ProjectD = ({title, type, img, link, github}) =>{
    return(
        <article className='relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-full overflow-hidden rounded-lg cursor-pointer'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                 whileHover={{scale:1.05}}
                 transition={{duration:0.2}}
                 priority
              sizes='(maz-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
                />
            </Link>

            <div className='flex flex-col items-start justify-between w-full mt-4'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='w-full my-2 text-3xl font-bold text-left lg:text-2xl'>{title}</h2>
                </Link>
                <div className='flex items-center justify-between w-full mt-2'>
                {/* <Link href={link} target="_blank" 
                    className='text-lg font-semibold underline md:text-base'> 
                    
                    Visit</Link> */}
                    <Link href={github} target="_blank" className='w-12'><ImBehance className='w-8 h-8'/>
                    </Link>
                    
                </div>
            </div>
        </article>

    )
}
const Projects = () => {
  return (
      <>
      <Head>
         <title>Mahesh | Projects</title>
         <meta name="description" content="any description" />
     </Head>
     <TransitionEffect/>

     <main className='flex flex-col items-center justify-center w-full mb-16 dark:text-light'>
         <Layout className='pt-16'>
             <AnimatedText text="Imagination Trumps Knowledge!"
             className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
             />
             <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                 <div className='col-span-12'>
                      
                      <Design

                     title="Book Haven"
                     img={project5}
                     summary="This use case showcases a web design project that brings the concept of an online Book Store to reality, providing users with an immersive platform to explore, purchase, and indulge in their favorite books. Experience seamless navigation, personalized recommendations, and a delightful book shopping experience."
                     link="https://www.behance.net/gallery/174592495/Book-Haven"
                     github="https://dribbble.com/shots/21915279-Book-Haven"
                     type="UI/UX Use Case"/>
                 </div>
                 <div className='col-span-6 sm:col-span-12'>
                 <ProjectD 

title="Sushi Placer"
img={project1}
link="https://www.behance.net/gallery/161229875/Sushi-placer"
 github="https://dribbble.com/shots/20333650-Sushi-Order-App"
type="Featured Project"/>
                       
                 </div>
                 <div className='col-span-6 sm:col-span-12'>
                 <ProjectD 

title="Nike Air"
img={project4}
link="https://dribbble.com/shots/21300213-Nike-Air"
github="https://www.behance.net/gallery/169157285/Nike-Air"
type="Featured Project"/>
                       
                 </div>

                 <div className='col-span-12'>
                      
                      <Design

                     title="Curriculum Vitae"
                     img={project9}
                     summary="Here is my CV which I would like to present to you."
                     link="https://www.behance.net/gallery/167065789/Portfolio"
                     github="https://dribbble.com/shots/21043715-PortFolio-CV"
                     type="Featured Project"/>
                 </div>

                 <div className='col-span-6 sm:col-span-12'>
                 <ProjectD 

title="Plorest"
img={project3}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="https://dribbble.com/shots/20354798-Plorest"
github="https://www.behance.net/gallery/161230655/Plorest"
type="Featured Project"/>
                       
                 </div>
                 <div className='col-span-6 sm:col-span-12'>
                 <ProjectD 

title="Bendita"
img={project6}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="https://dribbble.com/shots/21300409-Bendita"
github="https://www.behance.net/gallery/169227249/Bendita"
type="Featured Project"/>
                 </div>

                 <div className='col-span-12 sm:col-span-12'>
                 <FeaturedProject 

title="AI T-Shirt Generator"
img={project7}
summary="This AI T-Shirt generator helps in designing the t-shirt with the logo's you provide and you can change the camera angles and change colors of your T-shirt."
link="https://github.com/SMaheshwaran/Ai-Tshirt-generator"
github="https://github.com/SMaheshwaran/Ai-Tshirt-generator"
type="Featured Project"/>
                 </div>
                 <div className='col-span-6 sm:col-span-12'>
                 <Project 

title="Metaverse_Madness"
img={project8}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="https://metaversus-tau-rust.vercel.app/?vercelToolbarCode=1oOdj4LQkf_4zcj"
github="https://github.com/SMaheshwaran/Metaversus"
type="Featured Project"/>
                 </div>
                 <div className='col-span-6 sm:col-span-12'>
                 <Project 

title="Twitter clone"
img={project2}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="https://github.com/SMaheshwaran/twitter_clone"
github="https://github.com/SMaheshwaran/twitter_clone"
type="Featured Project"/>
                 </div>


             </div>
             <BackToTop/>
         </Layout>
     </main>
      </>
    
  )
}

export default Projects