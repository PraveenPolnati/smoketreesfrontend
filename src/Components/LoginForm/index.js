import {useState} from 'react'
import './index.css'

function LoginForm() {
    const [userName,setUserName]  = useState('')
    const [address,setAddress] = useState('')
    const [msg,setMsg] = useState('')

    const onSubmit = async (event)=>{
        event.preventDefault();
        console.log(userName,address)
        const url = `https://smoketreesbackend.onrender.com/login`
        const option = {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name:userName,address})
        }
        const response = await fetch(url,option)
        const data = await response.json()
        setMsg(`* ${data.message}`)    
    }

    return(
        <div className='bgContainer'>
            <form className='loginFormCard' onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <br/>
                <input required onChange={event => setUserName(event.target.value)} className='inputField' id='name' placeholder='Enter name' name='name' type='text'/>
                <br/>
                <br/>
                <label htmlFor='address'>Address</label>
                <br/>
                <textarea required onChange={event => setAddress(event.target.value)} className='inputField inputFieldArea' id='address' placeholder='Enter address' rows={5} column={10} name='address'/>
                <div>
                    <button type='submit' className='loginBtn'>Submit</button>
                </div>
                <p className='msgText'>{msg}</p>
            </form>
        </div>
    )
}

export default LoginForm