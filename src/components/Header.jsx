import React from 'react'

/***** Components *****/
import Search from './Search'

/***** Logo *****/
import logo from '../assets/superfuds.png'

/***** Font awesome icons*****/
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faChevronDown} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flexbox">
          <div className="burger">
            <div className="burger__button "></div>
            <div className="burger__close ">
              <img src="./assets/burger-close.svg" alt="Icon burger close" />
            </div>
          </div>
          <nav className="menu">
            <Search />
          </nav>
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="access">
            <a href="#" 
              className="access__icon">
              <FontAwesomeIcon
              icon={faShoppingCart}
              size = '2x'
              />
            </a>
            <div className="access__name">
              <h3>Sayby Alimentos</h3>
              <span className="access__span">Mi perfil</span>
              <FontAwesomeIcon
                className="access__icon-down"
                icon={faChevronDown}
              />
            </div>
            <div className="access__avatar">
              <Avatar
                name="Wim Mostmans"
                size="150"
                textSizeRatio={1.75}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
