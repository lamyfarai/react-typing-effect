# React Typing Effect

This is a UI component built completely in React that simulates typing effect, eraser effect and a blinking cursor.

## Demo

![Screenshot 1](https://raw.githubusercontent.com/lamyfarai/react-typing-effect/master/screenshot.gif)

## Getting Started

  `$ npm install --save react-typing-effect`

`ReactTypingEffect` is the main component.

### Example Usage:

```javascript
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => {
  return (
    <ReactTypingEffect
      text="Hello." //text=["Hello.", "World!"]
    />
  );
};
```

## Motivation

Inspired by this blog post
http://burnmind.com/tutorials/how-to-create-a-typing-effect-an-eraser-effect-and-a-blinking-cursor-using-jquery

## API

### Required Props

  * `text`: That text that will be typed and erased. Can be either an `array` of strings or just a `string`.

### Other Props

  * `staticText`: `String`. Text that will just be static and cannot be typed or erased.
  * `className`: `String`
  * `speed`: `Number`. default `500`ms. Typing speed.
  * `eraseDelay`: `Number`. default `5000`ms. Time to wait before erasing the text.
  * `typingDelay`: `Number`. default `2500`ms. Time to wait before starting to type.
  *  `cursor`: `String`. Default: `|`
  * `cursorClassName`: `String`
