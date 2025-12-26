import { MapPin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex text-lg justify-between mx-14 text-white">
        <p className="flex gap-2"> <MapPin/> <span>Bangalore</span></p>
        <p><span>@</span>naman.dev</p>
      </div>
  )
}

export default Footer