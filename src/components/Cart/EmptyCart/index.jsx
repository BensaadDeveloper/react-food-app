import React from 'react'
import './style.css'
import {FaCaretLeft} from 'react-icons/fa'
import emptyCart from './emptycart.png'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
    const navigate = useNavigate()
  return (
    <div className='emptyCart'>
        <img src={emptyCart} alt="empty cart" />
        <button onClick={() => navigate('/')}>
            <FaCaretLeft className="fas"/> Shop Now
        </button>
    </div>
  )
}

export default EmptyCart