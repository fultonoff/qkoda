import React from 'react'
import aboutImage from '../public/images/about.png'
import Image from 'next/image'
import Link from 'next/link'

function about() {
  return (
    <main className ='aboutbg  relative' >

      <div className='my-[150px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0'>
        <div className='relative flex-1'>
          <div className='absolute bg-gradient-to-bl from-primary to-secondary h-[300px] w-[300px] top-[50%] left-[10%] -translate-x-[50%] -translate-y-[50%] blur-3xl rounded-full opacity-[0.7]'></div>
        <Image src={aboutImage} className='w-96 relative inset-1'></Image>
        </div>

        <div className='flex-1 text-center lg:text-left'>
          <h1 className='font-main font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500 mb-5 animate-bounce duration-200'>Qkoda</h1>
          <p className='font-main font-semibold text-3xl inline-block'>Is a web Application that helps you generate a</p> <span className='font-main font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-fourth inline-block '>QR CODE</span> <p className='font-main text-2xl inline-block'>from a Url</p>
        </div>


      </div>

      <section className='max-w-7xl mx-auto'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-2'>

        <div className='p-4 border border-dashed rounded-lg '>
          <h3 className='py-2 px-8 rounded-full bg-secondary/20 w-fit text-secondary font-main font-semibold mb-10'>Features</h3>
          <p className='max-w-full  font-main'> With <strong>Qkoda</strong>, you can easily create a high-quality Qrcode from any URL of your choice, and customize it to your liking by selecting the size, color, and background color that best suits your needs. Whether you're looking for a small and compact Qrcode or a large and eye-catching one, our tool has got you covered. Once you're happy with your design, simply hit the download button to get your Qrcode in a PNG format, ready to be used for any purpose you need. With our user-friendly Qrcode generator, creating professional-looking Qrcodes has never been easier.<Link className='underline font-main font-light' href='/'>Get Started</Link></p>
        </div>

        <div className='p-4 border border-dashed rounded-lg'>
          <h3 className='py-2 px-8 rounded-full bg-primary/20 w-fit text-primary font-main font-semibold mb-10'>Technology stack</h3>
          <p className='max-w-full  font-main'> Built using cutting-edge technologies that are at the forefront of web development, including Nextjs and tailwind css. Nextjs, a powerful React framework, provides the website with lightning-fast performance and unparalleled SEO optimization capabilities. On the other hand, tailwind css allows for effortless styling and customization of the website's design, making it stand out from the competition. Together, these modern technologies ensure that the website delivers a seamless user experience while also keeping up with the latest web development trends.</p> 
        </div>

        <div className='p-4 border border-dashed rounded-lg'>
          <h3 className='py-2 px-8 rounded-full bg-third/20 w-fit text-third font-main font-semibold mb-10'>Design</h3>
          <p className='max-w-full  font-main'>Clean and minimalist interface that incorporates a well-crafted typography and a harmonious color combination, which creates an aesthetically pleasing experience for users. Additionally, a subtle touch of glass effect is applied to further enhance the overall visual appeal of the app, taking its appearance to the next level. Furthermore, users have the option to switch between light and dark modes, allowing them to tailor the app's appearance to their personal preferences and needs. Whether you prefer a sleek and professional-looking light mode or a bold and stylish dark mode, the app has got you covered, ensuring a personalized user experience that meets your every expectation.</p>
        </div>

        <div className='p-4 border border-dashed rounded-lg'>
          <h3 className='py-2 px-8 rounded-full bg-fourth/20 w-fit text-fourth font-main font-semibold mb-10'>Future improvements</h3>
          <p className='max-w-full  font-main'>Should you find that our App is missing any features that you deem necessary, please do not hesitate to contact us. We welcome and value your feedback, and would be more than happy to consider adding any additional features that would enhance your experience with our App. Our goal is to ensure that our users are fully satisfied with our product, and we are always looking for ways to improve and expand its functionality. So feel free to reach out to us with any suggestions or requests, and we will do our best to incorporate them into our App. <Link href='/contact' className='underline font-main font-light'>Contact</Link></p>
        </div>
       
        

        </div>
      </section>
    </main>
  )
}

export default about