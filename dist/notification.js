'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var Notification = (function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    var _this = this;

    _classCallCheck(this, Notification);

    _Component.apply(this, arguments);

    this.getBarStyle = function () {
      var isActive = _this.props.isActive;

      var activeStateStyle = undefined;
      var defaultStateStyle = undefined;

      var baseStyle = {
        defaultState: {
          position: 'fixed',
          bottom: '2rem',
          top: '-100%',
          left: '50%',
          height: '20px',
          width: 'auto',
          padding: '1rem',
          margin: 0,
          color: '#fafafa',
          font: '1rem normal Roboto, sans-serif',
          borderRadius: '5px',
          background: '#212121',
          borderSizing: 'border-box',
          boxShadow: '0 0 1px 1px rgba(10, 10, 11, .125)',
          cursor: 'default',
          transition: '.5s cubic-bezier(0.89, 0.01, 0.5, 1.1)'
        },
        activeState: {
          top: '2rem'
        }
      };

      /**
       * If styles is set to false, then return nothing.
       */
      if (_this.props.style === false) {
        return {};
      }

      /**
       * If `this.props.styles.active` exists (which means
       * custom active styles should be used, override the
       * default active styles with those from the prop.
       */
      if (_this.props.style && _this.props.style.active) {
        activeStateStyle = _objectAssign2['default'](baseStyle.activeState, _this.props.style.active);
      } else {
        activeStateStyle = baseStyle.activeState;
      }

      /**
       * If `this.props.styles.bar` exists (which means custom
       * styles should be applied to the bar) combine those
       * styles with the existing base style.
       */
      if (_this.props.style && _this.props.style.bar) {
        defaultStateStyle = _objectAssign2['default'](baseStyle.defaultState, _this.props.style.bar);
      } else {
        defaultStateStyle = baseStyle.defaultState;
      }

      return isActive ? _objectAssign2['default'](defaultStateStyle, activeStateStyle) : defaultStateStyle;
    };

    this.getActionStyle = function () {
      var baseStyle = {
        padding: '0.125rem',
        marginLeft: '1rem',
        color: '#f44336',
        font: '.75rem normal Roboto, sans-serif',
        lineHeight: '1rem',
        letterSpacing: '.125ex',
        textTransform: 'uppercase',
        borderRadius: '5px',
        cursor: 'pointer'
      };

      if (_this.props.style === false) {
        return {};
      }

      if (_this.props.style && _this.props.style.action) {
        return _objectAssign2['default'](baseStyle, _this.props.style.action);
      }

      return baseStyle;
    };

    this.handleClick = function (event) {
      event.preventDefault();
      if (_this.props.onClick && typeof _this.props.onClick === 'function') {
        return _this.props.onClick(event);
      }

      return;
    };
  }

  Notification.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.onDismiss && nextProps.isActive) {
      setTimeout(nextProps.onDismiss, this.props.dismissAfter);
    }
  };

  /*
   * @description Dynamically get the styles for the bar.
   * @returns {object} result The style.
   */

  Notification.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'notification-bar', style: this.getBarStyle() },
      _react2['default'].createElement(
        'div',
        { className: 'notification-bar-wrapper', onClick: this.handleClick },
        _react2['default'].createElement('span', { className: 'ic ic_message_control' }),
        _react2['default'].createElement(
          'span',
          { className: 'notification-bar-message' },
          this.props.message
        ),
        this.props.action !== false ? _react2['default'].createElement(
          'span',
          { className: 'notification-bar-action', style: this.getActionStyle() },
          this.props.action
        ) : null
      )
    );
  };

  _createClass(Notification, null, [{
    key: 'propTypes',
    value: {
      message: _react.PropTypes.string.isRequired,
      action: _react.PropTypes.string.isRequired,
      onClick: _react.PropTypes.func,
      styles: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.bool]),
      dismissAfter: _react.PropTypes.number,
      onDismis: _react.PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      isActive: false,
      dismissAfter: 2000
    },
    enumerable: true
  }]);

  return Notification;
})(_react.Component);

exports['default'] = Notification;
module.exports = exports['default'];

/*
 * @function getActionStyle
 * @description Dynamically get the styles for the action text.
 * @returns {object} result The style.
 */

/*
 * @function handleClick
 * @description Handle click events on the
 */
