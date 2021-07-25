import React from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

const Components = {
  component1: Component1,
  component2: Component2
};

export default block => {
  console.log(block);
  if (typeof Components[block.component] !== 'undefined') {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => (
      <div>
        The component {block.component} has not been created yet.{' '}
        <h2>{block.headline}</h2>
      </div>
    ),
    { key: block._uid }
  );
};
