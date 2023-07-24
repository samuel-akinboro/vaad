// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Header from "./components/Header"
import MainArea from "./components/MainArea"
import SideNav from "./components/SideNav"
import reportStaticImage from '../../assets/images/report-static.png'
import reportStatImage from '../../assets/images/report-stats.png'
import reportIncomeImage from '../../assets/images/report-income.png'
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
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="grid grid-rows-2 gap-6">
                  <img src={reportStaticImage} alt="" />
                  <img src={reportIncomeImage} alt="" />
                </div>
                <img src={reportStatImage} alt="" className="object-contain w-full" />
              </div>
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