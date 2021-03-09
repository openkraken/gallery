import { createElement, render } from 'rax';
import driver from 'driver-universal';
import App from './pages/Home';

document.body.style.backgroundColor = '#f9f9f9';

render(<App />, null, { driver });