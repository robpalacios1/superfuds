import React from 'react'
import product from '../assets/product.png'
import group from '../assets/group.png'

const Card = () => {
  return (
    <section className="card">
      <div className="container">
        <div className="card__image">
          <div className="card__image-general">
            <img className="card__image-product" src={product} alt="products"/>
            <div className="card__reference">
              <div className="card__sellos-1">
                <img src={group} alt="vegano"/>
              </div>
              <div className="card__sellos-2">
                <img src={group} alt="vegano"/>
              </div>
              <div className="card__sellos-3">
                <img src={group} alt="vegano"/>
              </div>
            </div>
          </div>

          <div className="card__hr">
            <hr/>
          </div>

          <div className="card__info">
            <div className="card__top">
              <div className="card__title">
                <h5>Superfuds</h5>
              </div>

              <div className="card__weight">
                <span className="card__weight-content">120 gr</span>
              </div>
            </div>

            <div className="card__description">
              <h4>Super Kale chips aji...</h4>
            </div>

            <div className="card__bottom">
              <div className="card__price">
                <h3 className="card__price-real"><span className="card__price-dollar">$</span>46.000 <span className="card__price-unit">x 1 unids</span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
