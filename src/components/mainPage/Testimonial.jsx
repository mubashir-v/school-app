import React from 'react'
import Testimonial from './Testimonials'

function Testimonials() {
  return (
    <div className='flex flex-row gap-1 p-2 overflow-scroll h-full w-full items-center justify-center'>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
    </div>
  )
}

export default Testimonials