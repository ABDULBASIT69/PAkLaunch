import React from 'react';
import AchievementsSlider from './AchievementsSlider';
import users from '../images/users.png'
import era from '../images/era.png'
import income from '../images/income.png'
import date from '../images/date.png'
import graph from '../images/graph.png'
import user from '../images/user.png'

export default function AnniversaryAchievements() {
    return (
        <div className='anniversaryachievements pt-48 relative'>
            <div className='pak-container'>
                <div className='flex'>
                    <div className='achievements'>
                        <h1 className='text40 font-weight700 font-inter text-white w-2/3'>Paklaunch 2nd Anniversary Achievements</h1>
                        <div class="pt-20"><button className='rounded-xl px-12 py-5 text18 font-weight600 font-roboto '>View All</button></div>
                    </div>
                    <div className='slider'>
                        {/* <AchievementsSlider /> */}
                    </div>
                </div>
                <div className='pt-32 grid grid-cols-3 gap-x-8 gap-y-24'>
                    <div className='achievement-card text-center flex flex-col justify-center items-center py-10'>
                        <div className='mt85'><img src={users} /></div>
                        <h2 className='text28 font-inter font-weight700 pt-10 text-white'>220 Millions</h2>
                        <p className='text18 font-roboto font-weight300'>5th Largest Population</p>
                    </div>
                    <div className='achievement-card text-center flex flex-col justify-center items-center  py-10'>
                        <div className='mt85'><img src={era} /></div>
                        <h2 className='text28 font-inter font-weight700  pt-10 text-white'>22 Years</h2>
                        <p className='text18 font-roboto font-weight300'>Median Age</p>
                    </div>
                    <div className='achievement-card text-center flex flex-col justify-center items-center  py-10'>
                        <div className='mt85'><img src={income} /></div>
                        <h2 className='text28 font-inter font-weight700  pt-10 text-white'>$350 Millions in 2021</h2>
                        <p className='text18 font-roboto font-weight300'>Startups Raised</p>
                    </div>
                    <div className='achievement-card text-center flex flex-col justify-center items-center py-10'>
                        <div className='mt85'><img src={date} /></div>
                        <h2 className='text28 font-inter font-weight700 pt-10 text-white'>Till Date 2022</h2>
                        <p className='text18 font-roboto font-weight300'>Tech Professtionals</p>
                    </div>
                    <div className='achievement-card text-center flex flex-col justify-center items-center  py-10'>
                        <div className='mt85'><img src={user} /></div>
                        <h2 className='text28 font-inter font-weight700  pt-10 text-white'>360K+</h2>
                        <p className='text18 font-roboto font-weight300'>Tech Professtionals</p>
                    </div>
                    <div className='achievement-card text-center flex flex-col justify-center items-center  py-10'>
                        <div className='mt85'><img src={graph} /></div>
                        <h2 className='text28 font-inter font-weight700  pt-10 text-white'>7TH</h2>
                        <p className='text18 font-roboto font-weight300'>Largest Consumption Class by 2030</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
