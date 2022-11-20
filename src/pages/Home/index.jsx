import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCountButton from '../../components/common/CartCountButton'
import Footer from '../../components/common/Footer'
import Menu from '../../components/common/Menu'
import Banner from '../../components/Home/Banner'
import { getMeals } from '../../store/mealSlice'

const Home = () => {

  const {meals} = useSelector(state => state.mealSlice )
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  const menuRef = useRef()

  const handleScrollMenu = () => menuRef.current.scrollIntoView({behavior:'smooth'})

  return (
    <div>
        {/* Banner */}
        <Banner handleScrollMenu={handleScrollMenu} />
        {/* Menu */}
        <Menu list={meals} ref={menuRef} />
        {/* Footer */}
        <Footer/>
        {/* Cart Count Button */}
        <CartCountButton />
    </div>
  )
}

export default Home