webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(172);

	var _routes = __webpack_require__(202);

	var _routes2 = _interopRequireDefault(_routes);

	var _configureStore = __webpack_require__(266);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(268);

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: (0, _configureStore2.default)(window.INIT_STATE) },
	    _routes2.default
	), document.querySelector('#root-container'));

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var React = __webpack_require__(1);

	var _require = __webpack_require__(203),
	    Router = _require.Router,
	    Route = _require.Route,
	    IndexRoute = _require.IndexRoute,
	    browserHistory = _require.browserHistory;

	var AppRoot = __webpack_require__(256);
	var Home = __webpack_require__(258);
	var Admin = __webpack_require__(263);
	var AdminItems = __webpack_require__(264);
	var ItemDetail = __webpack_require__(265);

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
	        React.createElement(
	            Route,
	            { path: 'a', component: Admin },
	            React.createElement(IndexRoute, { component: AdminItems })
	        ),
	        React.createElement(Route, { path: ':_id', component: ItemDetail })
	    )
	);

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(172),
	    connect = _require.connect;

	var _require2 = __webpack_require__(203),
	    Link = _require2.Link;

	var Navbar = __webpack_require__(257);

	var AppRoot = function (_React$Component) {
	    _inherits(AppRoot, _React$Component);

	    function AppRoot() {
	        _classCallCheck(this, AppRoot);

	        return _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).apply(this, arguments));
	    }

	    _createClass(AppRoot, [{
	        key: 'render',
	        value: function render() {

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(Navbar, null),
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    this.props.children
	                )
	            );
	        }
	    }]);

	    return AppRoot;
	}(React.Component);

	module.exports = connect()(AppRoot);

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(203),
	    IndexLink = _require.IndexLink;

	var Navbar = function (_React$Component) {
	    _inherits(Navbar, _React$Component);

	    function Navbar() {
	        _classCallCheck(this, Navbar);

	        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	    }

	    _createClass(Navbar, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'nav',
	                { className: 'navbar navbar-default' },
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        React.createElement(
	                            IndexLink,
	                            { className: 'navbar-brand', to: '/' },
	                            'Brand'
	                        )
	                    ),
	                    React.createElement(
	                        'ul',
	                        { className: 'nav navbar-nav' },
	                        React.createElement(
	                            'li',
	                            { className: 'active' },
	                            React.createElement(
	                                'a',
	                                { href: '#' },
	                                'Link ',
	                                React.createElement(
	                                    'span',
	                                    { className: 'sr-only' },
	                                    '(current)'
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'li',
	                            null,
	                            React.createElement(
	                                'a',
	                                { href: '#' },
	                                'Link'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Navbar;
	}(React.Component);

	module.exports = Navbar;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var ItemList = __webpack_require__(259);

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement('div', { className: 'row category-list' }),
	                React.createElement(ItemList, null)
	            );
	        }
	    }]);

	    return Home;
	}(React.Component);

	module.exports = Home;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(172),
	    connect = _require.connect;

	var _require2 = __webpack_require__(260),
	    initItems = _require2.initItems;

	var Item = __webpack_require__(262);

	var ItemList = function (_React$Component) {
	    _inherits(ItemList, _React$Component);

	    function ItemList() {
	        _classCallCheck(this, ItemList);

	        return _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).apply(this, arguments));
	    }

	    _createClass(ItemList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dispatch = this.props.dispatch;

	            dispatch(initItems());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var items = this.props.items;

	            var renderItems = function renderItems() {
	                return items.map(function (item) {
	                    return React.createElement(
	                        'div',
	                        { className: 'col-sm-3', key: item._id },
	                        React.createElement(Item, item)
	                    );
	                });
	            };

	            return React.createElement(
	                'div',
	                { className: 'item-list row' },
	                renderItems()
	            );
	        }
	    }]);

	    return ItemList;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        items: state.items
	    };
	})(ItemList);

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ItemAPI = __webpack_require__(261);

	var initItems = function initItems() {
	    return {
	        type: 'INIT_ITEMS',
	        items: ItemAPI.getItems()
	    };
	};

	var initItem = function initItem(_id) {
	    return {
	        type: 'INIT_ITEM',
	        item: ItemAPI.getItem(_id)
	    };
	};

	module.exports = {
	    initItems: initItems,
	    initItem: initItem
	};

/***/ },

