import React from 'react'
import "./Trip.css"
import PackageCard from '../../components/card/PackageCard'


const Trip = () => {

  return (
    <div className='trips-section'>
        <h3>Available Trips For You</h3>
        <PackageCard />
    </div>
  )
}

export default Trip