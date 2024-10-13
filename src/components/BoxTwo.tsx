import five_stars from "../assets/illustration-five-stars.webp"

interface BoxTwoProps {
  grid: string
}

const BoxTwo: React.FC<BoxTwoProps> = ({grid}) => {
  return (
    <div className={`rounded-md p-8 text-center bg-altPurple lg:content-center ${grid}`}>
      <h2 className="w-22 text-5xl font-medium text-white lg:text-6xl">Social Media <span className="text-yellow-400">10x</span> <span className="italic">Faster</span> with AI</h2>
      <img src={five_stars} className="h-8 mx-auto mt-6 mb-2" alt="five-stars" />
      <h4 className="text-white text-lg">Over 4,000 5-stars reviews</h4>
    </div>
  )
}

export default BoxTwo