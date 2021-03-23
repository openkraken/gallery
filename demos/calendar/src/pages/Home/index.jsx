import { createElement } from 'rax';
import Calendar from '../../components/Calendar';
import './index.css';

export default function Home() {
  return (
    <div className="home">
      <div className="title">Calendar</div>
      <Calendar />
    </div>
  );
}
