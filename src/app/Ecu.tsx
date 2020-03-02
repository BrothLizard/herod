import React, { ReactNode } from 'react';

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

export default Ecu;
