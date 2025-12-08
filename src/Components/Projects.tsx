import { projects } from "./Project"

function Projects() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between pt-24 pb-12 text-center gap-6">
      {projects.map((item) => {
        return <div key={item.id} className="flex flex-col bg-gray-700 border rounded-xl space-y-8 w-[50%] text-center m-auto p-4">
            <p className="text-white text-xl">{item.title}</p>
            <p className="text-white text-sm line-clamp-5">{item.description}</p>
            <div className="flex flex-row text-center gap-3 justify-left flex-wrap">
              {item.stack.map((stack, index) => (
                <span key={index} className="bg-blue-800 text-xs text-white p-2 rounded-2xl">{stack}</span>
              ))}
            </div>
            <span className="text-right justify-right">
              {
                <a className="bg-black text-white px-4 py-1 rounded-lg cursor-pointer" href={item.url} target="__blank">Visit</a>
              }
            </span>    
        </div>
      })}
    </div>
  )
}

export default Projects