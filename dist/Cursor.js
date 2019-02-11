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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Cursor: {
    displayName: 'Cursor'
  }
};

var _CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/lib/Cursor.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/lib/Cursor.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformHmrLibIndexJs2(_CUsersMatarWorkbenchReactTypingEffectNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Cursor = _wrapComponent('Cursor')(function (_Component) {
  _inherits(Cursor, _Component);

  function Cursor(props) {
    _classCallCheck(this, Cursor);

    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, props));

    _this.state = {
      display: true
    };
    _this.animateCursor = _this.animateCursor.bind(_this);
    return _this;
  }

  _createClass(Cursor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.animateCursor();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._interval && clearInterval(this._interval);
    }
  }, {
    key: 'animateCursor',
    value: function animateCursor() {
      var _this2 = this;

      this._interval = setInterval(function () {
        _this2.setState({ display: !_this2.state.display });
      }, 500);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cursorClassName = _props.cursorClassName,
          cursor = _props.cursor;
      var display = this.state.display;

      var classes = (0, _classnames2.default)(cursorClassName, 'lfm__typing_effect_cursor');
      return _react3.default.createElement(
        'span',
        { style: getStyles(display) },
        cursor || "|"
      );
    }
  }]);

  return Cursor;
}(_react2.Component));

exports.default = Cursor;


var getStyles = function getStyles() {
  var display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return {
    MsTransition: "opacity 0.5s",
    WebkitTransition: "opacity 0.5s",
    MozTransition: "opacity 0.5s",
    transition: "opacity 0.5s",
    opacity: display ? 1 : 0
  };
};

Cursor.propTypes = {
  cursor: _propTypes2.default.string,
  cursorClassName: _propTypes2.default.string
};