// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Header from "./components/Header"
import MainArea from "./components/MainArea"
import SideNav from "./components/SideNav"
// import billboardImage from '../../assets/images/billboard.png'
// import { HeartIcon } from "@heroicons/react/24/solid"

const Reports = () => {
  return (
    <div>
      <div className='flex h-screen'>
        <SideNav />
        <MainArea>
          <Header />
          <div className='flex min-h-full p-8'>
            <div className="bg-white p-8 rounded-lg flex-1">
              <p className="text-base font-bold text-black items-center gap-2 flex w-fit pr-3">
                Reports
                {/* <ChevronDownIcon className="h-5 text-[#6C727F]" /> */}
              </p>
              {/* <div className="grid grid-cols-3 gap-6 pt-8">
                {Array(9).fill('').map((_, i) => (
                  <div className="overflow-hidden rounded-lg border border-gray3" key={i}>
                    <img src={billboardImage} alt="" className="w-full h-[10rem]" />
                    <div className="p-4 pt-6">
                      <div className="flex items-center justify-between">
                        <p className="text-primary text-[1.2rem] font-semibold">
                          N2,095
                          <span className="text-sm text-[#1D2130] font-light"> /month</span>
                        </p>
                        <p className="flex items-center justify-center rounded-full border border-gray3 h-[2.4rem] w-[2.4rem]">
                          <HeartIcon className="h-5 text-red" />
                        </p>
                      </div>
                      <p className="text-xl text-[#1D2130] font-semibold mt-2">Static Billboard</p>
                      <p className="text-sm font-light mt-1">Lorem ipsum dolor sit amet cons ectetur adipiscing elit.</p>
                    </div>
                  </div>
                ))}
              </div> */}
              {/* <div className="mx-auto w-fit flex items-center gap-4 mt-8">
                <ChevronLeftIcon className="cursor-pointer h-6 text-primary" />
                <p className="text-white h-[2.5rem] w-[2.5rem] flex items-center justify-center font-semibold text-lg bg-primary rounded-full">1</p>
                <p className="text-gray2 h-[2.5rem] w-[2.5rem] flex items-center justify-center font-semibold text-lg bg-white shadow-lg rounded-full cursor-pointer">2</p>
                <ChevronRightIcon className="cursor-pointer h-6 text-primary" />
              </div> */}
            </div>
          </div>
        </MainArea>
      </div>
    </div>
  )
}

export default Reports