import React from 'react'
import headerlogo from '../images/headerlogo.png'
import instagram from '../images/instagram.png'
import dribbble from '../images/dribbble.png'
import twitter from '../images/twitter-footer.png'
import youtube from '../images/youtube.png'

export default function ContactUs() {
    return (
        <div className='pt-48'>
            <div className='header-container'>
                <div className='contactus grid lg:grid-cols-2 grid-cols-1'>
                    <div>
                        <div><img src={headerlogo} /></div>
                        <div className='text16 font-weight300 font-roboto text-white pt-7 lg:w-2/3 w-full'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our to get your ownsoftware. Today it's seen all around the web; on templates, websites, and stock designs. Use our to get your ownsoftware. Today it's seen all around the web; on templates, websites, and stock designs. Use our to get your ownsoftware. Today it's seen all around the web; on templates, websites, and stock designs. Use our to get your own</div>
                        <div className='flex pt-10'>
                            <div className='pr-5'><img src={instagram} /></div>
                            <div className='pr-5'><img src={dribbble} /></div>
                            <div className='pr-5'><img src={twitter} /></div>
                            <div className='pr-5'><img src={youtube} /></div>
                        </div>
                    </div>
                    <div className='lg:pt-0 pt-10'>
                        <h1 className='text40 font-weight600 font-inter'>Get In Touch</h1>
                        <p className='text16 font-weight300 font-roboto pt-5 text-white'>We are here for you. How we can help?</p>
                        <form className='pt-8'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                                <div className='bg-white px-5 py-4 rounded-md input'><input type='text' placeholder="Name"/></div>
                                <div className='bg-white px-5 py-4 rounded-md input'><input type='email' placeholder="Email"/></div>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 pt-5'>
                                <div className='bg-white px-5 py-4 rounded-md input'><input type='text' placeholder="Company"/></div>
                                <div className='bg-white px-5 py-4 rounded-md input'><input type='email' placeholder="Title"/></div>
                            </div>
                            <div className='bg-white px-5 py-4 rounded-md mt-5 input'><input type='text' placeholder="Location"/></div>
                            <div className='bg-white px-5 py-4 rounded-md mt-5 input'><textarea type='text' placeholder="Message" rows='3'></textarea></div>
                            <div className='mt-8 flex text-white'><input type='checkbox'/><span className='pl-5 text16 font-weight300 font-roboto'>I have read and agree to the <a href='' className='terms'>Term & Condition</a> and <a href='' className='terms'>Privacy Policy</a></span></div>
                            <button type='submit' class="bg-white rounded-xl px-8 py-3 text16 font-roboto font-weight600 mt-10 hover:bg-white">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
