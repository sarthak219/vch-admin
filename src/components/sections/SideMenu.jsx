import React, { useEffect } from 'react'
import ListItem from '../elements/ListItem'
import "../../assets/css/sections/SideMenuStyle.css"

function SideMenu({patients}) {
    useEffect(() =>{
        console.log(patients);
    },[])
  return (
    <div className='menu-container'>
        <h1>Queue</h1>    
        <div className="queue-container">
            {patients.map((patient, index)=>{
                return(
                    <div key={index} className="item-container my-2">
                        <ListItem title1={patient.firstName} title2={patient.lastName} selected={(index===0)} position={index+1}/>
                    </div>
                    )
            })}
        </div>
    </div>
  )
}

export default SideMenu