/***/ 261:
/***/ function(module, exports) {

	'use strict';

	var items = [{
	    _id: 1,
	    name: 'Adidas',
	    price: 1000000,
	    picUrl: 'http://images.solecollector.com/complex/image/upload/c_fill,q_95,w_1100/adidas-nmd-hero_kixckw.jpg'
	}, {
	    _id: 2,
	    name: 'Nike',
	    price: 1250000,
	    picUrl: 'http://images2.nike.com/is/image/DotCom/PDP_HERO_ZOOM/511882_096_E_PREM/roshe-one-womens-shoe.jpg'
	}, {
	    _id: 3,
	    name: 'Dr. Martens',
	    price: 1750000,
	    picUrl: 'https://d2g7c2xxqyt3nq.cloudfront.net/AW16/Homepages/Week27/1461%20prod%20shot%20-%20Desktop.jpg'
	}, {
	    _id: 4,
	    name: 'Sperry',
	    price: 1200000,
	    picUrl: 'https://www.boscovs.com/wcsstore/boscovs/images/store/product/images/49321603607640430764027new.jpg'
	}];

	var getItems = function getItems() {
	    return items;
	};

	var getItem = function getItem(_id) {
	    return items.find(function (item) {
	        return item._id == _id;
	    });
	};

	module.exports = {
	    getItems: getItems,
	    getItem: getItem
	};

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(172),
	    connect = _require.connect;

	var _require2 = __webpack_require__(203),
	    Link = _require2.Link;

	var Item = function (_React$Component) {
	    _inherits(Item, _React$Component);

	    function Item() {
	        _classCallCheck(this, Item);

	        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
	    }

	    _createClass(Item, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                _id = _props._id,
	                name = _props.name,
	                price = _props.price,
	                picUrl = _props.picUrl;


	            return React.createElement(
	                'div',
	                { className: 'item' },
	                React.createElement(
	                    'div',
	                    { className: 'item-image' },
	                    React.createElement('img', { className: 'img-responsive', src: picUrl }),
	                    React.createElement(
	                        'div',
	                        { className: 'item-cover' },
	                        React.createElement(
	                            'h1',
	                            null,
	                            name
	                        ),
	                        React.createElement(
	                            'p',
	                            null,
	                            price
	                        ),
	                        React.createElement(
	                            Link,
	                            { to: '/' + _id, className: 'btn btn-success' },
	                            'Detail'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'h1',
	                    null,
	                    name
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    price
	                )
	            );
	        }
	    }]);

	    return Item;
	}(React.Component);

	module.exports = Item;

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var Admin = function (_React$Component) {
	    _inherits(Admin, _React$Component);

	    function Admin() {
	        _classCallCheck(this, Admin);

	        return _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).apply(this, arguments));
	    }

	    _createClass(Admin, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "h1",
	                    null,
	                    "Admin Page"
	                ),
	                React.createElement(
	                    "div",
	                    { "class": "container" },
	                    this.props.children
	                )
	            );
	        }
	    }]);

	    return Admin;
	}(React.Component);

	module.exports = Admin;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ItemForm = __webpack_require__(278);

	var AdminItems = function (_React$Component) {
	    _inherits(AdminItems, _React$Component);

	    function AdminItems() {
	        _classCallCheck(this, AdminItems);

	        return _possibleConstructorReturn(this, (AdminItems.__proto__ || Object.getPrototypeOf(AdminItems)).apply(this, arguments));
	    }

	    _createClass(AdminItems, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'Admin Items Page'
	                ),
	                React.createElement(ItemForm, null),
	                React.createElement('hr', null)
	            );
	        }
	    }]);

	    return AdminItems;
	}(React.Component);

	module.exports = AdminItems;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(172),
	    connect = _require.connect;

	var _require2 = __webpack_require__(260),
	    initItem = _require2.initItem;

	var ItemDetail = function (_React$Component) {
	    _inherits(ItemDetail, _React$Component);

	    function ItemDetail() {
	        _classCallCheck(this, ItemDetail);

	        return _possibleConstructorReturn(this, (ItemDetail.__proto__ || Object.getPrototypeOf(ItemDetail)).apply(this, arguments));
	    }

	    _createClass(ItemDetail, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log('mounted');
	            var _props = this.props,
	                dispatch = _props.dispatch,
	                routeParams = _props.routeParams;

	            dispatch(initItem(routeParams._id));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props$item = this.props.item,
	                _id = _props$item._id,
	                name = _props$item.name,
	                price = _props$item.price;


	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'This is Item Detail page for: ',
	                    name
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'Price: ',
	                    price
	                )
	            );
	        }
	    }]);

	    return ItemDetail;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        item: state.item
	    };
	})(ItemDetail);

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redux = __webpack_require__(179);

	var _require = __webpack_require__(267),
	    itemsReducer = _require.itemsReducer,
	    itemReducer = _require.itemReducer;

	function configure() {
	    var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


	    var reducer = redux.combineReducers({
	        items: itemsReducer,
	        item: itemReducer
	    });

	    var store = redux.createStore(reducer, initState);

	    return store;
	}

	module.exports = configure;

/***/ },

/***/ 267:
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

	var itemReducer = function itemReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    switch (action.type) {
	        case 'INIT_ITEM':
	            return Object.assign({}, action.item);
	        default:
	            return state;
	    }
	};

	module.exports = {
	    itemsReducer: itemsReducer,
	    itemReducer: itemReducer
	};

/***/ },

/***/ 268:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var ItemForm = function (_React$Component) {
	    _inherits(ItemForm, _React$Component);

	    function ItemForm() {
	        _classCallCheck(this, ItemForm);

	        return _possibleConstructorReturn(this, (ItemForm.__proto__ || Object.getPrototypeOf(ItemForm)).apply(this, arguments));
	    }

	    _createClass(ItemForm, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "row" },
	                React.createElement("div", { className: "col-sm-6" }),
	                React.createElement(
	                    "div",
	                    { className: "col-sm-6" },
	                    React.createElement(
	                        "form",
	                        { action: "" },
	                        React.createElement(
	                            "div",
	                            { className: "form-group" },
	                            React.createElement(
	                                "label",
	                                { htmlFor: "name" },
	                                "Name:"
	                            ),
	                            React.createElement("input", { type: "text", placeholder: "Enter item's name...", className: "form-control" })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "form-group" },
	                            React.createElement(
	                                "label",
	                                { htmlFor: "price" },
	                                "Price:"
	                            ),
	                            React.createElement("input", { type: "number", placeholder: "Enter item's price...", className: "form-control" })
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn btn-primary form-control" },
	                            "Add"
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ItemForm;
	}(React.Component);

	module.exports = ItemForm;

/***/ }

});