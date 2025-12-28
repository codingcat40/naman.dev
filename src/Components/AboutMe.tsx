import { useState } from "react"
import ImageComponent from "./ImageComponent"

const AboutMe = () => {
  const [paragraphId, setParagraphId] = useState<string | null>(null);



  const copyUrl = async (e:  React.MouseEvent<HTMLButtonElement>) => {
  const para = (e.target as HTMLElement).closest("p");
  if(!para)return;
  const paraId = para.id;
    try{
      const url = `${window.location.origin}${window.location.pathname}#${paraId}`
      await navigator.clipboard.writeText(url);
      setParagraphId(paraId)

      setTimeout(() =>  {
        setParagraphId(null)
      }, 1500);

    }catch(err){
      console.log('failed to copy url', err)
      
    }
  }

  return (
    <div className="flex flex-col text-center gap-8 justify-center mt-24 w-full lg:max-w-4xl mx-auto font-mono">
      
        <div className="flex flex-col gap-4 text-2xl border">
          <span className="text-red-600 flex-1">About 
            <a href="" className="text-white hover:text-red-500 duration-150"> [Share]</a>
          </span>
          <div className="text-center mx-auto relative inline-block">
            <ImageComponent/>
          </div>
        </div>

        {/* About me */}
        <div className="flex-col text-[18px] text-white">
            <p className="font-mono text-left" id="Intro">
                <button className="cursor-pointer hover:text-red-500 duration-150" onClick={copyUrl}>{paragraphId === "Intro" ? ' Copied! ' : ' [Share] ' } </button> Hello, Stranger! <span className="text-blue-600">My Name is Naman Matoliya, I was born in 2001 in India </span> 
                I graduated from school in 2018 and took a gap year for JEE preparation. I started my college journey in Computer Science and Engineering where I gained the experience of writing code and solving real life problems.
                I worked in the projects in the domains of AI and Web development. I also gained hands on experience in these both as an Intern. I worked on projects in front end, back end development which allowed me to think clearly and enhance my ability to solve problems. 
                As of now while up skilling myself I am looking for an internship / full time role which allows me to use the experience and skills I gained and contribute to the product to the fullest of my ability.  
            </p>
        </div>

      {/* Hobbies */}
      <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="text-gray-300 text-[20px]">Hobbies and Interest</span>
          <div className="flex-1 border-t border-gray-400"></div>
      </div>
    
    <div className="flex-col text-[18px] text-white">
    <p className="font-mono text-left" id="hobbies">
      <button className="cursor-pointer hover:text-red-500 duration-150" onClick={copyUrl}>{paragraphId === "hobbies" ? ' Copied! ' : ' [Share] ' }</button> I spend all my free time at my laptop because my hobby is the same as my main occupation - programming.
    </p>
    </div>
      



    </div>
  )
}

export default AboutMe