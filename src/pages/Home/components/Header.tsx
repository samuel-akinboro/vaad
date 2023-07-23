import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import {EnvelopeIcon} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto flex items-center justify-between h-[78px] bg-white">
        <div className='flex items-center gap-x-4'>
          <img src={logo} alt="" className='w-[114px]' />
          <div className='flex items-center gap-x-3'>
            <p>
              <EnvelopeIcon />
            </p>
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <Link to='/' className='p-4 py-[0.7rem] font-semibold text-black'>Login</Link>
          <Link to='/' className='px-4 py-[0.7rem] font-medium text-white bg-primary rounded-md'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Header