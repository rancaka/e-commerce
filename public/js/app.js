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

	var _configureStore = __webpack_require__(294);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(297);

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
	var Admin = __webpack_require__(291);
	var AdminItems = __webpack_require__(292);
	var ItemDetail = __webpack_require__(293);

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
	    getItems = _require2.getItems;

	var Item = __webpack_require__(287);

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

	            dispatch(getItems());
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

	module.exports = {
	    createItem: createItem,
	    findItem: findItem,
	    getItems: getItems,
	    updateItem: updateItem
	};

	function createItem(item) {
	    return function (dispatch) {
	        return ItemAPI.create(item).then(function (newItem) {
	            dispatch(_createItem(newItem));
	        }, function (err) {
	            console.log(err);
	        });
	    };
	}

	function findItem(_id) {
	    return function (dispatch) {
	        return ItemAPI.find(_id).then(function (item) {
	            dispatch(_findItem(item));
	        }, function (err) {
	            console.log(err);
	        });
	    };
	}

	function getItems() {
	    return function (dispatch) {
	        return ItemAPI.get().then(function (items) {
	            dispatch(_getItems(items));
	        }, function (err) {
	            console.log(err);
	        });
	    };
	}

	function updateItem(item) {
	    return function (dispatch) {
	        return ItemAPI.update(item).then(function (updatedItem) {
	            dispatch(_updateItem(updatedItem));
	        }, function (err) {
	            console.log(err);
	        });
	    };
	}

	//Private actions
	//Use this after getting data from API
	//======================================================================================================================
	function _createItem(item) {
	    return {
	        type: 'CREATE_ITEM',
	        item: item
	    };
	}

	function _findItem(item) {
	    return {
	        type: 'FIND_ITEM',
	        item: item
	    };
	}

	function _getItems(items) {
	    return {
	        type: 'GET_ITEMS',
	        items: items
	    };
	}

	function _updateItem(updatedItem) {
	    return {
	        type: 'UPDATE_ITEM',
	        updatedItem: updatedItem
	    };
	}

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var axios = __webpack_require__(262);

	var rootUrl = 'http://localhost:3000';

	module.exports = {
	    create: create,
	    find: find,
	    get: get,
	    update: update

	};

	function create(item) {
	    return axios.post(rootUrl + '/api/items', { item: item }).then(function (newItem) {
	        return newItem.data;
	    }, function (err) {
	        throw err;
	    });
	}

	function find(_id) {
	    return axios.get(rootUrl + '/api/item/' + _id).then(function (item) {
	        return item.data;
	    }, function (err) {
	        throw err;
	    });
	}

	function get() {
	    return axios.get(rootUrl + '/api/items').then(function (items) {
	        return items.data;
	    }, function (err) {
	        throw err;
	    });
	}

	function update(item) {
	    return axios.put(rootUrl + '/api/item/' + item._id, { item: item }).then(function (updatedItem) {
	        return updatedItem.data;
	    }, function (err) {
	        throw err;
	    });
	}

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);

	var _require = __webpack_require__(203),
	    Link = _require.Link;

	var ItemEditForm = __webpack_require__(289);

	var Item = function (_React$Component) {
	    _inherits(Item, _React$Component);

	    function Item() {
	        _classCallCheck(this, Item);

	        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

	        _this.openEditForm = _this.openEditForm.bind(_this);
	        return _this;
	    }

	    _createClass(Item, [{
	        key: 'openEditForm',
	        value: function openEditForm() {
	            jQuery('#' + this.props._id).modal('show');
	        }
	    }, {
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
	                        ),
	                        React.createElement(
	                            'button',
	                            { className: 'btn btn-primary', onClick: this.openEditForm },
	                            'Edit'
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
	                ),
	                React.createElement(ItemEditForm, this.props)
	            );
	        }
	    }]);

	    return Item;
	}(React.Component);

	module.exports = Item;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(288)))

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var ItemForm = __webpack_require__(290);

	var ItemEditForm = function (_React$Component) {
	    _inherits(ItemEditForm, _React$Component);

	    function ItemEditForm() {
	        _classCallCheck(this, ItemEditForm);

	        return _possibleConstructorReturn(this, (ItemEditForm.__proto__ || Object.getPrototypeOf(ItemEditForm)).apply(this, arguments));
	    }

	    _createClass(ItemEditForm, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                _id = _props._id,
	                name = _props.name;

	            return React.createElement(
	                'div',
	                { id: _id, className: 'modal fade', tabIndex: '-1', role: 'dialog' },
	                React.createElement(
	                    'div',
	                    { className: 'modal-dialog', role: 'document' },
	                    React.createElement(
	                        'div',
	                        { className: 'modal-content' },
	                        React.createElement(
	                            'div',
	                            { className: 'modal-header' },
	                            React.createElement(
	                                'button',
	                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                                React.createElement(
	                                    'span',
	                                    { 'aria-hidden': 'true' },
	                                    '\xD7'
	                                )
	                            ),
	                            React.createElement(
	                                'h4',
	                                { className: 'modal-title' },
	                                'Edit ',
	                                name
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'modal-body' },
	                            React.createElement(ItemForm, _extends({ type: 'Update' }, this.props))
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ItemEditForm;
	}(React.Component);

	module.exports = ItemEditForm;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(172),
	    connect = _require.connect;

	var _require2 = __webpack_require__(260),
	    createItem = _require2.createItem,
	    updateItem = _require2.updateItem;

	var ItemForm = function (_React$Component) {
	    _inherits(ItemForm, _React$Component);

	    function ItemForm() {
	        _classCallCheck(this, ItemForm);

	        var _this = _possibleConstructorReturn(this, (ItemForm.__proto__ || Object.getPrototypeOf(ItemForm)).call(this));

	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }

	    _createClass(ItemForm, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            var _props = this.props,
	                _id = _props._id,
	                name = _props.name,
	                price = _props.price,
	                dispatch = _props.dispatch;


	            if (this.name.value.length > 0 && this.price.value.length > 0) {
	                var item = {
	                    _id: null || _id,
	                    name: this.name.value || name,
	                    price: this.price.value || price
	                };

	                switch (this.props.type) {
	                    case 'Create':
	                        dispatch(createItem(item));
	                        this.name.value = '';
	                        this.price.value = '';
	                        break;
	                    case 'Update':
	                        dispatch(updateItem(item));
	                        jQuery('#' + _id).modal('hide');
	                        break;
	                    default:
	                        break;
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props2 = this.props,
	                name = _props2.name,
	                price = _props2.price,
	                type = _props2.type;


	            return React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement('div', { className: 'col-sm-6' }),
	                React.createElement(
	                    'div',
	                    { className: 'col-sm-6' },
	                    React.createElement(
	                        'form',
	                        { onSubmit: this.handleSubmit },
	                        React.createElement(
	                            'div',
	                            { className: 'form-group' },
	                            React.createElement(
	                                'label',
	                                { style: { width: '100%' } },
	                                'Name:',
	                                React.createElement('input', { ref: function ref(name) {
	                                        return _this2.name = name;
	                                    }, type: 'text', defaultValue: name, placeholder: 'Enter item\'s name...', className: 'form-control' })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'form-group' },
	                            React.createElement(
	                                'label',
	                                { style: { width: '100%' } },
	                                'Price:',
	                                React.createElement('input', { ref: function ref(price) {
	                                        return _this2.price = price;
	                                    }, type: 'number', defaultValue: price, placeholder: 'Enter item\'s price...', className: 'form-control' })
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { className: 'btn btn-primary form-control' },
	                            type
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ItemForm;
	}(React.Component);

	module.exports = connect()(ItemForm);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(288)))

/***/ },

/***/ 291:
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
	                    { className: "container" },
	                    this.props.children
	                )
	            );
	        }
	    }]);

	    return Admin;
	}(React.Component);

	module.exports = Admin;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var ItemForm = __webpack_require__(290);
	var ItemList = __webpack_require__(259);

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
	                React.createElement(ItemForm, { type: 'Create' }),
	                React.createElement('hr', null),
	                React.createElement(ItemList, null)
	            );
	        }
	    }]);

	    return AdminItems;
	}(React.Component);

	module.exports = AdminItems;

