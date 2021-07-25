import React from 'react';
import './style.css';
import Components from './component.js';

export default function App() {
  const data = {
    content: {
      body: [
        {
          _uid: 'BUY6Drn9e1',
          component: 'component1',
          headline: 'Foo'
        },
        {
          _uid: 'gJZoSLkfZV',
          component: 'component2',
          title: 'Bar'
        },
        {
          _uid: 'X1JAfdsZxy',
          component: 'default',
          headline: 'Another headline'
        }
      ]
    }
  };
  return (
    <div>
      <h1>Hello React</h1>
      {data.content.body.map(block => Components(block))}
    </div>
  );
}
