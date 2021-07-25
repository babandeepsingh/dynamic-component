import React from 'react';

export default props => (
  <div className="bar">
    <hr />
    Hi I'm a Component1 component with the title:
    <h2>{props.block.title}</h2>
    <h2>{props.block.headline}</h2>
  </div>
);
