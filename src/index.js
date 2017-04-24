import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

document.onkeydown = function(event) {
	event = event || window.event;
	var escapePress = false;
	if ("key" in event) {
		escapePress = (event.key === "Escape" || event.key === "Esc");
	} else {
		escapePress = (event.keyCode === 27);
	}
	if (escapePress) {
		document.getElementById("project-1").checked = false;
		document.getElementById("project-2").checked = false;
		document.getElementById("project-3").checked = false;
	}
};