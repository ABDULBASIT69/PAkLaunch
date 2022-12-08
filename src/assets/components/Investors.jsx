import React from 'react'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'

export default function Investors() {
    return (
        <div className='pt-48'>
            <div className='pak-container'>
                <h1 className='font-roboto text40 font-weight700 text-white text-center'>Investors</h1>
                <p className='text16 font-roboto font-weight600 text-white text-center'>See All {' >>'}</p>
                <div className='pt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                    <div className='faisalaftab investor relative'>
                        <div className='card-content absolute bottom-6 left-6'>
                            <h1 className='text24 font-inter font-weight700 text-white'>Atif Awan</h1>
                            <p className='text16 font-roboto font-weight600 text-white'>Indus Valley Capital</p>
                            <div className='flex pt-2'><img src={twitter} className="pr-2"/><img src={linkedin} /></div>
                        </div>
                    </div>
                    <div className='faisalaftab investor relative'>
                        <div className='card-content absolute bottom-6 left-6'>
                            <h1 className='text24 font-inter font-weight700 text-white'>Faisal Aftab</h1>
                            <p className='text16 font-roboto font-weight600 text-white'>Zayn Capital</p>
                            <div className='flex pt-2'><img src={twitter} className="pr-2"/><img src={linkedin} /></div>
                        </div>
                    </div>
                    <div className='babar investor relative'>
                        <div className='card-content absolute bottom-6 left-6'>
                            <h1 className='text24 font-inter font-weight700 text-white'>Baber Lakhani</h1>
                            <p className='text16 font-roboto font-weight600 text-white'>Lakson Venture Capital</p>
                            <div className='flex pt-2'><img src={twitter} className="pr-2"/><img src={linkedin} /></div>
                        </div>
                    </div>
                    <div className='rabeel investor relative'>
                        <div className='card-content absolute bottom-6 left-6'>
                            <h1 className='text24 font-inter font-weight700 text-white'>Rabeel Warraich</h1>
                            <p className='text16 font-roboto font-weight600 text-white'>Sarmayacar</p>
                            <div className='flex pt-2'><img src={twitter} className="pr-2"/><img src={linkedin} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
