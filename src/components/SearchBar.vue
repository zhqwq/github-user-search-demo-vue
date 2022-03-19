<template>
  <h2>Search Bar</h2>
  <el-form :model="form" label-width="100px">
    <el-form-item label="User Name">
      <el-input v-model="form.name" placeholder="Please enter a Github user name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">Search</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    onSearch() {
      fetch(`https://api.github.com/search/users?q=${this.form.name}`)
        .then(res => res.json())
        .then(data => this.addListItems(data.items))
        .catch(error => console.error(error))
    }
  },
  props: ['addListItems']
}
</script>
