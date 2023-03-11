import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Qrcode({image}) {
  return (
    <div className='w-full mx-auto text-center'>
        <Card className="w-96 mx-auto shadow-xl border p-4">
      <CardHeader color="blue" className="relative ">
        <img
          src={image}
          alt="img-blur-shadow"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-center">
        
        <Typography>
          
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small" className='text-primary'>Qrcode.png</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          <a href={image} download='Qrcode.png' className='text-white font-main bg-primary px-4 py-2 rounded-lg font-semibold'>Download</a>
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Qrcode