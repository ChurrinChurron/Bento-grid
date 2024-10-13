import schedule_posts from "../assets/illustration-schedule-posts.webp"

interface BoxFiveProps {
  grid: string
}

const BoxFive: React.FC<BoxFiveProps> = ({grid}) => {
  return (
    <div className={`relative overflow-hidden rounded-md px-5 py-7 bg-altPurpleLight lg:px-6 lg:py-10 ${grid}`}>
      <h3 className="text-2xl text-center leading-6 font-[600] lg:text-left lg:text-3xl lg:leading-6 lg:ms-2">Schedule to social media.</h3>
      <img src={schedule_posts} className="my-6 mx-auto w-full max-w-sm lg:relative lg:left-3 lg:w-80" alt="schedule posts" />
      <h4 className="mx-2 text-xl text-center font-[600] leading-6 lg:text-left lg:text-base lg:leading-5 lg:ms-3">Optimize post timings to publish content at the perfect time for your audience.</h4>
    </div>
  )
}

export default BoxFive