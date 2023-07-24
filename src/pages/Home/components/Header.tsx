import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import {Bars3Icon, EnvelopeIcon, PhoneIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div>
      <div className="w-10/12 mx-auto flex items-center justify-between h-[78px] bg-white max-w-[1400px]">
        <div className='flex items-center gap-x-24'>
          <img src={logo} alt="" className='w-[114px]' />
          <div className='hidden lg:flex items-center gap-x-8'>
            <p className='flex items-center gap-x-2 font-base'>
              <EnvelopeIcon className='w-5 text-primary' />
              briefs@vaad.com.ng
            </p>
            <p className='flex items-center gap-x-2 font-base'>
              <PhoneIcon className='w-5 text-primary' />
              briefs@vaad.com.ng
            </p>
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-x-4'>
          <Link to='/' className='p-4 py-[0.7rem] font-semibold text-black'>Login</Link>
          <Link to='/' className='px-4 py-[0.7rem] font-medium text-white bg-primary rounded-md'>Sign up</Link>
        </div>
        <Bars3Icon className='h-8 lg:hidden' onClick={() => setShowMenu(true)} />
      </div>
      {showMenu && <div className='fixed top-0 h-screen w-full bg-white z-20 lg:hidden'>
        <div className="w-11/12 mx-auto">
          <div className='flex items-center justify-between py-5'>
            <img src={logo} alt="" className='w-28' />
            <XMarkIcon className='h-8'  onClick={() => setShowMenu(false)}/>
          </div>
          <div className='flex flex-col gap-4 mt-8'>
            <Link to='/' className='text-lg font-light'>Home</Link>
            <Link to='/' className='text-lg font-light'>Billboards</Link>
            <Link to='/' className='text-lg font-light'>TV</Link>
            <Link to='/' className='text-lg font-light'>Radio</Link>
            <Link to='/' className='text-lg font-light'>Digital</Link>
            <Link to='/' className='text-lg font-light'>Print</Link>
            <Link to='/' className='text-lg font-light'>About</Link>
            <Link to='/' className='text-lg font-light'>Contact</Link>
          </div>
          <Link to='/' className='text-lg font-light text-center block mt-8'>Login</Link>
          <Link to='/' className='text-lg font-light text-center block mt-3 bg-primary py-2 text-white rounded-lg'>Sign Up</Link>
        </div>
      </div>}
    </div>
  )
}

export default Header