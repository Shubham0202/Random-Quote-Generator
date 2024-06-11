import React from 'react'
import StarsSvg from '../../assets/mainIcons/stars.svg' 
const Hero = () => {
    return (
        <>
            <h2 className=" font-bold text-4xl sm:text-6xl">Random Quotes</h2>
            <h2 className="font-bold text-5xl sm:text-6xl bg-gradient-to-tr from-pink-500 via-yellow-500 to-violet-600 bg-clip-text text-transparent">Generator</h2>
            <button className='mt-4  w-full sm:w-fit bg-buttonBgHover font-bold text-black hover:bg-green-400 transition rounded-full px-4 py-2'>
                <span>Generate</span>
                <img src={StarsSvg} className='inline ml-2 w-6 h-6 animate-pulse' alt="" />
            </button>
        </>
    )
}

export default Hero