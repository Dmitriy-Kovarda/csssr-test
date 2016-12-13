import $ from 'jquery';

export default class {
	constructor(options) {
		const defaults = {
			el: '.js-slider',
			dom: {
				slider: '.js-sliderbox',
				button: '.js-slider-button',
			}
		};

		this.options = $.extend(true, {}, defaults, options);
		this.$el = $(this.options.el);
		this.$document = $(document);
		this.isStopMove = true;
		return this;
	}

	getDom() {
		this.$button = this.$el.find(this.options.dom.button);
		this.$slider = this.$el.find(this.options.dom.slider);
		return this;
	}

	moveHandler(e) {
		if (!this.isStopMove) {
			const sliderWidth = this.$slider.width();
			const holderOffset = this.$slider.offset().left;
			let posX = e.pageX - holderOffset;
			posX = Math.min(Math.max(0, posX), sliderWidth);
			this.$button.css({
				left: posX
			});
		}
	}

	mouseDown() {
		if (this.isStopMove) {
			this.isStopMove = false;
		}
	}

	mouseUp() {
		if (!this.isStopMove) {
			this.isStopMove = true;
		}
	}

	render() {
		if (this.$el.length) {
			this.getDom();
			this.$document.on('mousemove', this.moveHandler.bind(this));
			this.$button.on('mousedown', this.mouseDown.bind(this));
			this.$document.on('mouseup', this.mouseUp.bind(this));
		}
		return this;
	}
}
