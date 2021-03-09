import { createElement, render } from 'rax';
import driver from 'driver-universal';
import App from './pages/Home';

render(<App />, null, { driver });