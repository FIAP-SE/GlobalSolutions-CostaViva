import { useParams } from 'react-router-dom';
import ProjectHeader from '../../../components/ProjectHeader';
import CardProductDetail from '../../../components/ProductDetailsCard';
import Footer from '../../../components/Footer';

const products = [
  { id: 1, name: "Chaveiro tradicional tema baleia", price: 14.00, image: "/images/image1.jpeg", description: "Chaveiro tradicional com o tema baleia", anotherInfo: "Pronta entrega", quantity: 1 },
  { id: 2, name: "Chaveiro de madeira tema baleia", price: 19.99, image: "/images/image2.jpg", description: "Chaveiro de madeira com o tema baleia", anotherInfo: "Pronta entrega", quantity: 1 },
  { id: 3, name: "Quebra cabeça tema baleia", price: 99.99, image: "/images/image3.png", description: "Quebra cabeça com o tema baleia", anotherInfo: "Pronta entrega", quantity: 1 },
  { id: 4, name: "Vaso de plantas tema baleia", price: 150.80, image: "/images/image4.png", description: "Vaso de plantas com o tema baleia", anotherInfo: "Pronta entrega", quantity: 1 },
  { id: 5, name: "Livro Whales", price: 140.00, image: "/images/image5.jpg", description: "Whales: An Illustrated Celebration - por Kelsey Oseid", anotherInfo: "Pronta entrega", quantity: 1 },
  { id: 6, name: "Livro o conto da baleia", price: 145.00, image: "/images/image6.jpg", description: "O Conto da Baleia: Livro infantil sobre meio ambiente - por Karen Swann", anotherInfo: "Pronta entrega", quantity: 1 },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <header>
        <ProjectHeader />
      </header>
      <main className="center">
        <CardProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
