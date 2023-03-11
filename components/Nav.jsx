import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

function Nav() {
    const router = useRouter()
   
    const {systemTheme, theme, setTheme }= useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    })

    const toggleTheme = ()=>{
        if(!mounted) return null
        const currentTheme = theme === 'system' ? systemTheme : theme

        if(currentTheme === 'dark'){
            return(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=> setTheme('light')}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

            )
        }else{
            return(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=> setTheme('dark')}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>

            )
        }
    }

   
  return (
    <nav className='nav min-w-[70vw] mx-auto glass p-4 rounded-xl border z-20'>
        <div className='flex justify-between items-center space-x-10'>
            <div className="logo">
                <Link href='/' className='text-2xl font-main font-bold'>Fulton.</Link>
            </div>
            <ul className='flex items-center space-x-2'>
                <li className={router.pathname === '/about'? 'text-primary': 'text-black'}>
                    <Link href='/about'>About</Link>
                </li>
                {/* <li  className={router.pathname === '/contact'? 'text-primary': 'text-black'}>
                    <Link href='/contact'>Contact</Link>
                </li> */}
            </ul>
            <div className='cursor-pointer border p-2 rounded-lg light:text-primary dark:text-fourth'>

            {toggleTheme()}
            </div>
        </div>
    </nav>
  )
}

export default Nav