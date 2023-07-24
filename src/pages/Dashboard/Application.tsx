import { ChevronDownIcon } from "@heroicons/react/24/solid"
import Header from "./components/Header"
import MainArea from "./components/MainArea"
import SideNav from "./components/SideNav"

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
                  className="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200 border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6">Alfreds Futterkiste</td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6">View details</td>
                </tr>
                <tr
                  className="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200 border-b border-gray3 text-[#1D2130] font-light"
                  tabIndex={0}
                >
                  <td className="px-8 py-6">QWK00</td>
                  <td className="px-8 py-6">Alfreds Futterkiste</td>
                  <td className="px-8 py-6">Dante Sparks</td>
                  <td className="px-8 py-6">May 16, 2023</td>
                  <td className="px-8 py-6">Lekki Lagos</td>
                  <td className="px-8 py-6">View details</td>
                </tr>
              </table>
            </div>
          </div>
        </MainArea>
      </div>
    </div>
  )
}

export default Application