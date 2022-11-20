import React from 'react'
import './style.css'
import bannerImg from './banner.png'
import Logo from '../../common/Logo'
import {FaCaretRight} from 'react-icons/fa'

const Banner = ({handleScrollMenu}) => {
  return (
    <header>
        <div className="header-content">
            <Logo/>
            <div className="content-main">
                <h1>Delicious food for your Cravings</h1>
                <p>We made fresh and healthy meals with different recipes</p>
                <button onClick={handleScrollMenu}>View Menu <FaCaretRight className="fas"/></button>
            </div>
        </div>
        <img src={bannerImg} alt="banner food" className="header-img" />
    </header>
  )
}

export default Banner