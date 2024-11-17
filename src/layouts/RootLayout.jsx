import React from 'react';
import NavBarComponent from '../components/NavBarComponent.jsx';
import FooterComponent from '../components/FooterComponent.jsx';

const RootLayout = ({ children }) => {
  return (
    <div className="root-layout mt-0 ">
      {/* Pasek nawigacyjny */}
      <NavBarComponent />

      {/* Główna treść */}
      <main>
        {children}
      </main>

      {/* Stopka */}
      <FooterComponent />
    </div>
  );
};

export default RootLayout;
