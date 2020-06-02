import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/App';

describe('App', () => {
  it('renders hello Marina', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.hello').text()).toContain('Hello, Marina!');
  });
});
