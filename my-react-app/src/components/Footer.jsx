//import React from 'react';
import wseiLogo from '../assets/WSEI-Krakow-logo.png'

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem' }}>
      <div>
        <img src={wseiLogo} alt="Logo uczelni" style={{ width: '100px' }} />
      </div>
      <p>Autor aplikacji: malgorzata.giera@microsoft.wsei.edu.pl</p>
    </footer>
  );
}

export default Footer;
