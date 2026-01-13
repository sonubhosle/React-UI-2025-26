import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
              if(email === 'text@gmail.com' && password === '1234'){
            alert('Login Successfully')
            navigate('/contact')
        }else{
            alert('Login Faild')
              navigate('/')
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <input className='bg-slate-200 ' type="email" name="email" id="" value={email}
            onChange={(e) => setEmail(e.target.value)} />
             <input className='bg-slate-200 ' type="password" name="password" id="" value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login