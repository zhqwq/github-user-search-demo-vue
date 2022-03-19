<template>
  <SearchBar :addListItems="addListItems" />
  <List :ListItems="ListItems" />
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import List from '@/components/List.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    List
  },
  data() {
    return {
      ListItems: []
    }
  },
  methods: {
    addListItems(items) {
      this.ListItems = items
    }
  }
}
</script>
