import React from 'react'
import './scrollup.css'

const ScrollUp = () => {
    window.addEventListener("scroll",function(){
        const scrollup=document.querySelector(".scrollup");
        //when the scroll is higher than 960 viewport height ,
        //add the show-scroll class ta atag with the scroll-tag.
        if (this.scrolly >=560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll")
    })
  return (
    <a href='#' className='scrollup'>
        <i className="uil uil-arrow-up scrollup_icone"></i>
    </a>
  )
}

export default ScrollUp