<template>
  <div :style="style.home">
    <div :style="style.search">
      Search： <input name="query" v-model="searchQuery" />
    </div>
    <demo-grid
      :heroes="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery"
    />
  </div>
</template>

<script>
import demoGrid from './components/demoGrid'

const style = {
  home: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontSize: '14px',
    color: '#444'
  },
  search: {
    lineHeight: '30px',
    display: 'block',
    margin: '10px 0px',
  }
}

export default {
  name: 'App',
  components: {
    demoGrid
  },
  data: function() { 
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ],
      style,
    }
  },
  created: function() {
    
  },
  watch: {
    
  },
  directives: {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>


