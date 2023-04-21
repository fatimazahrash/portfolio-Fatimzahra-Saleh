// About.js

import React from 'react';
import pdpcv from './images/pdpcv.jpg';
import './About.css';

function About() {
  return (
    <div className="About">
      <img src={pdpcv} className="pdpcv" sizes="(max-width: 10px) 10px,
            10px" alt="pdpcv" class="center" />
      <h3>About Me</h3>
      <p1>Fatima-ezzahra Saleh Futur ingénieur en informatique et réseau avec des compétences particulières en développement de logiciels, analyse et intégration. Travaillant en équipe avec un regard attentif pour résoudre les problèmes. Rationnel avec une soif insatiable d'apprendre

.</p1>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>JAVA</li>
        <li>FLUTTER</li>
      </ul>
      <h2 className="Title">Demarrons un projet ensemble ,N'hesitee pas a me contacte  </h2>
     <a href="mailto:salehfatimzahra?subject=HTML link" class="center">Cliquez ici pour nous envoyer un e-mail !  </a>
    </div>
  );
}

export default About;
// <img src={profilePic} className="Profile-pic" alt="Profile" />