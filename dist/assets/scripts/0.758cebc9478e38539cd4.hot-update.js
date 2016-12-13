webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _js = __webpack_require__(5);
	
	var _js2 = _interopRequireDefault(_js);
	
	var _about = __webpack_require__(26);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	(0, _jquery2.default)(function () {
		return new _js2.default().render();
	});
	(0, _jquery2.default)(function () {
		return new _about2.default().render();
	});

/***/ },

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
				$el.find(this.$item.last().focus());
	
				if ($target.val().length > 0) {
					console.log('not zero');
				} else {
					console.log('0');
					$target.remove();
					// console.log($el.children());
					// $('#ddd').trigger('click');
					// $('#ddd').addClass('ddd');
					// $('#ddd').focus();
				}
				console.log($target.val().length);
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
//# sourceMappingURL=0.758cebc9478e38539cd4.hot-update.js.map