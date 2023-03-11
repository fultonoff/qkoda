import React from 'react'

function Footer() {
  return (
    <footer className='max-w-7xl mx-auto py-[50px] border-t'>
      <div className='text-center font-main'>
       Made with ❤️ by <a className='text-secondary' href="https://github.com/fultonoff" target='_blank'>Fulton</a> {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer