import { createElement, createRef, useState, useEffect, useLayoutEffect } from 'rax';

const maxV = 6;
const maxSize = 10;
const minSize = 6;
const dotCount = 100;
const windowWidth = screen.width;
const windowHeight = screen.height;

function getRandomDotData() {
  let list = [];

  for (let i = 0; i < dotCount; i++) {
    list.push({
      color: getRandomColor(100),
      size: Math.random() * (maxSize - minSize) + minSize,
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      vx: Math.random() * maxV * 2 - maxV,
      vy: Math.random() * maxV * 2 - maxV
    });
  }

  return list;
}

function updateDot(list) {
  for (let i = 0; i < list.length; i ++) {
    let dot = list[i];
    dot.x += dot.vx;
    dot.y += dot.vy;

    if (dot.x < 0 || dot.x > windowWidth) {
      dot.vx *= -1;
    }

    if (dot.y < 0 || dot.y > windowHeight) {
      dot.vy *= -1;
    }
  }

  return list.slice();
}

function getRandomColor(min) {
  return 'rgb(cr, cg, cb)'.replace(
    'cr', (Math.random() * (255 - min)) | 0 + min).replace(
      'cg', (Math.random() * (255 - min)) | 0 + min).replace(
        'cb', (Math.random() * (255 - min)) | 0 + min)
};

function Dot(props) {
  return <div
    style={{
      width: `${props.size}px`,
      height: `${props.size}px`,
      position: 'absolute',
      // left: `${props.x}px`,
      // top: `${props.y}px`,
      transform: `translate(${props.x}px, ${props.y}px)`,
      backgroundColor: props.color,
      borderRadius: `${props.size}px`,
    }} />
}

function Game(props) {
  let {data} = props;
  return data.map((d, i) => <Dot
    key={i}
    {...data[i]}
  />)
}


export default function Home() {
  global.start = Date.now();
  const [dotData, setDotData] = useState(getRandomDotData());

  useLayoutEffect(() => {
    // global.start = Date.now();
    requestAnimationFrame(function animate() {
      setDotData(updateDot(dotData));
      requestAnimationFrame(animate);
    });
  }, []);

  return (
    <div style={{ width: screen.width + 'px', height: screen.height + 'px', backgroundColor: 'black', position: 'relative' }}>
      <Game data={dotData} />
    </div>
  );
}
