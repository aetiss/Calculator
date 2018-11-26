import React from 'react';
import { shallow } from 'enzyme';
import Key from '../key';

let wrapped;

beforeEach(()=>{
 wrapped = shallow(<Key />);
})

//simulate click of button.

it('on key press it displays a value',()=>{
 wrapped.find('button').simulate('click', {
  target : {vallue: '1'}
 })
 wrapped.updatee();
 expect(wrapped.find("button").prop('value')).toEqual('1');
})