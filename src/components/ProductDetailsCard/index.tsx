import './styles.css';
import { Link } from 'react-router-dom';

export default function CardProductDetail() {
    const product = {
        name: "Nome do produto em duas linhas",
        price: 139.99,
        image: null,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida blandit turpis vel pellentesque. Proin tristique quam justo. Nulla laoreet vitae nisi nec aliquam. Etiam porttitor ultricies risus sed lacinia. Sed ut tincidunt tellus. Vivamus pharetra purus orci, sed pharetra felis accumsan consectetur. Donec at malesuada libero.",
        brand: "uma, duas, tes, quarto e cinco",
        year: "2012, 2013, 2014",
        anotherInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 1
    };

    return (
        <div className='container'>
            <div className='back-container'>
                <Link to={"/carrinho"} className='return-link'>
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
                    <p><span>Marca: </span>{product.brand}</p>
                    <p><span>Ano: </span>{product.year}</p>
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
                                        <button
                                            className='quantity-increment'
                                        >
                                            +
                                        </button>
                                    </li>
                                    <li className='decrement-element'>
                                        <button
                                            className='quantity-decrement'
                                        >
                                            -
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className='buy-button'>COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
