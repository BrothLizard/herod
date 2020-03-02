import React from 'react';
import './App.css';

import { FormeEcu, Couleur } from './atouts';
import Ecu from './Ecu';
import Champ from './Champ';

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
