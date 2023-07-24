import logoImage from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'


const SideNav = () => {

  return (
    <div className='flex-[0.22] h-full flex flex-col'>
      <div className='py-5 pt-10 flex justify-center items-center'>
        <img src={logoImage} alt="" className='w-[6rem]' />
      </div>
      <div className='mt-10 flex flex-col gap-y-2 flex-1 px-4'>
        <NavLink to='/dashboard' end className={({isActive}) => `h-[3rem] flex items-center gap-3 rounded-lg text-sm pl-4 font-soraregular ${isActive ? 'bg-primary text-white' : 'text-[#718096]'}`}>
          <PresentationChartLineIcon className='h-6' />
          Applications
        </NavLink>
        <NavLink to='/dashboard/customers' className={({isActive}) => `h-[3rem] flex items-center gap-3 rounded-lg text-sm pl-4 font-soraregular ${isActive ? 'bg-primary text-white' : 'text-[#718096]'}`}>
          <PresentationChartLineIcon className='h-6' />
          Customers
        </NavLink>
        <NavLink to='/dashboard/favorited' className={({isActive}) => `h-[3rem] flex items-center gap-3 rounded-lg text-sm pl-4 font-soraregular ${isActive ? 'bg-primary text-white' : 'text-[#718096]'}`}>
          <PresentationChartLineIcon className='h-6' />
          Favorited
        </NavLink>
        <NavLink to='/dashboard/reports' className={({isActive}) => `h-[3rem] flex items-center gap-3 rounded-lg text-sm pl-4 font-soraregular ${isActive ? 'bg-primary text-white' : 'text-[#718096]'}`}>
          <PresentationChartLineIcon className='h-6' />
          Reports
        </NavLink>
        <NavLink to='/dashboard/subscription' className={({isActive}) => `h-[3rem] flex items-center gap-3 rounded-lg text-sm pl-4 font-soraregular ${isActive ? 'bg-primary text-white' : 'text-[#718096]'}`}>
          <PresentationChartLineIcon className='h-6' />
          Subscription
        </NavLink>
        <NavLink to='/dashboard/user-management' className={({isActive}) => `h-[3rem] flex items-center gap-3 rounded-lg text-sm pl-4 font-soraregular ${isActive ? 'bg-primary text-white' : 'text-[#718096]'}`}>
          <PresentationChartLineIcon className='h-6' />
          User Management
        </NavLink>
      </div>
    </div>
  )
}

export default SideNav