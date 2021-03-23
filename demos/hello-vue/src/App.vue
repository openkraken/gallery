<template>
  <div :style="style.home">
    <img alt="Vue logo" src="//img.alicdn.com/imgextra/i3/O1CN01HmN4l21lpai7j2p3H_!!6000000004868-2-tps-200-200.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div :style="style.info">More information about Vue.js</div>
    <div :style="style.info">Visit https://cn.vuejs.org/</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

const style = {
  home: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    margin: '27vw 0vw 0vw',
    padding: '0vw',
    minWidth: '0vw',
    alignItems: 'center',
  },
  info: {
    alignItems: 'center',
    fontSize: '18px',
    margin: '5px 0',
    color: '#555555',
  }
}

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      style,
    }
  },
}
</script>


