import imageOne from '../../../assets/images/factor-1.png'
import imageTwo from '../../../assets/images/factor-2.png'
import imageThree from '../../../assets/images/factor-3.png'
import imageFour from '../../../assets/images/factor-4.png'

const Factor = () => {
  return (
    <div className='py-8 lg:py-20'>
      <div className="w-10/12 mx-auto max-w-[1400px] flex flex-col gap-6 lg:flex-row items-center lg:justify-between">
        <div className='flex gap-4'>
          <img src={imageOne} alt="" className='h-[2.1rem] object-contain lg:h-[3.1rem] mt-[0.45rem] lg:mt-[0.9rem]' />
          <div className='text-center'>
            <p className='text-[2.1rem] font-semibold lg:text-[3.1rem]'>28k</p>
            <p className='text-light text-sm lg:text-base text-black'>Happy Users</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <img src={imageTwo} alt="" className='h-[2.1rem] object-contain lg:h-[3.1rem] mt-[0.45rem] lg:mt-[0.9rem]' />
          <div className='text-center'>
            <p className='text-[2.1rem] font-semibold lg:text-[3.1rem]'>3k</p>
            <p className='text-light text-sm lg:text-base text-black'>Transactions</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <img src={imageThree} alt="" className='h-[2.1rem] object-contain lg:h-[3.1rem] mt-[0.45rem] lg:mt-[0.9rem]' />
          <div className='text-center'>
            <p className='text-[2.1rem] font-semibold lg:text-[3.1rem]'>500+</p>
            <p className='text-light text-sm lg:text-base text-black'>Trusted Partners</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <img src={imageFour} alt="" className='h-[2.1rem] object-contain lg:h-[3.1rem] mt-[0.45rem] lg:mt-[0.9rem]' />
          <div className='text-center'>
            <p className='text-[2.1rem] font-semibold lg:text-[3.1rem]'>3k</p>
            <p className='text-light text-sm lg:text-base text-black'>Transaction Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Factor