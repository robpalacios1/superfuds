import React from 'react'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faChevronDown} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="header js-header js-sticky">
      <div className="container">
        <div className="flexbox">
          <div className="burger">
            <div className="burger__button js-burger-button"></div>
            <div className="burger__close js-burger-close">
              <img src="./assets/burger-close.svg" alt="Icon burger close" />
            </div>
          </div>
          <nav className="menu">
            <Search />
          </nav>
          <div className="logo">
            <h1 className="logo__desktop">Superfuds</h1>
          </div>
          <div className="access">
            <a href="#" className="access__icon">
              <FontAwesomeIcon
              icon={faShoppingCart}
              size = '2x'
              />
            </a>
            <div className="access__name">
              <h3>Sayby Alimentos</h3>
              <span className="access__span">Mi perfil</span>
              <FontAwesomeIcon
                className="access__icon"
                icon={faChevronDown}
              />
            </div>
          </div>
          <div className="mobile-search">
            <img className="mobile-search__img" src="./assets/icon-search.svg" alt="Icon Search" />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
