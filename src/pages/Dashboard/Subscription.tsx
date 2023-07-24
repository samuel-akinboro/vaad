import Header from "./components/Header"
import MainArea from "./components/MainArea"
import SideNav from "./components/SideNav"

const Subscription = () => {
  return (
    <div>
      <div className='flex h-screen'>
        <SideNav />
        <MainArea>
          <Header />
          <div className='flex min-h-full'>
            
          </div>
        </MainArea>
      </div>
    </div>
  )
}

export default Subscription