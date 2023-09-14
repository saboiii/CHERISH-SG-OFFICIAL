import React from 'react'
import Carousel from '@/components/carousel/Carousel'

const GalleryLayout = ({children}) => {
  return (
    <div>
      {children}
      <div><Carousel/></div>

      
    </div>
  )
}

export default GalleryLayout