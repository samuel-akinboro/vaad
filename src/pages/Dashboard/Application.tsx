import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Header from "./components/Header"
import MainArea from "./components/MainArea"
import SideNav from "./components/SideNav"
import rowImage from '../../assets/images/product1.png'

const Application = () => {
  return (
    <div>
      <div className='flex h-screen'>
        <SideNav />
        <MainArea>
          <Header />
          <div className='flex min-h-full p-8'>
            <div className="bg-white p-8 rounded-lg flex-1">
              <p className="text-base font-bold text-black items-center gap-2 flex w-fit pr-3 border-r-[1px] border-r-solid border-r-gray3">
                Static Billboard
                <ChevronDownIcon className="h-5 text-[#6C727F]" />
              </p>
              <table className="bg-white border-collapse w-full mt-8">
                <tr className="font-medium">
                  <th className="text-left px-8 py-4">ID</th>
                  <th className="text-left px-8 py-4">Description</th>
                  <th className="text-left px-8 py-4">- .</th>
                  <th className="text-left px-8 py-4">Date Added</th>
                  <th className="text-left px-8 py-4"></th>
                  <th className="text-left px-8 py-4"> </th>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6 flex items-center font-medium gap-x-3">
                    <img src={rowImage} alt="" className="h-[2.6rem] w-[3.7rem] rounded-md" />
                    Alfreds Futterkiste
                  </td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6 flex items-center font-medium gap-x-3">
                    <img src={rowImage} alt="" className="h-[2.6rem] w-[3.7rem] rounded-md" />
                    Alfreds Futterkiste
                  </td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6 flex items-center font-medium gap-x-3">
                    <img src={rowImage} alt="" className="h-[2.6rem] w-[3.7rem] rounded-md" />
                    Alfreds Futterkiste
                  </td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6 flex items-center font-medium gap-x-3">
                    <img src={rowImage} alt="" className="h-[2.6rem] w-[3.7rem] rounded-md" />
                    Alfreds Futterkiste
                  </td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6 flex items-center font-medium gap-x-3">
                    <img src={rowImage} alt="" className="h-[2.6rem] w-[3.7rem] rounded-md" />
                    Alfreds Futterkiste
                  </td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6 flex items-center font-medium gap-x-3">
                    <img src={rowImage} alt="" className="h-[2.6rem] w-[3.7rem] rounded-md" />
                    Alfreds Futterkiste
                  </td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6 flex items-center font-medium gap-x-3">
                    <img src={rowImage} alt="" className="h-[2.6rem] w-[3.7rem] rounded-md" />
                    Alfreds Futterkiste
                  </td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6 text-primary cursor-pointer">View details</td>
                </tr>
              </table>
              <div className="mx-auto w-fit flex items-center gap-4 mt-8">
                <ChevronLeftIcon className="cursor-pointer h-6 text-primary" />
                <p className="text-white h-[2.5rem] w-[2.5rem] flex items-center justify-center font-semibold text-lg bg-primary rounded-full">1</p>
                <p className="text-gray2 h-[2.5rem] w-[2.5rem] flex items-center justify-center font-semibold text-lg bg-white shadow-lg rounded-full cursor-pointer">2</p>
                <ChevronRightIcon className="cursor-pointer h-6 text-primary" />
              </div>
            </div>
          </div>
        </MainArea>
      </div>
    </div>
  )
}

export default Application