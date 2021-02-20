<template>
  <div id="app">
    <button @click="showToast">点击</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    showToast(){
      this.$message()
    }
  },
}
</script>

<style>

</style>
