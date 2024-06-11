import React from 'react'

const SpinnerAnim = () => {
    return (
        <div className="animate-spin">
            <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 blur-sm animate-ping"></div>
            <div className="absolute top-28 left-64 w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 blur-sm animate-ping"></div>
            <div className="absolute top-56 left-24 w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 blur-sm animate-ping"></div>
        </div>
    )
}

export default SpinnerAnim