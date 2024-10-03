import React from 'react'
import './FeaturedProperties.css'
import home1 from '../../assets/home1.webp'
import home2 from '../../assets/home2.webp'
import home3 from '../../assets/home3.webp'
import home4 from '../../assets/home4.webp'

const FeaturedProperties = () => {

  return (
    <div className='fp'>
        <div className="fpItem">
      <img src={home1} alt="" className='fpImg'/>
      <span className="fpName">Aparthotel stare Miasto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src={home2} alt="" className='fpImg'/>
      <span className="fpName">Aparthotel stare Miasto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src={home3} alt="" className='fpImg'/>
      <span className="fpName">Aparthotel stare Miasto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>


      <div className="fpItem">
      <img src={home4} alt="" className='fpImg'/>
      <span className="fpName">Aparthotel stare Miasto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

    </div>
  )
}

export default FeaturedProperties
