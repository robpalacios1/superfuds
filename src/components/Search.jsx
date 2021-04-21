import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <div className="search__button">
          <input
            className="search__input js-search"
            type="text"
            placeholder="Busca marcas y productos..."
          />
          <div className="search__icon"></div>
          <span className="search__results js-search-counter">
            <a href="">
              <FontAwesomeIcon
              icon={faSearch}
              size = '2x'
              />
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Search
