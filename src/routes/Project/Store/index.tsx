import './styles.css';
import StoreCard from "../../../components/StoreCard"
import ProjectHeader from '../../../components/ProjectHeader';
import Footer from '../../../components/Footer';

export default function Store() {

    return (
        <main>
            <ProjectHeader />
            <StoreCard />
            <Footer />
        </main>
    );
}