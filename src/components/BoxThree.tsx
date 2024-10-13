interface BoxThreeProps {
  children: React.ReactNode,
  bgColor: string,
  grid: string
}

const BoxThree: React.FC<BoxThreeProps> = ({children, bgColor, grid}) => {
  return (
    <div className={`relative overflow-hidden p-5 rounded-md ${bgColor} ${grid}`}>
      {children}
    </div>
  )
}

export default BoxThree
