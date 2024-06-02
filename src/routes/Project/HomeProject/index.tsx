import React from 'react';
import Footer from '../../../components/Footer';
import ProjectHeader from '../../../components/ProjectHeader';
import BackgroundSection from '../../../components/BackgroundSection';
import backgroundImage from '../../../assets/background.svg';
import './styles.css';

const HomeProject: React.FC = () => {
    return (
        <>
            <ProjectHeader />
            <BackgroundSection backgroundImage={backgroundImage}>
                <div className='blv-conteudo-background'>
                    <h1>OLHOS NO OCEANO</h1>
                    <p>Monitorando Baleias e Preservando o Futuro</p>
                </div>
            </BackgroundSection>
            <Footer />
        </>
    );
}

export default HomeProject;
