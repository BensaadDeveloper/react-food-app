import React from 'react'
import './style.css'
import {FaShoppingCart} from 'react-icons/fa'
import {useNavigate} from 'react-router'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../../store/cart/cart.selector'
import { connect } from 'react-redux'
const CartCountButton = ({cartCount}) => {
  const navigate = useNavigate()
  return (
    <div className='btnCartCount' onClick={() => navigate('/cart')}>
        <div className="count">{cartCount >= 100 ? '99+' : cartCount}</div>
        <FaShoppingCart className='chartIcon' />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});


export default connect(mapStateToProps) (CartCountButton)