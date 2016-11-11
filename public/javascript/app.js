webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(230);

	var _routes = __webpack_require__(166);

	var _routes2 = _interopRequireDefault(_routes);

	var _configureStore = __webpack_require__(259);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: (0, _configureStore2.default)(window.INIT_STATE) },
	    _routes2.default
	), document.getElementById('app'));

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var React = __webpack_require__(167);

	var _require = __webpack_require__(173),
	    Router = _require.Router,
	    Route = _require.Route,
	    IndexRoute = _require.IndexRoute,
	    browserHistory = _require.browserHistory;

	var AppRoot = __webpack_require__(228);
	var Home = __webpack_require__(229);
	var ItemDetail = __webpack_require__(261);

	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	    var createElement = function createElement(Component, renderProps) {
	        return React.createElement(Component, _extends({}, renderProps, window.PROPS));
	    };
	}

	module.exports = React.createElement(
	    Router,
	    { history: browserHistory, createElement: createElement },
	    React.createElement(
	        Route,
	        { path: '/', component: AppRoot },
	        React.createElement(IndexRoute, { component: Home }),
	        React.createElement(Route, { path: 'detail', component: ItemDetail })
	    )
	);

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(167);

	var _require = __webpack_require__(173),
	    Link = _require.Link;

	var _require2 = __webpack_require__(230),
	    connect = _require2.connect;

	var AppRoot = function (_React$Component) {
	    _inherits(AppRoot, _React$Component);

	    function AppRoot() {
	        _classCallCheck(this, AppRoot);

	        return _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).apply(this, arguments));
	    }

	    _createClass(AppRoot, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            alert('cak');
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'Root'
	                ),
	                React.createElement(
	                    Link,
	                    { to: '/' },
	                    'Home'
	                ),
	                React.createElement(
	                    Link,
	                    { to: 'detail' },
	                    'Detail'
	                ),
	                this.props.children,
	                React.createElement(
	                    'button',
	                    { onClick: this.handleClick },
	                    'Click'
	                )
	            );
	        }
	    }]);

	    return AppRoot;
	}(React.Component);

	module.exports = connect()(AppRoot);

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(167);

	var _require = __webpack_require__(230),
	    connect = _require.connect;

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            var items = this.props.items;

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'Home page'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'Items: ',
	                    items
	                )
	            );
	        }
	    }]);

	    return Home;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        items: state.items
	    };
	})(Home);

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redux = __webpack_require__(237);

	var _require = __webpack_require__(260),
	    itemsReducer = _require.itemsReducer;

	function configure() {
	    var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


	    var reducer = redux.combineReducers({
	        items: itemsReducer
	    });

	    var store = redux.createStore(reducer, initState);

	    return store;
	}

	module.exports = configure;

/***/ },

/***/ 260:
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var itemsReducer = function itemsReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'INIT_ITEMS':
	            return [].concat(_toConsumableArray(action.items));
	        default:
	            return state;
	    }
	};

	module.exports = {
	    itemsReducer: itemsReducer
	};

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(167);

	var _require = __webpack_require__(230),
	    connect = _require.connect;

	var ItemDetail = function (_React$Component) {
	    _inherits(ItemDetail, _React$Component);

	    function ItemDetail() {
	        _classCallCheck(this, ItemDetail);

	        return _possibleConstructorReturn(this, (ItemDetail.__proto__ || Object.getPrototypeOf(ItemDetail)).apply(this, arguments));
	    }

	    _createClass(ItemDetail, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'This is Item Detail page'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'And these are the items: ',
	                    this.props.items
	                )
	            );
	        }
	    }]);

	    return ItemDetail;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        items: state.items
	    };
	})(ItemDetail);

/***/ }

});