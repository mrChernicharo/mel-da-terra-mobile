import React from 'react';
import { render } from '@testing-library/react-native';
// import {} from '@testing-library/jest-native';

import Profile from '../../screens/Profile/Profile';

test('Verify if nameInput placeholder is correctly shown', () => {
    const { debug, getByPlaceholderText } = render(<Profile />);

    // debug(); // exibe todos os elementos da interface em detalhes no terminal, sem precisar abrir o emulador

    const nameInput = getByPlaceholderText('Nome');
    // console.log(nameInput);

    expect(nameInput.props.placeholder).toBeTruthy();
    expect(nameInput.props.placeholder).toEqual('Nome');
});
