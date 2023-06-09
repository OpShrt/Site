import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import opshrtLogo from './img/opshrt_logo_small_alpha_white.png';
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img
        src={opshrtLogo}
        alt="OpShrt Logo"
        className="floating-image"
        onClick={() => navigate('/op_dash')}
      />
    </div>
  );
}

export default HomePage;
