import { Link, NavLink } from 'react-router-dom'
import bgImage from '../../../assets/images/home-bg.png'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${bgImage})`, height: 'calc(100vh - 76px)'}} className='relative bg-cover bg-fixed'>
      {/* <div style={{backgroundColor: '#0000008d'}} className='absolute h-full w-full bg-repeat z-[5]' /> */}
      <div style={{backgroundColor: 'rgba(0, 0, 0, 0.70)'}} className='absolute h-full w-full bg-repeat z-[5]' />
      <div className="w-10/12 h-full mx-auto z-10 relative flex flex-col max-w-[1400px]">
        <div className='hidden lg:flex items-center gap-x-14 py-6'>
          <NavLink to='/' className={({isActive}) => isActive ? 'font-medium text-primary' : 'text-white font-medium'}>Home</NavLink>
          <NavLink to='/dashboard' className={'text-white font-regular'}>Billboards</NavLink>
          <NavLink to='/dashboard' className={'text-white font-regular'}>TV</NavLink>
          <NavLink to='/dashboard' className={'text-white font-regular'}>Radio</NavLink>
          <NavLink to='/dashboard' className={'text-white font-regular'}>Digital</NavLink>
          <NavLink to='/dashboard' className={'text-white font-regular'}>Billboards</NavLink>
          <NavLink to='/dashboard' className={'text-white font-regular'}>Billboards</NavLink>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-center gap-12 flex-1 xl:gap-28 justify-between'>
          <div className='flex-[0.60] 2xl:flex-[0.57] xl:-mt-20'>
            <h1 className='text-white font-bold text-[2.3rem] pt-8 lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem]'>Buy ad Space and Print in Minutes</h1>
            <p className='text-white font-light text-sm mt-2 lg:text-base lg:w-3/5 xl:w-[70%]'>We deliver visible and measurable return on investment (ROI) on outdoor advertising</p>
          </div>
          <div style={{background: 'rgba(242, 250, 254, 0.12)'}} className='lg:flex-[0.40] bg-[#F2FAFE] rounded-lg px-3 py-5 2xl:flex-[0.30] xl:pb-12 xl:px-5 mb-10'>
            <div className='flex items-center gap-x-2 lg:gap-x-5 xl:pb-3'>
              <p className='text-white font-light text-sm lg:text-base border-b-red border-solid border-b-[2px] pr-3 pb-1 cursor-pointer'>Billboard</p>
              <p className='text-gray2 font-light text-sm lg:text-base pr-3 pb-1 cursor-pointer'>Print</p>
              <p className='text-gray2 font-light text-sm lg:text-base pr-3 pb-1 cursor-pointer'>Digital</p>
              <p className='text-gray2 font-light text-sm lg:text-base pr-3 pb-1 cursor-pointer'>Radio</p>
              <p className='text-gray2 font-light text-sm lg:text-base pr-3 pb-1 cursor-pointer'>Tv</p>
            </div>
            <div className='mt-4'>
              <p className='text-white text-sm lg:text-base mb-2 font-light'>Location</p>
              <div style={{background: 'rgba(255, 255, 255, 0.20)'}} className='flex items-center justify-between rounded-md cursor-pointer p-2'>
                <p className='text-sm lg:text-base text-[#A2A6B0]'>Select</p>
                <ChevronDownIcon className='h-4 text-[#A2A6B0]' />
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-white text-sm lg:text-base mb-2 font-light'>Media type</p>
              <div style={{background: 'rgba(255, 255, 255, 0.20)'}} className='flex items-center justify-between rounded-md cursor-pointer p-2'>
                <p className='text-sm lg:text-base text-[#A2A6B0]'>Select</p>
                <ChevronDownIcon className='h-4 text-[#A2A6B0]' />
              </div>
            </div>
            <Link className="bg-primary text-white text-sm lg:text-base w-full block mt-12 mb-8 rounded-md py-2 text-center font-light" to='/dashboard'>Proceed</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero