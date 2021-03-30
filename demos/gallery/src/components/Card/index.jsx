import { createElement } from 'rax';
import Image from 'rax-image';
import View from 'rax-view';
import Text from 'rax-text';
import './index.css';

export default ({banner, title, desc, bundle}) => {

  if (desc == null) {
    return (
      <View className="card hover-card" onClick={() => { window.open(bundle); } }>
      <Image
        resizeMode="cover"
        className="hover-banner"
        source={{
          uri: banner,
        }} />
      <View className="hover-info">
        <View className="hover-title">{title}</View>
      </View>
    </View>
    );
  } else {
    return (
      <View className="card" onClick={() => { window.open(bundle); } }>
        <Image
          resizeMode="cover"
          className="banner"
          source={{
            uri: banner,
          }} />
        <View className="info">
          <View className="title">{title}</View>
          <View className="desc">{desc}</View>
        </View>
      </View>
    );
  }
};
