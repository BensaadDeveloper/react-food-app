import React from 'react'
import './style.css'
import logoPng from './LogoOrange.png'

const Logo = () => {
  return (
    <div className='logo'>
        <div>
            <img src={logoPng} alt="Logo Restaurant" />
            <span><b>Taste</b></span>
        </div>
        <p><b>Restaurant & BBQ</b></p>
    </div>
  )
}

export default Logo