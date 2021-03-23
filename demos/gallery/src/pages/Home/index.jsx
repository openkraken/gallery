import { createElement } from 'rax';
import View from 'rax-view';

import './index.css';

import Card from '../../components/Card';

export default function Home() {
  return (
    <View className="home">
      <p className="title">Framworks</p>
      <Card bundle="demos/hello-vue/dist/js/app.js" banner="demos/hello-vue/banner.png" title="Vue" desc="A hello demo built with Vue.js" />
      <Card bundle="demos/hello-react/build/static/js/bundle.js" banner="demos/hello-react/banner.png" title="React" desc="A hello demo built with React.js" />
      <Card bundle="demos/hello-rax/build/kraken/index.js" banner="demos/hello-rax/banner.png" title="Rax" desc="A hello demo built with Rax.js" />
      <p className="title">Gallery</p>
      <Card bundle="demos/anime/build/kraken/index.js" banner="demos/anime/banner.png" title="Anime" desc="A animation demo built with anime.js" />
      <Card bundle="demos/calendar/build/kraken/index.js" banner="demos/calendar/banner.png" title="Calendar" desc="Calendar component with kraken" />
      <Card bundle="demos/granule/build/kraken/index.js" banner="demos/granule/banner.png" title="Granule" desc="Granule effect built with CSS transform" />
      <Card bundle="demos/dragable-list/build/kraken/index.js" banner="demos/dragable-list/banner.png" title="Dragable List" desc="A re-orderable list that animates nicely built on top of react-motion" />
      <Card bundle="demos/riddles/build/kraken/index.js" banner="demos/riddles/banner.png" title="Riddles" desc="A demo use nested and stylized text" />
      <Card bundle="demos/data-grid/dist/js/app.js" banner="demos/data-grid/banner.png" title="Grid" desc="A data grid demo use Vue.js" />
      <Card bundle="demos/todomvc/build/kraken/index.js" banner="demos/todomvc/banner.png" title="TodoMVC" desc="Todo application with kraken" />
      <Card bundle="demos/wallet/build/kraken/index.js" banner="demos/wallet/banner.png" title="Wallet" desc="Wallet application with kraken" />
      <Card bundle="demos/order/build/kraken/index.js" banner="demos/order/banner.png" title="Order" desc="Order page with kraken" />
    </View>




   )
}
