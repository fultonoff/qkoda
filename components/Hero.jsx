import React from 'react'
import Image from 'next/image'
import heroImage from '../public/images/Pose213.png'
import { Text } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import ImgWave from '../public/images/wave.png'
import ImgWaveDark from '../public/images/dark.png'
import { useTheme } from 'next-themes'


function Hero() {
    
  return (
    <header className='header-bg py-28 relative'>

        
         
        <div className='flex flex-col lg:flex-row md:space-y-0 md:space-x-10 items-center p-2 space-y-10 max-w-7xl mx-auto'>
            <div className='flex-1 text-center md:text-left flex flex-col items-center lg:items-start space-y-4 '>

                <div>
      <Text
        h1
        size={50}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Easy & Quick Tool 
      </Text>
      <Text
        h1
        size={50}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        To Generate a Qrcode
      </Text>
      <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        & Download for free
      </Text>
                </div>
            </div>

            <div className='flex-1 relative'>
                <div className='absolute bg-gradient-to-bl from-primary to-secondary h-[300px] w-[300px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-3xl rounded-full opacity-[0.7]'></div>
                <Image src={heroImage} className='w-80 md:w-96 inset-1 relative' alt=''></Image>
            </div>
        </div>
    </header>
  )
}

export default Hero