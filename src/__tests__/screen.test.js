import React from "react";
import { mount } from "enzyme";
import Screen from "../components/Screen";

let wrapped;

beforeEach(()=>{
 wrapped = mount(<Screen />);
});

afterEach(()=>{
 wrapped.unmount();
})

describe("<Screen />",()=>{
 it('has a display screen', ()=>{
  expect(wrapped.find('.card').length).toEqual(1);
 })
} )



// it('has a screen where values and results displayed', ()=>{
//  wrapped.find('input').simulate('change', {
//   target: { value: '1'} 
//  })
//  wrapped.update();
//  expect(wrapped.find('input').prop('value')).toEqual('1');
// })