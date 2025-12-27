import React from 'react'

const SectionHeading = ({ main_heading, sub_heading, desc, icon }) => {
    return (
        <div className='bg-gray-100 py-10 px-6 border border-amber-400 ml-30'>
            <div className="text-2xl bg-purple-200 text-purple-700">{icon} {main_heading}</div>
            <div className="text-3xl  text-cyan-700">{sub_heading}</div>
            <div className="text-lg  text-slate-600">{desc}</div>


        </div>
    )
}

export default SectionHeading