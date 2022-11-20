import React from 'react'
import { createStructuredSelector } from 'reselect'
import EmptyCart from '../../components/Cart/EmptyCart'
import Footer from '../../components/common/Footer'
import Logo from '../../components/common/Logo'
import Menu from '../../components/common/Menu'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../store/cart/cart.selector'
import {connect} from 'react-redux'
import './style.css'

const Cart = ({ cartCount, cartList, cartTotal }) => {
  console.log(cartList, cartCount)
  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total : $ {cartTotal.toLocaleString(undefined, {maximumFractionDigits:2})}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);