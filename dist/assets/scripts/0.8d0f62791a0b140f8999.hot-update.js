webpackHotUpdate(0,{

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(7);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function () {
		function _class(options) {
			(0, _classCallCheck3.default)(this, _class);
	
			var defaults = {
				el: '.js-body',
				dom: {
					item: '.js-item'
				}
			};
	
			this.options = _jquery2.default.extend(true, {}, defaults, options);
			this.$el = (0, _jquery2.default)(this.options.el);
			this.$document = (0, _jquery2.default)(document);
			return this;
		}
	
		(0, _createClass3.default)(_class, [{
			key: 'getDom',
			value: function getDom() {
				this.$item = this.$el.find(this.options.dom.item);
				return this;
			}
		}, {
			key: 'onInput',
			value: function onInput(e) {
				var $target = (0, _jquery2.default)(e.target);
				console.log('qwewqeqwe');
				console.log($target.value);
			}
		}, {
			key: 'render',
			value: function render() {
				if (this.$el.length) {
					this.getDom();
					this.$item.on('input', this.onInput.bind(this));
				}
				return this;
			}
		}]);
		return _class;
	}();

	exports.default = _class;

/***/ }

})
//# sourceMappingURL=0.8d0f62791a0b140f8999.hot-update.js.map