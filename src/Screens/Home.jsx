import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carousel from '../Components/Carousel'
import axios from 'axios'

const Home = () => {
    const [items,setItems]=useState([])
    const apiCall=async()=>{
        try {
            let resp=await axios.get('http://localhost:8000/api/items')
            if(resp.status===200){
                console.log(resp.data.data)
                setItems(resp.data.data)
            }
            
        } catch (error) {
            alert('api failed')
            
        }
        
        

    }
    useEffect(()=>{
        apiCall()
    },[])

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousel/>
            </div>
            {items.length>0?(
                <div className='containe'>
                    {items.map((item,index)=>{
                        return <Card img={item.img} name={item.name} />
                    })}
                </div>
                ):(<p>no item to display...</p>)}
            
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home