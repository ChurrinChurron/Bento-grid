interface BoxOneProps {
  children: React.ReactNode,
  bgColor: string,
  grid: string
}

const BoxOne: React.FC<BoxOneProps> = ({children, bgColor, grid}) => {
  return (
    <div className={`p-7 rounded-md ${bgColor} lg:p-5 ${grid}`}>
      {children}
    </div>
  )
}

export default BoxOne