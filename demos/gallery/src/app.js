import { createElement, render } from 'rax';
import driver from 'driver-universal';
import App from './pages/Home';

document.body.style.backgroundColor = 'rgb(36, 30, 47)';

render(<App />, null, { driver });