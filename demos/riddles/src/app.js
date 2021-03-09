import { render, createElement } from 'rax';
import DriverUniversal from 'driver-universal';
import App from './Riddles';

render(<App />, null, {
  driver: DriverUniversal,
});
