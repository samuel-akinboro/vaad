import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import {EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/solid'

const Header = () => {
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
      </div>
    </div>
  )
}

export default Header