import React from 'react';
import {shallow} from "enzyme";
import App from "./App";
import Navbar from './components/Navbar';

it ('renders without crashing', () => {
  shallow (<App />);
})

it("renders <Navbar />", ()=> {
  const wrapper =  shallow(<App />);
  expect(wrapper.contains(<Navbar />)).toEqual(true);

})


