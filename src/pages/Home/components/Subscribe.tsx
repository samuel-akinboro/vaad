import image from '../../../assets/images/subscribe-comp.png'
import arcImage from '../../../assets/images/arc.png'

const Subscribe = () => {
  return (
    <div className='relative mt-12 lg:mt-12 bg-contain'>
      <div style={{backgroundImage: 'linear-gradient(188deg, rgba(1, 119, 171, 0.54) 0%, rgba(1, 119, 171, 0.92) 47.92%, rgba(1, 119, 171, 0.90) 50.52%, #005377 100%)'}} className="w-[95%] mx-auto rounded-2xl py-8 lg:py-20 relative overflow-hidden">
        <img src={arcImage} alt="" className='absolute -right-14 -top-14 object-contain w-64' />
        <div style={{backgroundImage: `url(${image})`}} className='bg-contain bg-right-bottom '>
          <div  className="w-[87.3%] mx-auto max-w-[1400px] h-full relative z-[3] lg:flex lg:items-center lg:justify-between rounded-2xl">
            <div className='flex-[0.50]'>
              <p className="text-lg lg:text-[2.25rem] font-semibold lg:w-[24rem] lg:leading-[2.5rem] text-white">Subscribe to newsletter</p>
              <p className="text-sm font-light lg:w-[20rem] mt-4 lg:text-base text-[#DFDFDF]">Be the first to receive the latest news with products and service updates</p>
              {/* <Link to='/' className='bg-red text-white font-light text-sm py-2 px-12 rounded-md mt-6 block w-fit lg:text-base lg:mt-8'>Register</Link> */}
            </div>
            <div className='mt-12 lg:mt-0 lg:flex-[0.50] bg-white rounded-lg h-[3rem] overflow-hidden flex items-center gap-x-1 pr-1'>
              <input type="text" className='h-full flex-1 pl-4' placeholder='Enter your email' />
              <button className='bg-red text-white font-light text-sm py-2 px-12 rounded-md w-fit lg:text-base'>Subscribe now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe