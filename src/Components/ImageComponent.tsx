
const ImageComponent = () => {
  const imageURL = 'src/data/pp.jpg'
  return (
    <>
    <img
    src={imageURL}
    width={400}
    className="rounded-md cursor-pointer hover:opacity-[0.5] duration-150"
    
    />
   <div className="absolute top-2.5 left-2.5 text-white font-mono font-bold text-xl">
      Me taking random selfie 😊
    </div> 
</>
  )
}

export default ImageComponent;