# React Typing Effect

![Build Status](https://travis-ci.org/sstur/react-rte.svg?branch=master)

This is a UI component built completely in React that simulates typing effect, eraser effect and a blinking cursor.

## Demo

See the demo here: [lameckmatare.com/react-typing-effect][react-typing-effect-demo]

## Getting Started

  $ npm install --save react-typing-effect

### Example Usage:

```javascript
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => {
  return (
    <ReactTypingEffect
      text="Hello" //text=["Hello.", "World!"]
    />
  );
};
```
