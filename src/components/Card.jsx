import React, {useEffect, useState} from 'react'

const Card = () => {

  const [item, setItem] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, [])

  const obtenerDatos = async() => {
    const data = await fetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json');
    const users = await data.json();
    console.log(users);
    setItem(users);
  }

  return (
    <section className="card">
      <div className="container">
        <div className="card__container">
          <div>
          {
            item.map(card => (
            <div className="card__image">
              <div className="card__image-general">
                <img className="card__image-product" src={card.image} alt="products"/>
                  <div className="card__reference">
                    <div className="card__sellos-1">
                      <img src={card.sellos[0].image} alt="vegano"/>
                    </div>
                    <div className="card__sellos-2">
                      <img src={card.sellos[0].image} alt="vegano"/>
                    </div>
                    <div className="card__sellos-3">
                      <img src={card.sellos[0].image} alt="vegano"/>
                    </div>
                  </div>
                </div>

                <div className="card__hr">
                  <hr/>
                </div>

                <div className="card__info">
                  <div className="card__top">
                    <div className="card__title">
                      <h5>{card.category}</h5>
                    </div>

                    <div className="card__weight">
                      <span className="card__weight-content">{card.net_content}</span>
                    </div>
                  </div>

                  <div className="card__description">
                    <h4>{card.title}</h4>
                  </div>

                  <div className="card__bottom">
                    <div className="card__price">
                      <h3 className="card__price-real"><span className="card__price-dollar">$</span>{card.price_real} <span className="card__price-unit">x 1 unids</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
  )
}
export default Card
