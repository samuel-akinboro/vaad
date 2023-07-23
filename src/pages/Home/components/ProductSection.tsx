import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

interface Prop {
  data: any[]
}

const ProductSection = ({ data }:Prop) => {
  return (
    <div className='py-8 lg:pt-20 lg:pb-0'>
      <div className='w-10/12 max-w-[1400px] mx-auto'>
        <div className='flex flex-wrap justify-between items-center gap-3'>
          <div>
            <h2 className='font-regular text-[1.75rem] lg:text-[2.25rem]'>Outdoor Advertising</h2>
            <p className='text-sm text-gray font-light lg:text-base lg:w-[30rem]'>Expend your reach and connect with thousands of potential customers daily.</p>
          </div>
          <div className='flex items-center gap-x-1 text-primary'>
            <Link to='/' className='text-sm lg:text-base underline underline-offset-2'>View all</Link>
            <ChevronRightIcon className='w-4 lg:w-5' />
          </div>
        </div>
        <div className='flex items-center gap-6 flex-wrap mt-8'>
          {data?.map((product, i) => (
            <div key={i} className='p-4 rounded-3xl border border-[#EEE] lg:flex-[0.30]'>
              <img src={product.img} alt="" className='w-full' />
              <p className='text-lg font-semibold mt-4'>{product.title}</p>
              <p className='text-gray font-light text-sm lg:text-base'>{product.description}</p>
              <p className='text-gray text-sm lg:text-base font-light my-3'>{product.size}-{product.type}</p>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-primary text-sm lg:text-base font-semibold'>N421,400</p>
                <Link to="/" className='bg-primary py-2 rounded-md text-white font-light px-4'>Book</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductSection