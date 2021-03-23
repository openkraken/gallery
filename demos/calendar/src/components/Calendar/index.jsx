import { createElement, Component } from 'rax';
import moment from 'moment';
import './index.css';

const Heading = ({date, changeMonth, resetDate}) => (
  <div className="calendar--nav">
    <a className="calendar--nav-a" onClick={() => changeMonth(date.month() - 1)}>‹</a>
    <div className="calendar--nav-h1" onClick={() => resetDate()}>{date.format('MMMM')} <span className="calendar--nav-small">{date.format('YYYY')}</span></div>
    <a className="calendar--nav-a calendar--nav-a-last-child" onClick={() => changeMonth(date.month() + 1)}>›</a>
  </div>
);

const Day = ({currentDate, date, startDate, endDate, onClick}) => {
  let className = ['calendar--days-span'];

  if (moment().isSame(date, 'day')) {
    className.push('calendar--days-span-active');
  }

  if (date.isSame(startDate, 'day')) {
    className.push('calendar--days-span-start');
  }

  if (date.isBetween(startDate, endDate, 'day')) {
    className.push('calendar--days-span-between');
  }

  if (date.isSame(endDate, 'day')) {
    if (date.isSame(startDate, 'day')) {
      className.push('calendar--days-span-start-end');
    } else {
      className.push('calendar--days-span-end');
    } 
  }

  if (! date.isSame(currentDate, 'month')) {
    className.push('calendar--days-span-muted');
  }

  return (
    <span onClick={() => onClick(date)} currentDate={date} className={className.join(' ')}>{date.date()}</span>
  )
};

const Days = ({date, startDate, endDate, onClick}) => {
  const thisDate = moment(date);
  const daysInMonth = moment(date).daysInMonth();
  const firstDayDate = moment(date).startOf('month');
  const previousMonth = moment(date).subtract(1, 'month');
  const previousMonthDays = previousMonth.daysInMonth();
  const nextsMonth = moment(date).add(1, 'month');
  let days = [];
  let labels = [];

  for (let i = 1; i <= 7; i++) {
    labels.push(<span className="calendar--days-span calendar--days-span-label label">{moment().day(i).format('ddd')}</span>);
  }

  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <Day key={moment(previousMonth).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(previousMonth)} startDate={startDate} endDate={endDate} />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i);

    days.push(
      <Day key={moment(thisDate).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(thisDate)} startDate={startDate} endDate={endDate} />
    );
  }

  const daysCount = days.length;
  for (let i = 1; i <= (42 - daysCount); i++) {
    nextsMonth.date(i);
    days.push(
      <Day key={moment(nextsMonth).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(nextsMonth)} startDate={startDate} endDate={endDate} />
    );
  }

  return (
    <div className="calendar--days">
      {labels.concat()}
      {days.concat()}
    </div>
  );
};

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      startDate: moment().subtract(5, 'day'),
      endDate: moment().add(3, 'day')
    };
  }

  resetDate() {
    this.setState({
      date: moment()
    });
  }

  changeMonth(month) {
    const {date} = this.state;

    date.month(month);

    this.setState(
      date
    );
  }

  changeDate(date) {
    let {startDate, endDate} = this.state;

    if (startDate === null || date.isBefore(startDate, 'day') || ! startDate.isSame(endDate, 'day')) {
      startDate = moment(date);
      endDate = moment(date);
    } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
      startDate = null;
      endDate = null;
    } else if (date.isAfter(startDate, 'day')) {
      endDate = moment(date);
    }

    this.setState({
      startDate,
      endDate
    });
  }

  render() {
    const {date, startDate, endDate} = this.state;

    return (
      <div className="calendar">
        <Heading date={date} changeMonth={(month) => this.changeMonth(month)} resetDate={() => this.resetDate()} />

        <Days onClick={(date) => this.changeDate(date)} date={date} startDate={startDate} endDate={endDate} />
      </div>
    );
  }
}

export default Calendar;
