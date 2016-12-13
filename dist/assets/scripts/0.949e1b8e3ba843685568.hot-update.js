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
	
	var _jqueryUi = __webpack_require__(26);
	
	var _jqueryUi2 = _interopRequireDefault(_jqueryUi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function () {
		function _class(options) {
			(0, _classCallCheck3.default)(this, _class);
	
			console.log(_jqueryUi2.default);
			var defaults = {
				el: '.js-slider',
				dom: {
					slider: '.js-sliderbox',
					button: '.js-slider-button'
				}
			};
	
			this.options = _jquery2.default.extend(true, {}, defaults, options);
			this.$el = (0, _jquery2.default)(this.options.el);
			this.$document = (0, _jquery2.default)(document);
			this.isStopMove = false;
			return this;
		}
	
		(0, _createClass3.default)(_class, [{
			key: 'getDom',
			value: function getDom() {
				this.$button = this.$el.find(this.options.dom.button);
				this.$slider = this.$el.find(this.options.dom.slider);
				return this;
			}
	
			// mouseDown(e) {
			// 	e.preventDefault();
			// 	this.$document.on('mousemove', this.moveHandler.bind(this));
			// }
	
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
				this.isStopMove = false;
			}
		}, {
			key: 'mouseUp',
			value: function mouseUp() {
				this.isStopMove = true;
			}
	
			/*stopHandler() {
	  	this.$document.removeEventListener('mousemove', this.moveHandler);
	  	this.$document.removeEventListener('mouseup', this.stopHandler);
	  	console.log('qwewq');
	  }*/
	
		}, {
			key: 'render',
			value: function render() {
				if (this.$el.length) {
					this.getDom();
					// this.$button.on('mousedown', this.mouseDown.bind(this));
					this.$document.on('mousemove', this.moveHandler.bind(this));
					this.$document.on('mousedown', this.mouseDown.bind(this));
					this.$document.on('mouseup', this.mouseUp.bind(this));
	
					// this.$document.on('mouseup', this.stopHandler.bind(this));
				}
				return this;
			}
		}]);
		return _class;
	}();

	exports.default = _class;

/***/ }

})
//# sourceMappingURL=0.949e1b8e3ba843685568.hot-update.js.map