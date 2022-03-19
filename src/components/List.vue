<template>
  <h2>List Content</h2>
  <div class="list">
    <el-card v-for="item in ListItems" :key="item.id" :body-style="{ padding: '0px' }" style="margin: 10px">
      <img :src="item.avatar_url" class="image" />
      <div style="padding: 14px">
        <span>{{ item.login }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['ListItems']
}
</script>

<style scoped>
.list {
  display: flex;
}
.image {
  width: 120px;
  display: block;
}
</style>
