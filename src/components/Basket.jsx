import React from 'react'
import product from '../assets/product.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Basket = () => {
  return (
    <section className="basket">
      <div className="container">
        <div className="basket__title">
          <h2 className="basket__title-shopping">Carrito de compras</h2>
        </div>

        <div className="basket__container">
          <div className="basket__item">
            <span className="basket__item-product">item</span>
              <div className="basket__product">
                <img className="basket__product-item" src={product} alt="product"/>
                <div className="basket__product-name">
                  <h4 className="basket__product-unit">Super Kale Chips</h4>
                  <div className="basket__product-cantidad">
                    <span>x 6 unid - 250 gr c/u</span>
                  </div>
                  <div className="basket__product-category">
                    <h4 className="basket__product-mark">Superfuds</h4>
                  </div>
                </div>
              </div>

              <div className="basket__product">
                <img className="basket__product-item" src={product} alt="product"/>
              </div>

              <div className="basket__product">
                <img className="basket__product-item" src={product} alt="product"/>
              </div>
          </div>

          <div className="basket__cantidad">
            <span className="basket__cantidad-item">Cantidad</span>
            <div className="basket__circles">
              <div className="basket__circle-minus">
                <button className="basket__number-negative">-</button>
              </div>
              <div className="basket__number">
                <span>1</span>
              </div>
              <div className="basket__circle-plus">
                <button className="basket__number-positive">+</button>
              </div>
            </div>
          </div>

          <div className="basket__price">
            <span>Precio</span>
            <div className="basket__price-unit">
              <span className="basket__price-dollar">$</span><span className="basket__price-item">34.000</span>
            </div>
          </div>

          <div className="basket__delete">
            <FontAwesomeIcon
              className="basket__delete-trash"
              icon={faTrashAlt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Basket
