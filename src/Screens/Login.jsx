import React,{useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
            try {
                const resp=await axios.post('http://localhost:8000/api/user/login',{
                  email:email,
                  password:password
                })
                console.log(`resp is ---------------->${resp}`)
                console.log(`code is ${resp.status}`)
                if(resp.status!==200){
                    alert("Enter valid credentialss")

        
                }
                else{
                    // alert("success")
                    console.log(resp)
                    localStorage.setItem('token',resp.data.data.token)
                    navigate('/')
        
                    
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
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/createuser" className='m-3 btn btn-danger'>New User</Link>
                </form>
            </div>

        </>
    )
}

export default Login