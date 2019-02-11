'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('C:\\Users\\matar\\Workbench\\react-typing-effect\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\matar\\Workbench\\react-typing-effect\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\matar\\Workbench\\react-typing-effect\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Cursor = require('./Cursor');

var _Cursor2 = _interopRequireDefault(_Cursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TypingEffect: {
    displayName: 'TypingEffect'
  }
};

var _CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/lib/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/lib/index.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformHmrLibIndexJs2(_CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var TypingEffect = _wrapComponent('TypingEffect')(function (_Component) {
  _inherits(TypingEffect, _Component);

  function TypingEffect(props) {
    _classCallCheck(this, TypingEffect);

    var _this = _possibleConstructorReturn(this, (TypingEffect.__proto__ || Object.getPrototypeOf(TypingEffect)).call(this, props));

    _this.state = {
      index: 0,
      displayText: ""
    };
    _this.getRawText = _this.getRawText.bind(_this);
    _this.type = _this.type.bind(_this);
    _this.erase = _this.erase.bind(_this);
    _this.startTyping = _this.startTyping.bind(_this);
    return _this;
  }

  _createClass(TypingEffect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startTyping();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._timeout && clearTimeout(this._timeout);
    }
  }, {
    key: 'startTyping',
    value: function startTyping() {
      var _this2 = this;

      this._timeout = setTimeout(function () {
        _this2.type();
      }, this.props.typingDelay);
    }
  }, {
    key: 'getRawText',
    value: function getRawText() {
      var text = this.props.text;

      return typeof text === "string" ? [text] : [].concat(_toConsumableArray(text));
    }
  }, {
    key: 'type',
    value: function type() {
      var _this3 = this;

      var _state = this.state,
          index = _state.index,
          displayText = _state.displayText;

      var text = this.getRawText()[index];
      if (text.length > displayText.length) {
        displayText = text.substr(0, displayText.length + 1);
        this.setState({ displayText: displayText }, function () {
          _this3._timeout = setTimeout(function () {
            _this3.type();
          }, _this3.props.speed);
        });
      } else {
        this._timeout = setTimeout(function () {
          _this3.erase();
        }, this.props.eraseDelay);
      }
    }
  }, {
    key: 'erase',
    value: function erase() {
      var _this4 = this;

      var _state2 = this.state,
          index = _state2.index,
          displayText = _state2.displayText;

      if (displayText.length === 0) {
        var textArray = this.getRawText();
        index = index + 1 === textArray.length ? 0 : index + 1;
        this.setState({ index: index }, function () {
          _this4.startTyping();
        });
      } else {
        displayText = displayText.substr(-displayText.length, displayText.length - 1);
        this.setState({ displayText: displayText }, function () {
          _this4._timeout = setTimeout(function () {
            _this4.erase();
          }, _this4.props.speed);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          speed = _props.speed,
          typingDelay = _props.typingDelay,
          eraseDelay = _props.eraseDelay,
          staticText = _props.staticText,
          text = _props.text,
          className = _props.className,
          cursor = _props.cursor,
          cursorClassName = _props.cursorClassName,
          otherProps = _objectWithoutProperties(_props, ['speed', 'typingDelay', 'eraseDelay', 'staticText', 'text', 'className', 'cursor', 'cursorClassName']);

      var displayText = this.state.displayText;

      var classes = (0, _classnames2.default)(className, 'lfm__typing_effect');
      return _react3.default.createElement(
        'div',
        _extends({}, otherProps, { className: classes }),
        staticText ? _react3.default.createElement(
          'span',
          { className: 'lfm__typing_effect_static_text' },
          staticText,
          '\xA0'
        ) : null,
        _react3.default.createElement(
          'span',
          { className: 'lfm__typing_effect_text' },
          displayText
        ),
        _react3.default.createElement(_Cursor2.default, {
          cursor: cursor,
          cursorClassName: cursorClassName
        })
      );
    }
  }]);

  return TypingEffect;
}(_react2.Component));

exports.default = TypingEffect;


TypingEffect.defaultProps = {
  speed: 200,
  eraseDelay: 5000,
  typingDelay: 2500
};

TypingEffect.propTypes = {
  speed: _propTypes2.default.number.isRequired,
  typingDelay: _propTypes2.default.number.isRequired,
  eraseDelay: _propTypes2.default.number.isRequired,
  staticText: _propTypes2.default.string,
  text: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]).isRequired,
  className: _propTypes2.default.string,
  cursor: _propTypes2.default.string,
  cursorClassName: _propTypes2.default.string
};