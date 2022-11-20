import React, { forwardRef } from 'react'
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import './style.css'
import {MdError} from 'react-icons/md'

const Menu = forwardRef(({list}, ref) => {
  const {isLoading, error} = useSelector(state => state.mealSlice )
  return (
    <>
      { error ? (
        <div className='error'>
          <MdError className='icon-error'/>
          <h3>NETWORK CONNECTION ERROR</h3>
          <p>There is No Meal Availaible</p>
        </div>
       ) : 
       (
        
        isLoading  ? ('Loading ...') :  
        <main ref={ref}>     
            {list.length > 0 && list.map((item) =>  (<MenuItem key={item.id}  item = {item} />))}  
        </main>
       )      
        }
    </>

    
  )
})

export default Menu