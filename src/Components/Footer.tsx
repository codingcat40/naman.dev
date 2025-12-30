import { MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <div className="flex max-w-full mx-2 text-lg  justify-between text-white">
        <p className="flex gap-1"> <MapPin/> <span>Bangalore</span></p>
        <p><span>@</span>naman.dev</p>
      </div>
  )
}

export default Footer