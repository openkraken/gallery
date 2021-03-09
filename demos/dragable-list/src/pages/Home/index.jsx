import { Component, createElement } from 'rax';
import { Motion, spring } from '../../react-motion/react-motion';
import range from 'lodash.range';
import './index.css';

const list = [
  'IPSUM',
  'DOLOR',
  'LOREM',
  'SIT',
  'AMET',
  'CONSECTRTUR',
  'ADIPISICING',
  'ELIT',
];

function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const springConfig = { stiffness: 300, damping: 50 };
const itemsCount = 8;
const ITEM_GAP = screen.width * 110 / 750;

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      originalPosOfLastPressed: 0,
      order: range(itemsCount),
    };
  };

  componentDidMount() {
    document.body.addEventListener('touchmove', this.handleTouchMove);
    document.body.addEventListener('touchend', this.handleMouseUp);
  };

  handleTouchStart = (key, pressLocation, e) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  };

  handleTouchMove = (e) => {
    this.handleMouseMove(e.touches[0]);
  };

  handleMouseDown = (pos, pressY, { pageY }) => {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos,
    });
  };

  handleMouseMove = ({ pageY }) => {
    const { isPressed, topDeltaY, order, originalPosOfLastPressed } = this.state;
    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentRow = clamp(Math.round(mouseY / ITEM_GAP), 0, itemsCount - 1);
      let newOrder = order;

      if (currentRow !== order.indexOf(originalPosOfLastPressed)) {
        newOrder = reinsert(order, order.indexOf(originalPosOfLastPressed), currentRow);
      }

      this.setState({ mouseY: mouseY, order: newOrder });
    }
  };

  handleMouseUp = () => {
    this.setState({ isPressed: false, topDeltaY: 0 });
  };

  render() {
    const { mouseY, isPressed, originalPosOfLastPressed, order } = this.state;

    return (
      <div className="demo">
        {range(itemsCount).map(i => {
          const style = originalPosOfLastPressed === i && isPressed
            ? {
              scale: spring(1.1, springConfig),
              shadow: spring(16, springConfig),
              y: mouseY,
            }
            : {
              scale: spring(1, springConfig),
              shadow: spring(1, springConfig),
              y: spring(order.indexOf(i) * ITEM_GAP, springConfig),
            };
          return (
            <Motion style={style} key={i}>
              {({ scale, shadow, y }) => {
                return (
                  <div
                    onTouchEnd={this.handleMouseDown.bind(null, i, y)}
                    onTouchStart={this.handleTouchStart.bind(null, i, y)}
                    className={'demo-item demo-item-' + i % 4}
                    style={{
                      transform: `translate3d(0px, ${y}px, 0px) scale(${scale}, ${scale})`,
                      zIndex: i === originalPosOfLastPressed ? 99 : i,
                    }}
                  >
                    <div className="item-content">
                      <span className="item-text">{i + 1}. {list[i]}</span>
                    </div>
                    <DragHandle className="item-icon" />
                  </div>
                );
              }}
            </Motion>
          );
        })}
      </div>
    );
  };
}

function DragHandle(props) {
  const lineStyle = {
    width: '20rpx',
    height: '4rpx',
    marginBottom: '2px',
    backgroundColor: '#ffffff',
  };
  return (<div {...props}>
    <div style={lineStyle} />
    <div style={lineStyle} />
    <div style={lineStyle} />
  </div>);
}