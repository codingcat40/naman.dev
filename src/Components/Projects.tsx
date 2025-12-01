import { projects } from "./Project"

function Projects() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between pt-24 pb-12 text-center gap-6">
      {projects.map((item) => {
        return <div key={item.id} className="flex flex-col bg-gray-800 border gap-16 w-[50%] text-center m-auto p-4">
            <p className="text-white text-xl">{item.title}</p>
            <p className="text-white text-sm">{item.description}</p>
            <div className="flex flex-row text-center gap-12 justify-center">
              {item.stack.map((stack, index) => (
                <span key={index} className="bg-blue-900 text-white p-2 rounded-2xl">{stack}</span>
              ))}
            </div>    
        </div>
      })}
    </div>
  )
}

export default Projects