import { createElement } from 'rax';
import Image from 'rax-image';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.css';

export default ({banner, title, desc, bundle}) => {
  return (
    <View style={styles.card} onClick={() => { window.open(bundle); } }>
      <Image
        resizeMode="cover"
        style={styles.banner}
        source={{
          uri: banner,
        }} />
      <View style={styles.info}>
        <View style={styles.title}>{title}</View>
        <View style={styles.desc}>{desc}</View>
      </View>
    </View>
  );
};
