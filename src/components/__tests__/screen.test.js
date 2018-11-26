import React from "react";
import { mount } from "enzyme";
import Screen from "../Screen";

let wrapped;

beforeEach(()=>{
 wrapped = mount(<Screen />);
});

afterEach(()=>{
 wrapped.unmount();
})
it('has a display screen', ()=>{
 expect(wrapped.find('input').length).toEqual(1);
})

it('has a diplay where operations are visible', ()=>{
 wrapped.find('input').simulate('change', {
  target: { value: '1'} 
 })
 wrapped.update();
 expect(wrapped.find('input').prop('value')).toEqual('1');
})






