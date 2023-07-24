import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Header from "./components/Header"
import MainArea from "./components/MainArea"
import SideNav from "./components/SideNav"

const Customers = () => {
  return (
    <div>
      <div className='flex h-screen'>
        <SideNav />
        <MainArea>
          <Header />
          <div className='flex min-h-full p-8'>
            <div className="bg-white p-8 rounded-lg flex-1">
              <p className="text-base font-bold text-black items-center gap-2 flex w-fit pr-3">
                Customers
                {/* <ChevronDownIcon className="h-5 text-[#6C727F]" /> */}
              </p>
              <table className="bg-white border-collapse w-full mt-8">
                <tr className="font-medium">
                  <th className="text-left px-5 py-4">ID</th>
                  <th className="text-left px-5 py-4">Customers name</th>
                  <th className="text-left px-5 py-4">Email address</th>
                  <th className="text-left px-5 py-4">Phone number</th>
                  <th className="text-left px-5 py-4">Date joined</th>
                  <th className="text-left px-5 py-4"> </th>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
                </tr>
                <tr
                  className="hover:bg-[#fefcfc] border-b border-gray3 text-[#5D606B] font-light"
                  tabIndex={0}
                >
                  <td className="px-5 py-6 text-black">QWK00</td>
                  <td className="px-5 py-6">Marian Adeniran Abode</td>
                  <td className="px-5 py-6">maeijn@gmail.com</td>
                  <td className="px-5 py-6">08172839203</td>
                  <td className="px-5 py-6">06-03-2021</td>
                  <td className="px-5 py-6 text-primary cursor-pointer">View details</td>
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

export default Customers