import BoxOne from "./components/BoxOne"
import BoxTwo from "./components/BoxTwo"
import BoxThree from "./components/BoxThree"
import BoxFour from "./components/BoxFour"
import BoxFive from "./components/BoxFive"
import social_media from "./assets/illustration-multiple-platforms.webp"
import schedule from "./assets/illustration-consistent-schedule.webp"
import audience from "./assets/illustration-audience-growth.webp"
import create_post from "./assets/illustration-create-post.webp"
import AI_chat from "./assets/illustration-ai-content.webp"

function App() {

  return (
    <main className="m-6 grid grid-cols-1 gap-7 lg:justify-center lg:grid-cols-lgCols lg:grid-rows-lgRows">
      <BoxTwo grid="lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1"/>
      <BoxThree bgColor="bg-white"
                grid="lg:row-span-2 lg:col-start-2 lg:row-start-3">
        <img src={social_media} className="w-full max-w-md mb-4 lg:w-72" alt="social-data" />
        <h3 className="text-3xl font-[600] leading-7 tracking-tight lg:leading-6">Manage multiple accounts and platforms.</h3>
      </BoxThree>
      <BoxThree bgColor="bg-altYellow"
                grid="lg:row-span-2 lg:col-start-3 lg:row-start-3">
        <h3 className="text-3xl font-[600] tracking-tight leading-6">Maintain a consistent posting schedule.</h3>
        <img src={schedule} className="relative top-10 w-56 lg:top-4" alt="schedule" />
      </BoxThree>
      <BoxFive grid="lg:row-span-4 lg:col-start-4 lg:row-start-1"/>
      <BoxFour grid="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-5"/>
      <BoxThree bgColor="bg-white"
                grid="lg:row-span-2 lg:col-start-2 lg:row-start-5">
        <h2 className="text-5xl font-[600]">{'>'}56%</h2>
        <h3 className="mt-2 mb-6 text-lg font-[600] lg:text-base">faster audience growth</h3>
        <img src={audience} className="w-44 lg:w-40" alt="audience" />
      </BoxThree>
      <BoxOne bgColor="bg-altYellowLight"
              grid="lg:row-span-3 lg:col-start-1 lg:row-start-1">
        <h2 className="text-3xl font-[600] leading-7 lg:pt-10 lg:text-4xl lg:leading-8">Create and schedule content <span className="italic text-purple-800">quicker.</span></h2>
        <img src={create_post} className="mt-6 w-52 lg:w-44" alt="create post" />
      </BoxOne>
      <BoxOne bgColor="bg-altYellow"
              grid="lg:row-span-3 lg:col-start-1 lg:row-start-4">
        <h2 className="text-3xl font-[600] leading-7 lg:text-4xl lg:leading-8">Write your content using AI.</h2>
        <img src={AI_chat} className="mt-7 w-56 lg:mt-16 lg:w-64" alt="AI chat" />
      </BoxOne>
    </main>
  )
}

export default App