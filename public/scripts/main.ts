import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import App from '../components/app';

const root = document.getElementById('react');
const reactDomRoot = root && ReactDOM.createRoot(root);

let isOn = true;

function render(): void {
  isOn = !isOn;
  reactDomRoot.render(React.createElement(App, {isOn, render}));
}

if (!root) {
  alert('문서에 #react 요소가 존재하지 않습니다.');
} else {
  render();
}
