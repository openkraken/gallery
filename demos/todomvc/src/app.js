import { render, createElement } from 'rax';
import DriverUniversal from 'driver-universal';
import TodoMVC from './TodoMVC';

render(<TodoMVC />, null, {
  driver: DriverUniversal,
});
