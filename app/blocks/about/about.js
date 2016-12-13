import $ from 'jquery';

export default class {
	constructor(options) {
		const defaults = {
			el: '.js-body',
			dom: {
				item: '.js-item'
			}
		};

		this.options = $.extend(true, {}, defaults, options);
		this.$el = $(this.options.el);
		this.$document = $(document);
		return this;
	}

	getDom() {
		this.$item = this.$el.find(this.options.dom.item);
		return this;
	}

	onInput(e) {
		const $target = $(e.target);
		const $el = $target.parent();
		const value = $target.val();
		if (value.length < 1) {
			$target.remove();	
			const last = $el.find('input').last();
			last.focus();
		}
		else if (value.length >= 42 ) {
			$el.append("<input type='text' class='about__text js-item'>");
			const last = $el.find('input').last();
			last.focus();
			last.on('focus', this.onFocus.bind(this));
			last.on('input', this.onInput.bind(this));
		}	
	}

	onFocus(e) {
		const $target = $(e.target);
		const input = $target.get(0);
		const value = input.value;		
		setTimeout(function() {
			if (input.setSelectionRange) {
				input.setSelectionRange(value.length, value.length);
			}
			else if (input.createTextRange) {
				const range = input.createTextRange;
				range.collapse(true);
				range.moveEnd('character', value.length);
				range.moveStart('character', value.length);
				range.select();
			}
		}, 10);
	}

	render() {
		if (this.$el.length) {
			this.getDom();
			this.$item.on('input', this.onInput.bind(this));
			this.$item.on('focus', this.onFocus.bind(this));
		}
		return this;
	}
}