import React from 'react';
import { shallow } from 'enzyme';
import Key from '../components/Keypad';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<Key />);
});

afterEach(()=>{
    wrapped.unmount();
});
//simulate click of button.

it('has key layout', ()=>{
    expect(wrapped.find('Button').length).toEqual(16);
})

// it('on key press it displays a value',()=>{
//  wrapped.find('button').simulate('click', {
//   target : {value: '1'}
//  })
//  wrapped.update();
//  expect(wrapped.find("button").prop('value')).toEqual('1');
// })