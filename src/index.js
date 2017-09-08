import _ from 'lodash';
// Lodash, now imported by this script
import $ from "jquery";
import './style.css';
import Icon from './dog.jpg';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

function jjquery() {
	$(function(){
		$("#obj").append("hello im jquery yogg");
    
	});
}

function ess666() {
	const getMessage = () => "Hello es66";
  var evens = [2,4,6,8];
  var odd = evens.map(v => v + 1);
	document.getElementById('output').innerHTML = getMessage();
  $(function(){
    $("#odd").append(odd);
  });
}

document.body.appendChild(component());
jjquery();
ess666();