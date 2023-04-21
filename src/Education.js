// Education.js

import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="Education">
      <h3>Education</h3>
      <div className="Education-item">
        <h4>BAC Sciences Physiques et Chimie</h4>
        <p className="Education-school">LYCEE NAWRAS | Sep 2017 - May 2018</p>
        
      </div>
      <div className="Education-item">
        <h4>Technicien Spérieur En réseaux Informatique</h4>
        <p className="Education-school">BTS MED5 | 2019 - 2021</p>
        
      </div>
      <div className="Education-item">
        <h4>Ingénierie Informatique et Réseaux</h4>
        <p className="Education-school">Ecole Marocaine de Sciences de l'Ingénieur | 2021 - en cours</p>
        
      </div>
    </div>
  );
}

export default Education;
