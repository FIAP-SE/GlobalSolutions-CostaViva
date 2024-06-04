import React from 'react';
import './styles.css';

interface Product {
  name: string;
  price: string;
}

const products: Product[] = [
  { name: "Nome do produto em duas linhas", price: "R$ 139,99" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99" },
  { name: "Nome do produto em duas linhas", price: "R$ 139,99" },
];

const Store: React.FC = () => {
  return (
    <div className="store-container">
      <h1 className="store-title">LOJA</h1>
      <p className="store-subtitle">Ao comprar nossos produtos você estará apoiando a ONG Monitoramento Mirim Costeiro</p>
      <div className="store-product-grid">
        {products.map((product, index) => (
          <div className="store-product" key={index}>
            <div className="store-photo">(foto)</div>
            <div className="store-name">{product.name}</div>
            <div className="store-price">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
