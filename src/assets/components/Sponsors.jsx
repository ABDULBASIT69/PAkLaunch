import React from 'react'
import zayn from '../images/zayn.png'
import indusvalley from '../images/indus-valley.png'
import zingnaly from '../images/zingnaly.png'
import aws from '../images/aws.png'
import seven from '../images/seven.png'
import onebyte from '../images/onebyte.png'
import js from '../images/js.png'
import amazon from '../images/amazon.png'
import bagallery from '../images/bagallery.png'
import mediq from '../images/mediq.png'

export default function Sponsors() {
    return (
        <div className='pt-48'>
            <div className='pak-container'>
                <h2 className='sponsor text-white font-weight700 text40 font-inter'>Our Sponsors</h2>
                <div className='pt-14 grid grid-cols-3'>
                    <div className='tag font-weight300 font-roboto text24'>Premium Platinum</div>
                        <div className='grid grid-cols-4 col-span-2 gap-2'>
                            <div className='sponsor-brands border flex justify-center items-center py-3 px-8'><img src={zayn} /></div>
                            <div className='sponsor-brands border flex justify-center items-center py-3 px-8'><img src={indusvalley} /></div>
                        </div>
                </div>
                <div className='pt-14 grid grid-cols-3'>
                    <div className='tag font-weight300 font-roboto text24'>Platinum</div>
                    <div className='grid grid-cols-4 gap-2 col-span-2'>
                        <div className='sponsor-brands border flex justify-center items-center py-3 px-8'><img src={zingnaly} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={aws} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={seven} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={onebyte} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={js} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={amazon} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={seven} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={onebyte} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={js} /></div>
                    </div>
                </div>
                <div className='pt-14 grid grid-cols-3'>
                    <div className='tag font-weight300 font-roboto text24'>Gold</div>
                    <div className='grid grid-cols-4 gap-2 col-span-2'>
                        <div className='sponsor-brands border flex justify-center items-center py-3 px-8'><img src={bagallery} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={zayn} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={seven} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={onebyte} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={mediq} /></div>
                    </div>
                </div>
                <div className='pt-14 grid grid-cols-3'>
                    <div className='tag font-weight300 font-roboto text24'>Silver</div>
                    <div className='grid grid-cols-4 gap-2 col-span-2'>
                        <div className='sponsor-brands border flex justify-center items-center py-3 px-8'><img src={zingnaly} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={amazon} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={seven} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={onebyte} /></div>
                        <div className='sponsor-brands  border flex justify-center items-center py-3 px-8'><img src={js} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
