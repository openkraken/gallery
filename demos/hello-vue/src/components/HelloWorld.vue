<template>
  <div>
    <div :style="style.helloWorld">
      {{msg}}
    </div>
  </div>
</template>

<script>
const style = {
  helloWorld: {
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    flexShrink: 0,
    alignContent: 'flex-start',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: '2.66667vw 0vw',
    padding: 0,
    minWidth: 0,
    alignItems: 'center',
    fontSize: '6vw',
    fontWeight: 'bold',
  }
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      style,
    }
  },
}
</script>