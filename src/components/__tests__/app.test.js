import React from 'react';
import { shallow } from "enzyme";
import App from '../App';
import Keypad from '../Keypad';
import Screen from '../Screen';

let wrapped;

beforeEach(()=>{
 wrapped = shallow(<App />);
});

it ('show a screen component', ()=>{
 expect(wrapped.find(Screen).length).toEqual(1);
});

it('shows keypad component', ()=>{
 expect(wrapped.find(Keypad).length).toEqual(1);
})