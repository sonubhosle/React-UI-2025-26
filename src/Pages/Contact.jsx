import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    })
    const handleChnage = (e) => {
        setData({
            ...data, [e.target.value]: e.target.name
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 max-w-2xs bg-amber-200 ml-20 p-5'>
            <input className='bg-gray-100 border border-purple-500' type="text" name='name' onChange={handleChnage} />
            <input className='bg-gray-100 border border-purple-500' type="email" name='email' onChange={handleChnage} />
            <input className='bg-gray-100 border border-purple-500' type="text" name='mobile' onChange={handleChnage} />
            <input className='bg-gray-100 border border-purple-500' type="text" name='message' onChange={handleChnage} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Contact