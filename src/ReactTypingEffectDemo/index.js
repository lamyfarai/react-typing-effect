import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from '../lib';

const ReactTypingEffectDemo = () => {
  return (
    <div className="container">
      <ReactTypingEffect text={["Hello.", "World!!!"]} />
    </div>
  );
};

ReactTypingEffectDemo.propTypes = {

};

export default ReactTypingEffectDemo;
