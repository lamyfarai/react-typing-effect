import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from '../lib';

const ReactTypingEffectDemo = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <div style={{ margin: 'auto' }}>
        <ReactTypingEffect text={["Hello.", "World!!!"]} />

        <br />

        <ReactTypingEffect
          text={["Hello.", "World!!!"]}
          cursorRenderer={cursor => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={i%2 === 0 ? { color: 'magenta'} : {}}
                    >{char}</span>
                  );
                })}
              </h1>
            );
          }}
        />
      </div>
    </div>
  );
};

ReactTypingEffectDemo.propTypes = {

};

export default ReactTypingEffectDemo;
