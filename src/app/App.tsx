import React, { ReactNode } from 'react';
import './App.css';

/**
 * Déclare les couleurs à utiliser.
 */
enum Couleur {
  Gueules = '#e20909',
  Azur = '#2b5df2',
  Sable = '#000000',
  Sinople = '#5ab532',
  Pourpre = '#d576ad',
  Or = '#fcef3c',
  Argent = '#ffffff'
}

/**
 * Déclare les différentes formes d'écu.
 */
enum FormeEcu {
  EcuAncien = 'M0,0 L0,50 Q0,80 50,110 Q100,80 100,50 L100,0 z'
}

/**
 * Déclare les propriétés d'un écu.
 */
type EcuProps = {
  forme: string,
  children: ReactNode
};

/**
 * Représente un écu avec une forme et son contenu.
 *
 * @param props Les propriétés de l'écu.
 */
function Ecu(props: EcuProps) {
  const forme = <path id="mask-ecu" d={props.forme} fill="#ffffff" />;
  const champ = React.Children.only(props.children);

  return <svg height="120" width="100" data-testid="ecu">
    <defs>
      <clipPath id="mask">{forme}</clipPath>
    </defs>
    {champ}
  </svg>
}

/**
 * Déclare les propriétés d'un champ.
 */
type ChampProps = {
  couleur: string
};

/**
 * Représente un champ de couleur.
 *
 * @param props Les propriétés du champ.
 */
function Champ(props: ChampProps) {
  return <rect x="0" y="0" width="100" height="120" fill={props.couleur} clipPath="url(#mask)" />;
}

/**
 * La composante principale de l'application.
 */
function App() {
  return (
    <div className="App">
      <Ecu forme={FormeEcu.EcuAncien}>
        <Champ couleur={Couleur.Azur} />
      </Ecu>
    </div>
  );
}

export default App;
