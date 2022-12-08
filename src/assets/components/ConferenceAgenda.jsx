import React from 'react'

export default function ConferenceAgenda() {
    return (
        <div className='conference-agenda mt-24  text-center relative'>
            <div className='pak-container'>
                <h2 className='text40 font-weight700 font-inter text-white'>Conference Agenda</h2>
                <div className='grid grid-cols-3 agenda-table rounded-2xl py-12 mt-12'>
                    <div>
                        <h3 className='text28 font-inter font-weight700'>January 25</h3>
                        <p className='text20 font-roboto font-weight600 pt-10'>6:00 PM - 10:00 PM</p>
                        <p className='text18 font-weight300 font-roboto pt-5'>Dinner</p>
                    </div>
                    <div  className='border-r-4 border-l-4 border-black'>
                        <h3 className='text28 font-inter font-weight700'>January 26</h3>
                        <p className='text20 font-roboto font-weight600 pt-10'>9:00 AM - 4:00 PM</p>
                        <p className='text18 font-weight300 font-roboto pt-5'>Roundtables/Networking</p>
                        <p className='text20 font-roboto font-weight600 pt-7'>4:00 PM - 7:00 PM</p>
                        <p className='text18 font-weight300 font-roboto pt-5'>Cocktails</p>
                    </div>
                    <div>
                        <h3 className='text28 font-inter font-weight700'>Hotel Location</h3>
                        <p className='text20 font-roboto font-weight600 pt-10'>DIFC Capital Club</p>
                        <p className='text20 font-roboto font-weight600'>Dubai, United Arab</p>
                        <p className='text20 font-roboto font-weight600'>Emirates.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
