import React from 'react'
import './propertyList.css'
import Hotels from '../../assets/hotel.jpg'
import Apartment from '../../assets/Apartment.jpg'
import Resorts from '../../assets/Resort.jpg'
import Villas from '../../assets/Villas.jpg'
import Cabin from '../../assets/Cabbins.jpg'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
       <img src={Hotels} className="pListItem"/>
       <div className="pListTitles">
        <h1>Hotel</h1>
        <h2>233 hotels</h2>
       </div>
       </div>

       <div className="pListItem">
       <img src={Apartment} className="pListItem" />
       <div className="pListTitles">
        <h1>Apartment</h1>
        <h2>2331 hotels</h2>
       </div>
       </div>
        

        <div className="pListItem">
       <img src={Resorts} className="pListItem"/>
       <div className="pListTitles">
        <h1>Resorts</h1>
        <h2>2331 hotels</h2>
       </div>
       </div>


       <div className="pListItem">
       <img src={Villas} className="pListItem"/>
       <div className="pListTitles">
        <h1>villas</h1>
        <h2>233 hotels</h2>
       </div>
       </div>


       <div className="pListItem">
       <img src={Cabin} className="pListItem" />
       <div className="pListTitles">
        <h1>Cabbins</h1>
        <h2>233 hotels</h2>
       </div>
       </div>

        
      
    </div>
  )
}

export default PropertyList
