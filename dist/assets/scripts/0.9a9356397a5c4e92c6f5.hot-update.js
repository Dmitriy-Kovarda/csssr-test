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
					// $el.find('input').last().focus();
					var last = $el.find('input').last();
					console.log(last);
					// last.on('focus', this.onFocus.bind(this));
					last.focus();
				} else if (value.length >= 46) {
					$el.append("<input type='text' class='item js-item input-text'>");
					// $el.find('input').last().focus();
					console.log($el.children().length);
				} else {
					console.log('not zero');
				}
				console.log(value.length);
			}
		}, {
			key: 'onFocus',
			value: function onFocus(e) {
				console.log('qweqwe');
				var $target = (0, _jquery2.default)(e.target);
				var value = $target.val();
				setTimeout(function () {
					if ($target.selfSelectionRange) {
						$target.selfSelectionRange(value.length, value.length);
						console.log('qweewq');
					} else if ($target.createTextRange) {
						var range = $target.createTextRange;
						console.log(range);
						$target.createTextRange.collapse(true);
						$target.createTextRange.moveEnd('character', value.length);
						$target.createTextRange.moveStart('character', value.length);
						$target.createTextRange.select();
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
//# sourceMappingURL=0.9a9356397a5c4e92c6f5.hot-update.js.map