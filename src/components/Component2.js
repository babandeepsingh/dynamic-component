import React from 'react';

export default props => (
  <div className="Foo">
    <hr />
    Hi I'm a Coponent2 component with the title:
    <h2>{props.block.title}</h2>
    <h2>{props.block.headline}</h2>
  </div>
);
