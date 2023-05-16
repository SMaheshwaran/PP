import React,{useState} from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import emailjs from "@emailjs/browser";
import BackToTop from '@/components/BackToTop';

const Contact_me = () => {
    // SERVICE_ID         :- service_l460sbs
    // YOUR_TEMPLATE_ID   :- template_vdkyze8
    // form.current       :-
    // YOUR_PUBLIC_KEY    :-
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject:'',
      
        message: "",
      });
    
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setForm({ ...form, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        //service id, template id, api public key
        emailjs
          .send(
            "service_l460sbs",
            "template_9yo7jgo",
            {
              from_name: form.name,
              to_name: "maheshwaran",
              from_email: "itssmahesh.5@gmail.com",
              email: form.email,
              subject: form.subject,
              message: form.message,
            },
            "7GxiigNF8rL8pwlYg"
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. I will get back to you as soon as possible");
    
              setForm({
                name: "",
                email: "",
                subject:"",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.log(error);
              alert("Something went wrong");
            }
            );
        };
      

  return (
      <>
      <Head>
         <title>Mahesh | Contact</title>
         <meta name="description" content="any description" />
     </Head>
     <TransitionEffect/>
     <main className='flex flex-col items-center justify-center w-full my-4 dark:text-light'>
     <Layout>
         <AnimatedText text="Feel Free to Connect" className='mb-16 my-4 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
         <p className='p-2 my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'>
         If you&apos;re looking for a UI/UX Graphic Designer or Frontend developer who can create amazing digital experiences, then I&apos;d love to hear from you. Whether you&apos;re looking for help with a new project or need to revamp an existing one,</p>
           <p className='my-4 text-base text-xl font-medium text-center md:text-xl sm:text-xl'> &quot;I&apos;m here to help you bring your ideas to life.Let&apos;s work together to create something amazing!&quot;</p>
     </Layout>

<section className="w-[30%] md:w-[60%] sm:w-[80%] ">
  <div className="px-4 py-8 mx-auto lg:py-16 ">
      <form action="#" className="space-y-8"  onSubmit={handleSubmit}>
      <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" name='name' value={form.name} onChange={handleChange}
             id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required/>
          </div>
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" name='email'  value={form.email}
              onChange={handleChange} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email" required/>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text"  name='subject' value={form.subject} 
              onChange={handleChange} id="subject"  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
              <textarea id="message" name='message' value={form.message} 
              onChange={handleChange} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" className="px-5 py-3 text-sm font-medium text-center border border-gray-400 rounded-lg dark:text-white bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">  {loading ? "Sending...." : "Send Message"}</button>
      </form>
  </div>
</section>

     </main>
     
    <div id="contact" className="py-10 dark:text-white">
        
</div>
<BackToTop/>
</>
  )
}

export default Contact_me