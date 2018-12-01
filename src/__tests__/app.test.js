import React from 'react';
import { shallow } from "enzyme";
import App from '../components/App';
import Keypad from '../components/Keypad';
import Screen from '../components/Screen';

let wrapped;

beforeEach(()=>{
 wrapped = shallow(<App />);
});


describe('<App />', () => {
it ('show a screen component', ()=>{
 expect(wrapped.find(Screen).length).toEqual(1);
});

it('shows keypad component', ()=>{
 expect(wrapped.find(Keypad).length).toEqual(1);
})
});