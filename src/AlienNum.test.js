import React from 'react';
import ReactDOM from 'react-dom';
import AlienNum from './AlienNum.js'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AlienNum base={3} num={0} />, div);
});