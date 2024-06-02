import React from 'react';
import './styles.css';

interface BackgroundSectionProps {
    backgroundImage: string;
    children: React.ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ backgroundImage, children }) => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className="background-section" style={sectionStyle}>
            {children}
        </section>
    );
}

export default BackgroundSection;
