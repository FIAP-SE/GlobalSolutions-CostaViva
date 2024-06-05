import './styles.css';
import ProjectHeader from '../../../components/ProjectHeader';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import Footer from '../../../components/Footer';

export default function ProductDetails() {

    return (
        <>
            <header>
                <ProjectHeader/>
            </header>
            <main className="center">
                <ProductDetailsCard/>
            </main>
            <Footer />
        </>
    );
}
