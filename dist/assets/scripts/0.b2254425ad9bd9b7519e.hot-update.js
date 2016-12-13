webpackHotUpdate(0,{

/***/ 5:
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
				el: '.js-slider',
				dom: {
					slider: '.js-sliderbox',
					button: '.js-slider-button',
					block1: '.js-block1',
					block2: '.js-block2',
					block3: '.js-block3',
					block4: '.js-block4'
				}
			};
	
			this.options = _jquery2.default.extend(true, {}, defaults, options);
			this.$el = (0, _jquery2.default)(this.options.el);
			this.$document = (0, _jquery2.default)(document);
			this.isStopMove = true;
			return this;
		}
	
		(0, _createClass3.default)(_class, [{
			key: 'getDom',
			value: function getDom() {
				this.$button = this.$el.find(this.options.dom.button);
				this.$slider = this.$el.find(this.options.dom.slider);
				this.$block1 = this.$el.find(this.options.dom.block1);
				this.$block2 = this.$el.find(this.options.dom.block2);
				this.$block3 = this.$el.find(this.options.dom.block3);
				this.$block4 = this.$el.find(this.options.dom.block4);
				return this;
			}
		}, {
			key: 'moveHandler',
			value: function moveHandler(e) {
				if (!this.isStopMove) {
					var sliderWidth = this.$slider.width();
					var holderOffset = this.$slider.offset().left;
					var posX = e.pageX - holderOffset;
					posX = Math.min(Math.max(0, posX), sliderWidth);
					this.$button.css({
						left: posX
					});
				}
			}
		}, {
			key: 'mouseDown',
			value: function mouseDown() {
				if (this.isStopMove) {
					this.isStopMove = false;
				}
			}
		}, {
			key: 'mouseUp',
			value: function mouseUp() {
				if (!this.isStopMove) {
					this.isStopMove = true;
				}
			}
		}, {
			key: 'block1Click',
			value: function block1Click() {}
		}, {
			key: 'render',
			value: function render() {
				if (this.$el.length) {
					this.getDom();
					this.$document.on('mousemove', this.moveHandler.bind(this));
					this.$button.on('mousedown', this.mouseDown.bind(this));
					this.$document.on('mouseup', this.mouseUp.bind(this));
				}
				return this;
			}
		}]);
		return _class;
	}();

	exports.default = _class;

/***/ }

})
//# sourceMappingURL=0.b2254425ad9bd9b7519e.hot-update.js.map