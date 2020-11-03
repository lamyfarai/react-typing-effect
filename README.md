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
    <>
      <ReactTypingEffect
        text={["Hello.", "World!"]}
      />

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
    </>
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

  * `displayTextRenderer`: `func`. `(displayText: string, textIndex: number) => element` If `text` propType is `array`, then `textIndex` will be the `array index` of the text, otherwise `textIndex` will be equal to `0`.  
  * `staticText`: `String`. Text that will just be static and cannot be typed or erased.
  * `className`: `String`
  * `speed`: `Number`. default `500`ms. Typing speed.
  * `eraseSpeed`: `Number`. default `500`ms. Erase speed.
  * `eraseDelay`: `Number`. default `5000`ms. Time to wait before erasing the text.
  * `typingDelay`: `Number`. default `2500`ms. Time to wait before starting to type.
  *  `cursor`: `String`. Default: `|`
  * `cursorClassName`: `String`
