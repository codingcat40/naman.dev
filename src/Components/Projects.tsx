import Footer from "./Footer"
import { projects } from "./Project"

function Projects() {
  return (
    <div className="flex flex-col justify-between pt-24 pb-12 text-center gap-6 font-mono">
      {projects.map((item) => {
        return <div key={item.id} className="flex flex-col bg-[#2A2929] border rounded-xl space-y-8 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto text-center m-auto p-2">
            <p className="text-white text-xl text-left font-bold">{item.title}</p>
            <p className="text-white text-lg line-clamp-5">{item.description}</p>
            <div className="flex flex-row text-center gap-3 justify-left flex-wrap">
              {item.stack.map((stack, index) => (
                <span key={index} className="bg-[#5862f2] text-[16px] text-white p-1">{stack}</span>
              ))}
            </div>
            <span className="text-right justify-right">
              {
                <a className=" text-white px-4 py-1 rounded-lg cursor-pointer text-lg hover:text-red-500" href={item.url} target="__blank">[Visit]</a>
              }
            </span>    
        </div>
      })}

      <Footer />
    </div>
  )
}

export default Projects