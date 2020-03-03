import React from 'react';
import './app.css';

import { FormeEcu, Couleur } from './atouts';
import { Ecu } from './ecu';
import { Champ } from './champ';

/**
 * La composante principale de l'application.
 */
export function App() {
	return (
		<div className="App">
			<Ecu forme={FormeEcu.EcuAncien}>
				<Champ couleur={Couleur.Azur} />
			</Ecu>
		</div>
	);
}
