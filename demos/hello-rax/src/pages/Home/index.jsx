import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.css';

import Logo from '../../components/Logo';

export default function Home() {

  return (
    <View style={styles.home}>
      <Logo />
      <View style={styles.title}>Welcome to Your Rax App</View>
      <View style={styles.info}>More information about Rax</View>
      <View style={styles.info}>Visit https://rax.js.org</View>
    </View>
  );
}
