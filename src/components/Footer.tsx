import { Link } from 'react-router-dom'
import fbIcon from '../assets/images/fb-icon.png'
import igIcon from '../assets/images/ig-icon.png'
import lnIcon from '../assets/images/ln-icon.png'
import twIcon from '../assets/images/tw-icon.png'
import logo from '../assets/images/logo.png'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div className='pt-8 lg:pt-20 relative'>
      <div className="w-11/12 mx-auto max-w-[1400px] pb-8">
        <div className="grid grid-col-1 gap-6 lg:grid-cols-5">
          <div>
            <img src={logo} alt="" className='w-24' />
          </div>
          <div className='flex flex-col gap-2 lg:gap-4'>
            <p className='text-lg text-black font-regular mb-1 lg:mb-2'>Company</p>
            <Link to='/' className='text-sm lg:text-base font-light'>About Us</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>Contact Us</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>Blog</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>FAQ</Link>
          </div>
          <div className='flex flex-col gap-2 lg:gap-4'>
            <p className='text-lg text-black font-regular mb-1 lg:mb-2'>Services</p>
            <Link to='/' className='text-sm lg:text-base font-light'>Outdoor advertising</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>Print</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>TV</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>Digital</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>Radio</Link>
          </div>
          <div className='flex flex-col gap-2 lg:gap-4'>
            <p className='text-lg text-black font-regular mb-1 lg:mb-2'>Terms</p>
            <Link to='/' className='text-sm lg:text-base font-light'>Privacy Policy</Link>
            <Link to='/' className='text-sm lg:text-base font-light'>Terms & Conditions</Link>
            <div className='flex items-center gap-3'>
              <Link to='/'>
                <img src={fbIcon} alt="" className='w-[1.11rem] object-contain' />
              </Link>
              <Link to='/'>
                <img src={igIcon} alt="" className='w-[1.11rem] object-contain' />
              </Link>
              <Link to='/'>
                <img src={twIcon} alt="" className='w-[1.11rem] object-contain' />
              </Link>
              <Link to='/'>
                <img src={lnIcon} alt="" className='w-[1.11rem] object-contain' />
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-3 lg:gap-5'>
            <p className='text-lg text-black font-regular mb-1 lg:mb-2'>Get in touch</p>
            <Link to='/' className='text-sm lg:text-base font-light flex items-center gap-x-2'>
              <PhoneIcon className='w-5 text-primary' />
              (+234) 808-559-7663
            </Link>
            <Link to='/' className='text-sm lg:text-base font-light flex items-center gap-x-2'>
              <EnvelopeIcon className='w-5 text-primary' />
              briefs@vaad.com.ng
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[95%] border-t-[1px] border-t-[#ddd] py-4 lg:py-8 mx-auto mt-8'>
        <p className='text-center font-light'>© 2022 Vaad All Rights Reserved.</p>
      </div>
      <div className='absolute bottom-0 hidden lg:block'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1368" height="157" viewBox="0 0 1368 157" fill="none">
          <path d="M0 0H425.422L1368 157H0V0Z" fill="url(#paint0_linear_1702_3515)" fill-opacity="0.03"/>
          <defs>
          <linearGradient id="paint0_linear_1702_3515" x1="49.5" y1="42.4998" x2="1417.5" y2="142.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0177AB"/>
          <stop offset="0.549058" stop-color="#0177AB"/>
          <stop offset="0.864027" stop-color="#0177AB"/>
          <stop offset="1" stop-color="#0177AB" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Footer