import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

interface Product {
  name: string;
  price: number;
  image: string | null;
  description: string;
  anotherInfo: string;
  quantity: number;
}

interface Props {
  product: Product;
}

const CardProductDetail: React.FC<Props> = ({ product }) => {
  return (
    <div className='container'>
      <div className='back-container'>
        <Link to={"/loja"} className='return-link'>
          <h3> &lt; VOLTAR </h3>
        </Link>
      </div>
      <div className='product-detail-container'>
        <div className='product-detail-left'>
          {product.image ? (
            <img src={product.image} alt="Product" />
          ) : (
            <div className='image-placeholder'>
              <p>(foto)</p>
            </div>
          )}
          <h2>{product.name}</h2>
          <h6><span className='currency-detail'>R$</span> {product.price.toFixed(2)}</h6>
        </div>
        <div className='product-detail-right'>
          <p>Descrição:</p>
          <br />
          <p>{product.description}</p>
          <br />
          <br />
          <p><span>Outras informações: </span>{product.anotherInfo}</p>
          <div className='quantity-buy-container'>
            <div className='quantity-display'>
              <input
                className='product-quantity'
                type='number'
                value={product.quantity}
                readOnly
              />
              <div className='quantity-buttons'>
                <ul className='increment-buttons'>
                  <li className='increment-element'>
                    <button className='quantity-increment'>
                      +
                    </button>
                  </li>
                  <li className='decrement-element'>
                    <button className='quantity-decrement'>
                      -
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <Link to={"/carrinho"} className='return-link'>
            <button className='buy-button'>COMPRAR</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
