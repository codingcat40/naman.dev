import ImageComponent from "./ImageComponent"

const AboutMe = () => {
  return (
    <div className="flex flex-col text-center justify-center mt-24 lg:min-w-3xl mx-auto font-mono">
      
        <div className="flex flex-col gap-4 text-2xl border">
          <span className="text-red-500 flex-1">About 
            <a href="" className="text-white"> [Share]</a>
          </span>
          <div className="text-center mx-auto relative inline-block">
            <ImageComponent/>
          </div>
        </div>

        {/*  */}
    </div>
  )
}

export default AboutMe