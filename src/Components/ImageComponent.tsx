
const ImageComponent = () => {
  const imageURL = '/pp.jpg'
  return (
    <div className="relative inline-block">
    <img
    src={imageURL}
    width={400}
    className="rounded-lg cursor-pointer hover:opacity-[0.5] duration-150"
    
    />
   <div className="absolute top-2.5 left-2.5 text-white font-mono font-bold text-xl">
      A random selfie 😊
    </div> 
</div>
  )
}

export default ImageComponent;