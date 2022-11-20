import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../../../../store/cart/cartSlice';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../store/cart/cart.selector';

import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './style.css'

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, img, name, price} = item;
    const handleQuantity = () => {
      let quantity = 0;
      if (cartCount !== 0) {
        const foundItemInCart = cartList.find((item) => item.id === id);
        if (foundItemInCart) {
          quantity = foundItemInCart.quantity;
        }
      }
      return quantity;
    };
  return (
    <div className='item'>
        <img src={img} alt="Food" />
        <div className="item-head-desc">
            <p className='head-desc-name'>{name}</p>
            <p className='head-desc-info'><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, veritatis obcaecati.</small></p>
        </div>
        <div className="item-foot-desc">
            <span className='foot-desc-price'>${price}</span>
            <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
        </div>
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});


const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(CART_ADD_ITEM(item)),
  cartRemoveItem: (item) => dispatch(CART_REMOVE_ITEM(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);