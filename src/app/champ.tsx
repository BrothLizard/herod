import React, { useContext } from 'react';
import { SurfaceContext } from './ecu';

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
export function Champ(props: ChampProps) {
	const ctxData = useContext(SurfaceContext);
	if (!ctxData) return null;

	const { x, y, width, height, maskId } = ctxData;
	return <rect x={x} y={y} width={width} height={height} fill={props.couleur} clipPath={`url(#${maskId})`} />;
}
