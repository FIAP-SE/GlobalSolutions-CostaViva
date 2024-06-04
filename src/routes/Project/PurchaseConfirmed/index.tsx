import './styles.css';
import Footer from "../../../components/Footer";
import ProjectHeader from "../../../components/ProjectHeader";
import PurchaseConfirmedMain from "../../../components/PurchaseConfirmedMain"

export default function PurchaseConfirmed() {

    return (
        <main>
            <ProjectHeader />

            <PurchaseConfirmedMain
            confirmed='PEDIDO CONFIRMADO!' 
            number='558937'
            detail='Enviamos para seu email as informações completas do seu pedido.'
            />

            <Footer />
        </main>
    );
}