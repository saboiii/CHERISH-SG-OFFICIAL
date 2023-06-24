import React from 'react'
import Carousel from '@/components/carousel/Carousel'

const GalleryLayout = ({children}) => {
  return (
    <div>
      <div><Carousel/></div>

      {children}
    </div>
  )
}

export default GalleryLayout