import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [location,setLocation]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault()
            try {
                const resp=await axios.post('http://localhost:8000/api/user/create',{
                name:name,
                email:email,
                password:password,
                location:location
                })
                console.log(`resp is ---------------->${resp}`)
                console.log(`code is ${resp.status}`)
                if(resp.status!==200){
                    alert("Enter valid credentialss")
        
                }
                else{
                    alert("success")
        
                    
                }
       
            
            } catch (error) {
                alert("invalid credentials")
            
            }
        
        
       

    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" value={location} onChange={(e)=>setLocation(e.target.value)}  />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Login</Link>
                </form>
            </div>

        </>
    )
}

export default SignUp