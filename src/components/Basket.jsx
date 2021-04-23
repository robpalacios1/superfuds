import React, {useState, useEffect} from 'react'

/***** Font awesome icons*****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Basket = () => {

  /***** UseStates *****/
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData();
  }, [])

  /***** UseEffect*****/
  const getData = async() => {
    const data = await fetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json');
    const users = await data.json();
    console.log(users);
    setItem(users);
  }

  return (
    <section className="basket">
      <div className="container">
        <div className="basket__title">
          <h2 className="basket__title-shopping">Carrito de compras</h2>
        </div>
        <div>
          <div>
            {
              item.map(card => (
                <div className="basket__container">
                  <div className="basket__item">
                    <span className="basket__item-product">item</span>
                    <div className="basket__product">
                      <img className="basket__product-item" src={card.image} alt="product"/>
                      <div className="basket__product-name">
                        <h4 className="basket__product-unit">{card.category}</h4>
                        <div className="basket__product-cantidad">
                          <span>x 6 unid - {card.net_content} c/u</span>
                        </div>
                        <div className="basket__product-category">
                          <h4 className="basket__product-mark">{card.supplier}</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="basket__cantidad">
                    <span className="basket__cantidad-item">Cantidad</span>
                    <div className="basket__circles">
                      <div className="basket__circle-minus">
                        <button
                          className="basket__number-negative"
                          onClick={() => setCount(count - 1)}
                        >-
                        </button>
                      </div>
                      <div className="basket__number">
                        <span>{count}</span>
                      </div>
                      <div className="basket__circle-plus">
                        <button
                          className="basket__number-positive"
                          onClick={() => setCount(count + 1)}
                        >+
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="basket__price">
                    <span>Precio</span>
                    <div className="basket__price-unit">
                      <span
                        className="basket__price-dollar"
                      >$
                      </span>
                      <span className="basket__price-item">
                        {card.price_real * count}
                      </span>
                    </div>
                  </div>

                  <div className="basket__delete">
                    <a href="">
                      <FontAwesomeIcon
                        className="basket__delete-trash"
                        icon={faTrashAlt}
                      />
                    </a>
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

export default Basket
