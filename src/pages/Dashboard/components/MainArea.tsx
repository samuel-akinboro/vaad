interface Props {
  children: any;
}

const MainArea = ({children}: Props) => {
  return (
    <div className='h-full flex-1 overflow-y-auto bg-[#f4f4f5]'>
      {children}
    </div>
  )
}

export default MainArea