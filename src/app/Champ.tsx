import React from 'react';

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

export default Champ;
