import React, { ReactNode } from 'react';

/**
 * Déclare les propriétés d'un écu.
 */
type EcuProps = {
	forme: string,
	children: ReactNode
};

type Surface = {
	x: number, y: number, height: number, width: number, maskId: string,
}

export const SurfaceContext = React.createContext<Surface | null>(null)
export const SVGDefsContext = React.createContext<SVGDefsElement | null>(null)

/**
 * Représente un écu avec une forme et son contenu.
 *
 * @param props Les propriétés de l'écu.
 */
export function Ecu(props: EcuProps) {
	const forme = <path id="mask-path" d={props.forme} fill="#ffffff" />;
	const champ = React.Children.only(props.children);

	//let defsNode = <defs></defs>
	let defsNode = React.createElement("defs");
	let clipMask = <clipPath id="mask">{forme}</clipPath>;

	return <svg height="120" width="100" data-testid="ecu">
		{defsNode}
		<g>
			{clipMask}
			<SurfaceContext.Provider value={{ x: 0, y: 0, height: 120, width: 100, maskId: 'mask' }}>
				{champ}
			</SurfaceContext.Provider>
		</g>
	</svg>
}
