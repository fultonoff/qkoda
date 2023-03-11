import React from 'react'
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody, Button 
} from "@material-tailwind/react";

import QRCode from 'qrcode'
import Qrcode from './Qrcode';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function QrcodeGenerator() {

        const [open, setOpen] = useState(1);
 
 

      const [url, setUrl] = useState('')
       const [qrImage, setQrImage] = useState('')

     

const [color, setColor] = useState('#000000')
  const [backgroundColor, setbackgroundColor] = useState('#ffffff')

  const [selectedValue, setSelectedValue] = useState("");

  //Get Size
  const getSize = (e)=>{
    setSelectedValue(e.target.value)
    console.log(e.target.value)
  }

 
 
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const getQrCode = async ()=>{
    try {
      const qrCode = await QRCode.toDataURL(url, {
        width: `${selectedValue}`,
        color:{
          dark: `${color}`,
          light: `${backgroundColor}`
        },
        margin: 2
      })
      setQrImage(qrCode)
    } catch (err) {
      console.error(err)
    }
  }
  const generateQr = ()=>{
      
      if(!url){
          toast('Please Enter Url in order to generate a Qrcode')
        }else{
            
        toast('Qrcode generated')
        getQrCode()
    }
  }

  const qrColor = (e)=>{
    let selectedColor = e.target.value
    setColor(selectedColor)
  }
  const qrBackgroundColor = (e)=>{
    let selectedBg = e.target.value
    setbackgroundColor(selectedBg)
  }

  return (
    <section className='border-t  py-[50px] px-2 bg-light'>
        <div className='lg:max-w-[1440px] mx-auto flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10'>
            <div className=' lg:w-[30%] bg-gradient-to-tr from-secondary to-fourth text-white dark:bg-white dark:text-[#121212] p-4 rounded-md shadow'>

                <h1 className='text-4xl font-main font-medium mb-10'>Settings</h1>

              <div>
    <ToastContainer />
                <div className='border  p-2 border-dashed mb-5'>
          <div className='font-main text-2xl mb-5'>Sizes</div>
         <select value={selectedValue} className='bg-white text-primary outline-none px-8 py-2 rounded-lg dark:bg-[#121212] dark:text-white cursor-pointer' onChange={getSize}>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="1000">1000</option>
         </select>
                </div>

                <div className='border  p-2 border-dashed mb-5'>

          <div className='font-main text-2xl mb-5'>Colors</div>

            <div className='flex flex-col mb-5'>
            <span>Color</span>
          <input type="color" value={color} onChange={qrColor}/>
            </div>

            <div className='flex flex-col'>
            <span>Background Color</span>
          <input type="color" value={backgroundColor} onChange={qrBackgroundColor}/>
            </div>
                </div>
      
       
     
      
    </div>
            </div>

            

            <div className='w-full'>
                <form className='w-full'>
                    <input type="text" placeholder='Enter Url' className='glass w-full p-4 rounded-full shadow-lg border font-main outline-none' value={url} onChange={(e)=> setUrl(e.target.value)}/>
                    <div className='w-full text-center my-10'>

                    <Button variant="gradient" className='bg-primary px-4  text-center' onClick={generateQr}>Generate</Button>
                    </div>
                </form>

                
                {qrImage && 
                    <Qrcode image={qrImage}/>

                }
                
            </div>
        </div>
    </section>
  )
}

export default QrcodeGenerator