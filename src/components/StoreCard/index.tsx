import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Chaveiro tradicional tema baleia", price: "R$ 14,00", image: "/images/image1.jpeg" },
  { id: 2, name: "Chaveiro de madeira tema baleia", price: "R$ 19,99", image: "/images/image2.jpg" },
  { id: 3, name: "Quebra cabeça tema baleia", price: "R$ 99,99", image: "/images/image3.png" },
  { id: 4, name: "Vaso de plantas tema baleia", price: "R$ 150,80", image: "/images/image4.png" },
  { id: 5, name: "Livro Whales", price: "R$ 140,00", image: "/images/image5.jpg" },
  { id: 6, name: "Livro o conto da baleia", price: "R$ 145,00", image: "/images/image6.jpg" },
];

const Store: React.FC = () => {
  return (
    <div className="store-container">
      <h1 className="store-title">LOJA</h1>
      <p className="store-subtitle">Ao comprar nossos produtos você estará apoiando a ONG Monitoramento Mirim Costeiro</p>
      <div className="store-product-grid">
        {products.map((product) => (
          <Link to={`/produto/${product.id}`} className="store-product-link" key={product.id}>
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
