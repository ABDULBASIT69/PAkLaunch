import React from 'react'
import imgone from '../images/wherewego1.png'
import imgtwo from '../images/wherewego2.png'
import imgthree from '../images/wherewego3.png'

export default function wherewego() {
    return (
        <div className='pt-48'>
            <div className='pak-container'>
                <h1 className='text40 font-weight700 font-inter text-white text-center'>Where we go</h1>
                <div className='pt-12 flex flex-col md:flex-row relative'>
                    <div><img src={imgone} /></div>
                    <div className='md:absolute md:right-28 md:-bottom-24'>
                        <div className='card1 p-10'>
                            <h2 className='font-weight700 font-inter text24 text-white'>Why Pakistani Startups are the next Big...</h2>
                            <p className='font-roboto text16 font-weight300 text-white pt-5'>Highest density of Pakistan tech startup talent in one room so expect high quality engagements !!</p>
                            <p className='text-white font-roboto font-weight300 text16 flex justify-between pt-10'><span>March 29, 2021</span><span>4:00PM - 9:00PM</span></p>
                        </div>
                    </div>
                </div>
                <div className='pt-48 flex flex-col md:flex-row justify-end relative'>
                    <div className='order-2 md:order-1 md:absolute md:left-28 md:-bottom-24'>
                        <div className='card1 p-10 '>
                            <h2 className='font-weight700 font-inter text24 text-white'>Paklaunch UnConference (Partners)</h2>
                            <p className='font-roboto text16 font-weight300 text-white pt-5'>Highest density of Pakistan tech startup talent in one room so expect high quality engagements !!</p>
                            <p className='text-white font-roboto font-weight300 text16 flex justify-between pt-10'><span>March 29, 2021</span><span>4:00PM - 9:00PM</span></p>
                        </div>
                    </div>
                    <div className='order-1 md:order-2'><img src={imgtwo} /></div>
                </div>
                <div className='pt-48 flex flex-col md:flex-row relative'>
                    <div><img src={imgthree} /></div>
                    <div className='md:absolute md:right-28 md:-bottom-24'>
                        <div className='card1 p-10'>
                            <h2 className='font-weight700 font-inter text24 text-white'>Why Pakistani Startups are the next Big...</h2>
                            <p className='font-roboto text16 font-weight300 text-white pt-5'>Highest density of Pakistan tech startup talent in one room so expect high quality engagements !!</p>
                            <p className='text-white font-roboto font-weight300 text16 flex justify-between pt-10'><span>March 29, 2021</span><span>4:00PM - 9:00PM</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
