import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Js from '../blocks/js/js.js';
import About from '../blocks/about/about.js';

$(() => {
	svg4everybody();
});
$(() => new Js().render());
$(() => new About().render());

