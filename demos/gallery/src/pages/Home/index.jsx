import { createElement } from 'rax';
import View from 'rax-view';

import styles from './index.css';

import Card from '../../components/Card';

export default function Home() {
  return (
    <View style={styles.home}>
      <Card bundle="demos/anime/build/kraken/index.js" banner="demos/anime/banner.png" title="Anime" desc="A animation demo built with anime.js" />
      <Card bundle="demos/granule/build/kraken/index.js" banner="demos/granule/banner.png" title="Granule" desc="Granule effect built with CSS transform" />
      <Card bundle="demos/dragable-list/build/kraken/index.js" banner="demos/dragable-list/banner.png" title="Dragable List" desc="A re-orderable list that animates nicely built on top of react-motion" />
      <Card bundle="demos/riddles/build/kraken/index.js" banner="demos/riddles/banner.png" title="Riddles" desc="A demo use nested and stylized text" />
      <Card bundle="demos/grid-vue/dist/js/app.js" banner="demos/grid-vue/banner.png" title="Grid" desc="A grid demo for Vue.js" />
      <Card bundle="demos/todomvc/build/kraken/index.js" banner="demos/todomvc/banner.png" title="TodoMVC" desc="Todo application with kraken" />
      <Card bundle="demos/wallet/build/kraken/index.js" banner="demos/wallet/banner.png" title="Wallet" desc="Wallet application with kraken" />
    </View>
   )
}
