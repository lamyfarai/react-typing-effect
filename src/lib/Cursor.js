import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = { display: true };
    this.animateCursor = this.animateCursor.bind(this);
  }

  componentDidMount() {
    this.animateCursor();
  }

  componentWillUnmount() {
    this._interval && clearInterval(this._interval);
  }

  animateCursor() {
    this._interval = setInterval(() => {
      this.setState({ display: !this.state.display });
    }, 500);
  }

  render() {
    const { className, cursor, cursorRenderer, } = this.props;
    const { display } = this.state;
    const _cusor = cursor || '|';

    return (
      <span className={className} style={getStyles(display)}>
        {cursorRenderer ? cursorRenderer(_cusor) : _cusor}
      </span>
    );
  }
}

const getStyles = (display = true) => {
  return {
    display: 'inline-block',
    MsTransition: "opacity 0.5s",
    WebkitTransition: "opacity 0.5s",
    MozTransition: "opacity 0.5s",
    transition: "opacity 0.5s",
    opacity: display ? 1 : 0
  };
};

Cursor.propTypes = {
  cursor: PropTypes.string,
  className: PropTypes.string,
  cursorRenderer: PropTypes.func,
};
