export const projects = [
  {
    id: 1,
    title: "Forever - Full Stack Ecommerce Clothing store",
    description:
      "Developed a full-stack clothing store with React, Node.js, Express, and MongoDB featuring complete user/admin flows, search, filtering, cart, checkout, and order management. Added secure auth, Cloudinary uploads, Stripe payments, and an admin dashboard with product/order CRUD and live status updates.",
    stack: ["ReactJS", "Tailwind CSS", "Node", "Express", "JWT", "Stripe API"],
    url: "https://e-commerce-clothingstore-eh52.vercel.app/",
  },
  {
    id: 2,
    title: "Memora AI",
    description:
      "Built Memora AI, a memory-augmented LLM platform using PineCone vector database and semantic retrieval to persist user context across conversations. Implemented structured fact extraction, long-term memory storage, and RAG embedding with personalization. Designed a model-agnostic architecture supporting GPT4, Gemini, DeepSeek, and LLaMA via OpenRouter.",

    stack: [
      "React",
      "Pinecone Vector DB",
      "Express JS",
      "RAG",
      "Context Memory",
      "JWT Authentication",
    ],
    url: "https://memora-ai-9jvr.vercel.app/",
  },

  {
    id: 3,
    title: "GameNews",
    description:
      "Worked on the GameNews app which renders the latest Games trending in the world. Added the visually appealing styles using three.js library. Implemented Loading, Pagination, Debouncing for Search function and individual game route using the REST API",
    stack: ["React", "three.js", "Node", "Express", "Discord API"],
    url: "https://github.com/codingcat40/GameNews",
  },

  {
    id: 4,
    title: "SwoleNORMOUS fitness app",
    description:
      "Developed a fitness app that generates personalized routines—muscle-focused, bro splits, upper/lower splits, and strength/cardio/muscle-gain programs. Includes detailed exercise guidance with reps, rest times, and a clean, mobile-responsive UI.",
    stack: ["React", "Tailwind CSS"],
    url: "https://swolenormous-app.netlify.app/",
  },

  {
    id: 5,
    title: "MyBlog",
    description: `A simple Blog Application built with the MERN stack (MongoDB, Express, React, Node.js).
Users can register, log in, create posts, edit posts, and delete posts. Posts are displayed with pagination on the home page.
`,
    stack: ["ReactJS", "Node JS", "MongoDB", "JWT", "Express"],
    url: "https://personal-blog2025.netlify.app/",
  },

  {
    id: 6,
    title: "SnapRecipe AI",
    description: `This is an AI powered Recipe scanner which generates the step by step cooking procedure, list of ingredients once a food picture is uploaded. The images can be in the format of jpg, png and webp`,
    stack: ["NextJS", "TailwindCSS", "Typescript"],
    url: "https://snaprecipe-snowy.vercel.app/",
  },
];
