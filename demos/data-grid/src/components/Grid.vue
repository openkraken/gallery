<template>
   <div :style="style.table">
    <div :style="style.tr">
      <div
        v-for="key in columns"
        @click="sortBy(key)"
        :class="{ active: sortKey == key }"
        :key="key"
        :style="style.th"
      >
        {{ capitalize(key) }}
        <span :style="{...style.arrow, ...(sortOrders[key] > 0 ? style.asc : style.dsc)}" >
        </span>
      </div>
    </div>
    <div :style="style.tr" v-for="(entry, index) in filteredHeroes" :key="index">
      <div v-for="key in columns" :key="key" :style="style.td">
        {{ entry[key] }}
      </div>
    </div>
  </div>
</template>

<script>
const style = {
 table: {
    border: '2px solid #42b983',
    borderRadius: '3px',
    backgroundColor: '#fff',
  },
  tr: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
  },
  th: {
    flex: 1,
    backgroundColor: '#42b983',
    color: 'rgba(255, 255, 255, 0.66)',
    cursor: 'pointer',
    userSelect: 'none',
    minWidth: '120px',
    padding: '10px 20px',
  },
  td: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    minWidth: '120px',
    padding: '10px 20px',
  },
  arrow: {
    display: "inline-block",
    verticalAlign: 'middle',
    width: 0,
    height: 0,
    marginLeft: '5px',
    opacity: 0.66,
  },
  asc: {
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderBottom: '4px solid #fff',
  },
  dsc: {
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderTop: '4px solid #fff',
  }
}

export default {
  name: 'Grid',
  props: {
    heroes: Array,
    columns: Array,
    filterKey: String
  },
  data: function() {
    return {
      sortKey: '',
      style
    }
  },
  computed: {
    filteredHeroes: function() {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let heroes = this.heroes
      if (filterKey) {
        heroes = heroes.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        heroes = heroes.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return heroes
    },
    sortOrders() {
      const columnSortOrders = {}
      
      this.columns.forEach(function(key) {
        columnSortOrders[key] = 1
      })

      return columnSortOrders
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>