import { Link } from "react-router-dom"

const Consultation = () => {
  return (
    <div className="py-8 lg:py-20">
      <div className="w-11/12 mx-auto max-w-[1400px] text-center">
        <h2 className="text-2xl lg:text-5xl font-regular">Get a free consultation and professional <br />advice</h2>
        <p className="text-sm lg:text-base text-[#374151] font-light mt-3 lg:mt-5">We are changing the face of the outdoor advertising industry. Get a free consultation and <br />professional advice on outdoor advertising, graphics design, and print procurement.</p>
        <Link to='/' className='bg-red text-white font-light text-sm py-2 px-12 rounded-md mt-6 block w-fit lg:text-base lg:mt-8 mx-auto'>Register</Link>
      </div>
    </div>
  )
}

export default Consultation