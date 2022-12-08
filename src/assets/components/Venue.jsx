import React from 'react'
import venueone from '../images/venueone.jpg'
import venuetwo from '../images/venuetwo.jpg'
import venuethree from '../images/venuethree.jpg'
import venuefour from '../images/venuefour.jpg'

export default function Venue() {
    return (
        <div className='md:pt-48 pt-10'>
            <div className='pak-container'>
                <div class="parent">
                    <div class="div1 grayscale hover:grayscale-0"><img src={venueone} /> </div>
                    <div class="div2 grayscale hover:grayscale-0"><img src={venuethree} /> </div>
                    <div class="div3 grayscale hover:grayscale-0"><img src={venuetwo} /> </div>
                    <div class="div4 grayscale hover:grayscale-0"><img src={venuefour} /> </div>
                    <div class="div5 order-1 md:order-5 text40 font-weight700 font-inter text-white flex flex-col justify-center items-center"><span>Event</span><span>Venue</span></div>
                </div>
            </div>
        </div>
    )
}
