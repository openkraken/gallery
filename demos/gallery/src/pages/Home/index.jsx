import { createElement } from 'rax';
import View from 'rax-view';
import ScrollView from 'rax-scrollview';
import Card from '../../components/Card';
import './index.css';

export default function Home() {
  return <>
    <p className="title"><img className="icon" src="demos/gallery/icon/framework.png" /> Framework</p>
    <ScrollView
      style={{
        height: '290rpx',
        margin: '0 30rpx'
      }}
      horizontal={true}
    >
      <Card bundle="demos/hello-vue/dist/js/app.js" banner="demos/hello-vue/banner.png" title="Vue" />
      <Card bundle="demos/hello-react/build/static/js/bundle.js" banner="demos/hello-react/banner.png" title="React" />
      <Card bundle="demos/hello-rax/build/kraken/index.js" banner="demos/hello-rax/banner.png" title="Rax" />
    </ScrollView>
    <p className="title"><img className="icon" src="demos/gallery/icon/demo.png" />  Demo</p>
    <View className="home">
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
  </>
}
