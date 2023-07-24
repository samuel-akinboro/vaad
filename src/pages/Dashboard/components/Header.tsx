import flagIcon from '../../../assets/images/language.png'
import profileImage from '../../../assets/images/profile.png'
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <div className='flex items-center justify-between h-[4rem] bg-white px-4 border-[1px] border-[#EDF2F7] sticky top-0'>
      <div className='flex items-center border-[1px] border-[#EDF2F7] w-[17rem] rounded-lg h-[2.6rem] pl-2'>
        <MagnifyingGlassIcon className='w-5 text-[#A0AAC2]' />
        <input type="text" placeholder='Search for anything' className='font-light px-2 text-sm h-full outline-none placeholder:text-[#83879B]' />
      </div>
      <div className='flex items-center gap-x-8'>
        <div className='flex items-center gap-x-3 border-r-[1px] border-r-[#EDF2F7] pr-6'>
          <img src={flagIcon} alt="" className='h-[1.5rem] w-[1.5rem] cursor-pointer' />
          <BellIcon className='w-6 cursor-pointer' />
        </div>
        <div className='flex items-center gap-3'>
          <img src={profileImage} alt="" className='h-[2.25rem] w-[2.25rem] cursor-pointer' />
          <ChevronDownIcon className='w-4 text-[#A0AAC2] cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Header