import { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";

const AboutMe = () => {
  const [paragraphId, setParagraphId] = useState<string | null>(null);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const id = hash.replace("#", ""); // "Intro"

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    };
    setTimeout(scrollToHash, 0);
  }, []);

  const copyUrl = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const para = (e.target as HTMLElement).closest("p");
    if (!para) return;
    const paraId = para.id;
    try {
      const url = `${window.location.origin}${window.location.pathname}#${paraId}`;
      await navigator.clipboard.writeText(url);
      setParagraphId(paraId);

      setTimeout(() => {
        setParagraphId(null);
      }, 1500);
    } catch (err) {
      console.log("failed to copy url", err);
    }
  };

  return (
    <div className="flex flex-col text-center gap-8 justify-center mt-24 w-full lg:max-w-4xl mx-auto font-mono">
      <div className="flex flex-col gap-4 text-2xl border">
        <span className="text-red-600 flex-1">
          About
          <a href="" className="text-white hover:text-red-500 duration-150">
            {" "}
            [Share]
          </a>
        </span>
        <div className="text-center mx-auto relative inline-block">
          <ImageComponent />
        </div>
      </div>

      {/* About me */}
      <div className="flex-col text-[18px] text-white">
        <p className="font-mono text-left" id="Intro">
          <button
            className="cursor-pointer hover:text-red-500 duration-150"
            onClick={copyUrl}
          >
            {paragraphId === "Intro" ? " Copied! " : " [Share] "}{" "}
          </button>{" "}
          Hello, Stranger!{" "}
          <span className="text-[#5826F2]">
            My Name is Naman Matoliya, I was born in 2001 in India{" "}
          </span>
          As of now while up skilling myself I am looking for an internship /
          full time role which allows me to use the experience and skills I
          gained and contribute to the fullest of my ability.
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
          <button
            className="cursor-pointer hover:text-red-500 duration-150"
            onClick={copyUrl}
          >
            {paragraphId === "hobbies" ? " Copied! " : " [Share] "}
          </button>{" "}
          I spend all my free time at my laptop programming and solving coding
          problems. Sometimes I watch informative videos about life, philosophy
          and also play video games. I also listen to a lot of music and learn
          german, to be able to express my emotions without any restrictions. I
          love nature and solo travelling.
        </p>
      </div>

      {/* Background */}
      {/* Hobbies */}
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-gray-400"></div>
        <span className="text-gray-300 text-[20px]">Background</span>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="flex-col text-[18px] text-white">
        <p className="font-mono text-left" id="background">
          <button
            className="cursor-pointer hover:text-red-500 duration-150"
            onClick={copyUrl}
          >
            {paragraphId === "background" ? " Copied! " : " [Share] "}
          </button>{" "}
          I graduated from school in 2018 and took a gap year for JEE
          preparation. I started my college journey in <span className="text-[#5862F2]">Computer Science and
          Engineering in KLE Technological University </span>where I gained the experience of writing code and solving
          real life problems. I worked in the projects in the domains of AI and
          Web development. I also gained hands on experience in these both
          during my Internships. I worked on projects in front end, back end
          development which allowed me to think logically and enhance my ability
          to solve problems. During my first internship as a AI Intern I worked
          on open CV problems for object detection using different deep learning
          models. In my second internship as a Front end developer I worked in
          the dev team to develop and enhance the no code builder tool.
        </p>
      </div>


      <div className="flex flex-col mt-4 gap-6">
          <p id="stack" className="text-left text-2xl text-red-600">My Stack <span className="text-white">
              <button
            className="cursor-pointer hover:text-red-500 duration-150"
            onClick={copyUrl}
          >
            {paragraphId === "stack" ? " Copied! " : " [Share] "}
          </button>{" "}
            </span></p>

          <p className="text-white text-left text-lg">
            when developing projects I use different technologies and programming languages,
            so that the product came out as best as possible and satisfied my desires.
          </p>

          <p className="text-left text-xl text-red-500">Languages</p>
          <div className="flex gap-4 text-[#5862F2] text-lg">
            <p>TypeScript</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>C++</p>
          </div>

          <p className="text-left text-xl text-red-500">Technologies</p>
          <div className="flex-col text-left gap-4 text-[#5862F2] text-lg">
            <p className="text-white">Frameworks/Libraries:  <span className="text-[#5862F2]">TailwindCSS, ReactJS, NextJS, Express</span></p>
            <p className="text-white">Development Tools:  </p> <span className="text-[#5862F2]">Vite, VS code</span>
            <p className="text-white">DataBases</p> <span className="text-[#5862F2]">MongoDB, MySQL</span>
            <p className="text-white">Version Control Systems:  </p> <span className="text-[#5862F2]">Git, GitHub,  GitLab</span>
            <p className="text-white">AI  </p> <span className="text-[#5862F2]">Numpy, Pandas, Matplotlib, Scikit learn, Machine Learning</span>

            
          </div>
      </div>

    <div className="flex-col text-left">
      <p className="text-xl text-red-500">Socials <span className="text-white"> [Share]</span> </p>

    </div>
    </div>
  );
};

export default AboutMe;
