// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions

import 'jest-enzyme';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

