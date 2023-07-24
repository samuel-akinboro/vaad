import logoImage from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'


const SideNav = () => {

  return (
    <div className='flex-[0.22] border-r-[1px] border-[#C9CFD8] h-full flex flex-col'>
      <div className='py-3'>
        <img src={logoImage} alt="" className='h-[3.5rem] mx-auto object-contain' />
      </div>
      <div className='mt-10 flex flex-col gap-y-2 flex-1 pr-4'>
        <NavLink to='/' className={({isActive}) => `h-[3.7rem] flex items-center gap-3 rounded-tr-[3.125rem] rounded-br-[3.125rem] text-lg pl-4 font-soraregular ${isActive ? 'bg-pink text-primary' : 'text-black'}`}>
          <PresentationChartLineIcon className='h-6' />
          Home
        </NavLink>
        <NavLink to='/discover' className={({isActive}) => `h-[3.7rem] flex items-center gap-3 rounded-tr-[3.125rem] rounded-br-[3.125rem] text-lg pl-4 font-soraregular ${isActive ? 'bg-pink text-primary' : 'text-black'}`}>
          <PresentationChartLineIcon className='h-6' />
          Discover professionals
        </NavLink>
        <NavLink to='/post' className={({isActive}) => `h-[3.7rem] flex items-center gap-3 rounded-tr-[3.125rem] rounded-br-[3.125rem] text-lg pl-4 font-soraregular ${isActive ? 'bg-pink text-primary' : 'text-black'}`}>
          <PresentationChartLineIcon className='h-6' />
          Post opportunity
        </NavLink>
        <NavLink to='/recieved-applications' className={({isActive}) => `h-[3.7rem] flex items-center gap-3 rounded-tr-[3.125rem] rounded-br-[3.125rem] text-lg pl-4 font-soraregular ${isActive ? 'bg-pink text-primary' : 'text-black'}`}>
          <PresentationChartLineIcon className='h-6' />
          Received applications
        </NavLink>
        <NavLink to='/profile' className={({isActive}) => `h-[3.7rem] flex items-center gap-3 rounded-tr-[3.125rem] rounded-br-[3.125rem] text-lg pl-4 font-soraregular ${isActive ? 'bg-pink text-primary' : 'text-black'}`}>
          <PresentationChartLineIcon className='h-6' />
          My profile
        </NavLink>
      </div>
    </div>
  )
}

export default SideNav