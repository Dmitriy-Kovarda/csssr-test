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
				var $el = $target.parent();
				var value = $target.val();
				if (value.length < 1) {
					console.log('zero');
					$target.remove();
					var last = $el.find('input').last();
					last.focus();
				} else if (value.length >= 46) {
					$el.append("<input type='text' class='item js-item input-text'>");
					var _last = $el.find('input').last();
					_last.focus();
					_last.on('focus', this.onFocus());
					_last.on('input', this.onInput());
				} else {
					console.log('not zero');
				}
			}
		}, {
			key: 'onFocus',
			value: function onFocus(e) {
				var $target = (0, _jquery2.default)(e.target);
				var input = $target.get(0);
				var value = input.value;
				setTimeout(function () {
					if (input.setSelectionRange) {
						input.setSelectionRange(value.length, value.length);
					} else if (input.createTextRange) {
						var range = input.createTextRange;
						range.collapse(true);
						range.moveEnd('character', value.length);
						range.moveStart('character', value.length);
						range.select();
					}
				}, 10);
			}
		}, {
			key: 'render',
			value: function render() {
				if (this.$el.length) {
					this.getDom();
					this.$item.on('input', this.onInput.bind(this));
					this.$item.on('focus', this.onFocus.bind(this));
				}
				return this;
			}
		}]);
		return _class;
	}();

	exports.default = _class;

/***/ }

})
//# sourceMappingURL=0.21f12920ad9141a4f168.hot-update.js.map