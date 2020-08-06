import React from 'react';
import CodeCard from '../CodeCard';
import 'highlight.js/styles/darcula.css';

export default { title: 'CodeCard' };
export const jsDemo = () => (
  <CodeCard languages={['javascript']}>let a = 1;</CodeCard>
);
