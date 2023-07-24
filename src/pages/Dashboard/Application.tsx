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
            </div>
          </div>
        </MainArea>
      </div>
    </div>
  )
}

export default Application