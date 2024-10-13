import grow_f from "../assets/illustration-grow-followers.webp"

interface BoxFourProps {
  grid: string
}

const BoxFour: React.FC<BoxFourProps> = ({grid}) => {
  return (
    <div className={`rounded-md p-7 bg-altPurple lg:flex lg:justify-center lg:items-center ${grid}`}>
      <img src={grow_f} className="mb-10 mx-auto w-64 lg:mb-0 lg:w-44" alt="grow followers" />
      <h3 className="text-3xl text-center mx-4 text-white font-medium leading-7 lg:text-left lg:text-4xl lg:leading-8">Grow followers with non-stop content.</h3>
    </div>
  )
}

export default BoxFour