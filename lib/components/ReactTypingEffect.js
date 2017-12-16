import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ReactTypingEffect extends Component {

  constructor(props){
    super(props);
    this.state = {
      textToType: "",
      currentTextIndex: 0,
      displayText: "",
      cursorIsVisible: false
    };

    this.displayTextLength = 0; //will keep track of typed text.
    this.currentTextIndex = 0; //will be used to get text if an array of text is supplied.
    this.textToType = ""; //text that's currently being typed

    this.typeText = this.typeText.bind(this);
    this.eraseText = this.eraseText.bind(this);
    this.cursor = this.cursor.bind(this);
    this.getTextFromProps = this.getTextFromProps.bind(this);
  }

  componentDidMount(){
    const { delay, cursorSpeed } = this.props;
    this.typeTimeout = setTimeout(this.typeText, delay);
    this.cursorInterval = setInterval(this.cursor, cursorSpeed);
  }

  getTextFromProps(){
    const { text } = this.props;
    if(typeof text === "string") return text;
    if(typeof text[this.currentTextIndex] === "string"){
      return text[this.currentTextIndex];
    }
  }

  cursor(){
    this.setState({cursorIsVisible: !this.state.cursorIsVisible});
  }

  typeText(){
    let { speed, text, delay } = this.props,

      //text that is currently being typed
      textToType  = this.getTextFromProps(),

      //typed text that will be displayed
      displayText = textToType.substr(0, this.displayTextLength++);

    //set the displayText state
    this.setState({ displayText });

    //if all of the textToType hasn't displayed, keep typing
    if(this.displayTextLength < textToType.length+1){
      this.typeTimeout = setTimeout(this.typeText, speed);
    }else{
      this.displayTextLength = textToType.length;
      this.setState({ displayText: textToType });
      this.typeTimeout = setTimeout(this.eraseText, delay);
    }
  }

  eraseText(){

    let { speed, text, delay } = this.props,

      //undo the display text
      displayText = this.state.displayText.substr(0, this.displayTextLength--);

    //set the displayText state
    this.setState({ displayText });

    if(this.displayTextLength >= 0){
      this.typeTimeout = setTimeout(this.eraseText, speed);
    }else {
      if(typeof text === "object"){
        this.currentTextIndex = (this.currentTextIndex+1 < text.length) ?
          this.currentTextIndex+1 : 0;
      }
      this.displayTextLength = 0;
      this.setState({ displayText: "", });
      this.typeTimeout = setTimeout(this.typeText, delay);
    }
  }

  render(){
    const { staticText, className, cursorStyle, ...otherProps } = this.props;
    const { displayText, cursorIsVisible } = this.state;

    return(
      <div
        className={`rte-react_typing___effect-console ${className || ""}`}
        {...otherProps}>
        {staticText ? <span className="rte-react_typing___effect_static-text">{staticText.text}</span> : null}
        <span className="rte-react_typing___effect_typed-text">{displayText}</span>
        <span
          className="rte-react_typing___effect_blinking-cursor"
          style={Object.assign({},
            cursorIsVisible ? {opacity: 0} : {})}>
          {cursorStyle}&nbsp;
        </span>
      </div>
    );
  }
}

ReactTypingEffect.defaultProps = {
  staticText: null,
  speed: 300,
  delay: 3000,
  cursorSpeed: 600,
  cursorStyle: "|"
};

ReactTypingEffect.propTypes = {
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  staticText: PropTypes.object,
  speed: PropTypes.number,
  delay: PropTypes.number,
  cursorSpeed: PropTypes.number,
  className: PropTypes.string,
  cursorStyle: PropTypes.string.isRequired
};
