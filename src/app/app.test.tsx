import React from 'react';
import { render } from '@testing-library/react';
import { App } from './app';

test("rend l'écu", () => {
	const { getByTestId } = render(<App />);
	const ecuElement = getByTestId('ecu');
	expect(ecuElement).toBeInTheDocument();
});
