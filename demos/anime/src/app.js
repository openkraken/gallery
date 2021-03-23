import anime from './anime';
import { createElement, setElementStyle } from './utils';

let BODY = document.body;
let numberOfBars = 150;
let duration = 450;
let animation;

let bars = [];
let dots = [];

const WIDTH = '100vw';
const HEIGHT = '100vh';

function createDOM() {
  let barsWrapper;
  let dotsWrapper;

  let container = createElement('div', {
    style: {
      backgroundColor: '#252423',
      width: WIDTH,
      height: HEIGHT
    }
  }, [
    (barsWrapper = createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'space-between',
        'width': WIDTH,
        'height': HEIGHT,
        color: 'white'
      }
    }, (bars = []))),
    (dotsWrapper = createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'space-between',
        'width': WIDTH,
        'height': HEIGHT,
        color: 'white'
      }
    }, (dots = [
    ]))),
  ]);

  for (let i = 0; i < numberOfBars; i++) {
    let barEl = document.createElement('div');
    let dotEl = document.createElement('div');
    const each = 100 / numberOfBars;
    setElementStyle(barEl, {
      width: each + 'vw',
      height: each + 'vw',
      transformOrigin: each / 2 + 'vw ' + each / 2 + 'vw',
      backgroundImage: 'linear-gradient(180deg, #373734 0%, #242423 52%, #0D0D0C 100%)'
    });
    setElementStyle(dotEl, {
      width: each + 'vw',
      height: '2px',
      backgroundColor: '#FF4B4B'
    });

    barsWrapper.appendChild(barEl);
    dotsWrapper.appendChild(dotEl);
    bars.push(barEl);
    dots.push(dotEl);
  }

  BODY.appendChild(container);
}

function play() {
  let easings = [];
  for (let ease in anime.penner) easings.push(ease);
  easings.push('steps(' + anime.random(5, 20) + ')');
  easings.push('steps(' + anime.random(5, 20) + ')');
  easings.push('cubicBezier(0.545, 0.475, 0.145, 1)');
  let ease = easings[anime.random(0, easings.length - 1)];

  animation = anime.timeline({
    duration: duration,
    easing: ease,
    complete: play
  })
    .add({
      targets: bars,
      scaleY: anime.stagger([1, 100], { easing: ease, from: 'center', direction: 'reverse' }),
      delay: anime.stagger(7, { from: 'center' })
    })
    .add({
      targets: dots,
      translateY: anime.stagger(['-160px', '160px'], { easing: ease, from: 'last' }),
      delay: anime.stagger(7, { from: 'center' })
    }, 0);

}
createDOM();
play();
