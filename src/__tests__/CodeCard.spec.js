import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CodeCard from '../CodeCard';
import Highlight from '../Highlight';

describe('<Codecard/>', () => {
  test('should transform code', () => {
    const props = {
      languages: ['javascript'],
    };
    const wrapper = mount(<CodeCard {...props}>let test=1;</CodeCard>); // mount/render/shallow when applicable
    expect(wrapper.find('.javascript').html()).toEqual(
      '<code class="javascript hljs"><span class="hljs-keyword">let</span> test=<span class="hljs-number">1</span>;</code>'
    );
  });
  test('should transform code for empty string', () => {
    const props = {
      languages: ['javascript'],
    };
    const wrapper = mount(<CodeCard {...props}></CodeCard>); // mount/render/shallow when applicable
    expect(wrapper.find('.javascript').html()).toEqual(
      '<code class="javascript hljs"></code>'
    );
  });
});
