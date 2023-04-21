// Home.js

import React from 'react';
import pdpcv from './images/pdpcv.jpg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1 className="Heloo">Bonjour, </h1>
      <p className="Heloo"> FATIMA-EZZAHRA SALEH 
      Futur ingénieur en informatique et réseau , </p>
   <img src={pdpcv} className="pdpcv" sizes="(max-width: 10px) 10px,
            10px" alt="pdpcv" class="center" />
      
      <h2 className="Title">Demarrons un projet ensemble ,N'hesitee pas a me contacte  </h2>
     <a href="mailto:salehfatimzahra?subject=HTML link" class="center">Cliquez ici pour nous envoyer un e-mail !  </a>
    </div>
  );
}
//  <img src={pdpcv} className="pdpcv" alt="pdpcv" />

export default Home;