/***/ },

/***/ 293:
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
	    findItem = _require2.findItem;

	var ItemDetail = function (_React$Component) {
	    _inherits(ItemDetail, _React$Component);

	    function ItemDetail() {
	        _classCallCheck(this, ItemDetail);

	        return _possibleConstructorReturn(this, (ItemDetail.__proto__ || Object.getPrototypeOf(ItemDetail)).apply(this, arguments));
	    }

	    _createClass(ItemDetail, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _props = this.props,
	                dispatch = _props.dispatch,
	                routeParams = _props.routeParams;

	            dispatch(findItem(routeParams._id));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props$item = this.props.item,
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

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redux = __webpack_require__(179);
	var thunk = __webpack_require__(295).default;

	var _require = __webpack_require__(296),
	    itemsReducer = _require.itemsReducer,
	    itemReducer = _require.itemReducer;

	function configure() {
	    var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


	    var reducer = redux.combineReducers({
	        items: itemsReducer,
	        item: itemReducer
	    });

	    var store = redux.createStore(reducer, initState, redux.compose(redux.applyMiddleware(thunk)));

	    return store;
	}

	module.exports = configure;

/***/ },

/***/ 296:
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	module.exports = {
	    itemsReducer: itemsReducer,
	    itemReducer: itemReducer
	};

	function itemsReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'GET_ITEMS':
	            return [].concat(_toConsumableArray(action.items));
	        case 'CREATE_ITEM':
	            return [].concat(_toConsumableArray(state), [action.item]);
	        case 'UPDATE_ITEM':
	            return state.map(function (item) {
	                if (item._id === action.updatedItem._id) {
	                    return action.updatedItem;
	                }
	                return item;
	            });
	        default:
	            return state;
	    }
	}

	function itemReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    switch (action.type) {
	        case 'FIND_ITEM':
	            return Object.assign({}, action.item);
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 297:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});