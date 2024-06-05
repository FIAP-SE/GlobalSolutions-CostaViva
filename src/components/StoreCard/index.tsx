import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { name: "Nome do produto em duas linhas", price: "R$ 139,99", image: "path/to/image1.jpg" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99", image: "path/to/image2.jpg" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99", image: "path/to/image3.jpg" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99", image: "path/to/image4.jpg" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99", image: "path/to/image5.jpg" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99", image: "path/to/image6.jpg" },
];

const Store: React.FC = () => {
  return (
    <div className="store-container">
      <h1 className="store-title">LOJA</h1>
      <p className="store-subtitle">Ao comprar nossos produtos você estará apoiando a ONG Monitoramento Mirim Costeiro</p>
      <div className="store-product-grid">
        {products.map((product, index) => (
          <Link to={`/product/${index}`} className="store-product-link" key={index}>
            <div className="store-product">
              <div className="store-photo">
                <img src={product.image} alt={product.name} className="store-photo-img" />
              </div>
              <div className="store-infosCard">
                <p className="store-name">{product.name}</p>
                <h6 className="store-price">
                  <span className="currency">R$</span><span className="price">{product.price.replace('R$', '')}</span>
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;
