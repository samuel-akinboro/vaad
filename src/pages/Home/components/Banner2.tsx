import { Link } from 'react-router-dom'
import image from '../../../assets/images/man-net.png'

const Banner2 = () => {
  return (
    <div className='relative mt-12 lg:mt-12 py-8 lg:py-12 bg-[#013C56] bg-contain'>
      <div className="w-10/12 mx-auto max-w-[1400px] h-full relative z-[3] lg:flex lg:items-center lg:justify-between">
        <div className='flex-[0.50]'>
          <p className="text-lg lg:text-[2.25rem] font-semibold lg:w-[24rem] lg:leading-[2.5rem] text-white">Partner with us, and list your adspace.</p>
          <p className="text-sm font-light lg:w-[20rem] mt-4 lg:text-base text-[#DFDFDF]">Join hundreds of media vendors selling on our platform for free</p>
          <Link to='/' className='bg-red text-white font-light text-sm py-2 px-12 rounded-md mt-6 block w-fit lg:text-base lg:mt-8'>Register</Link>
        </div>
        <div className='mt-12 lg:mt-0 lg:flex-[0.50]'>
          <img src={image} alt="" className='rounded-sm w-[70%] mx-auto object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Banner2