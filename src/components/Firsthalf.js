import React from 'react'
import '../components/firsthalf.css'

function Firsthalf({getusers}) {
    return (
        <div className="bg" id="bg">
        <div className="navbar">
            <div className="logo"><span>G</span>row More</div>
            <div className="ul">
                <li><a href="#bg">Home</a></li>
                <li><a href="#parent" onClick={()=>getusers()}>Get Users</a></li>
            </div>
        </div> 
        <div className="name">
            <div className="sub-heading">Fill Your Future</div>
            <div className="heading">Make it Now</div>
            <span className="subheading-2">----2021----</span>
        </div>
    </div>
    )
}

export default Firsthalf
