import React from 'react'
import "./work.css"
import Works from './Works'

const Work = () => {
  return (
    <section className='work ection' id='protfolio'>
        <h2 className='section_title'>Portfolio</h2>
        <span className='section_subtitle'>Most recent works</span>
        <Works/>
    </section>
  )
}

export default Work