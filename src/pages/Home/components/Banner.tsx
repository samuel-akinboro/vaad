import { Link } from 'react-router-dom'
import bg from '../../../assets/images/wave-bg.png'

interface Prop {
  image: string;
}

const Banner = ({image}: Prop) => {
  return (
    <div style={{backgroundImage: window.innerWidth < 1024 ? '' : `url(${bg})`}} className='relative mt-12 lg:mt-20 py-8 lg:py-20 bg-[#F7FBFC] lg:bg-transparent bg-contain'>
      <div className="w-10/12 mx-auto max-w-[1400px] h-full relative z-[3] lg:flex lg:items-center lg:justify-between">
        <div className='flex-[0.50]'>
          <p className="text-lg lg:text-[2.25rem] font-semibold lg:w-[24rem] lg:leading-[2.5rem]">Experts in media planning and buying</p>
          <p className="text-sm font-light lg:w-[20rem] mt-4 lg:text-base">Our in-debt knowledge of media planning and buying guarantees savings on ad spending</p>
          <Link to='/' className='bg-red text-white font-light text-sm py-2 px-6 rounded-md mt-6 block w-fit lg:text-base lg:mt-8'>Request a plan</Link>
        </div>
        <div className='mt-12 lg:mt-0 lg:flex-[0.50]'>
          <img src={image} alt="" className='rounded-sm w-11/12 mx-auto object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Banner