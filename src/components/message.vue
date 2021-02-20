<template>
  <div class="my-message">
    <!-- 图标部分 -->
    <div class="my-message-icons">
      <slot name="icon"></slot>
    </div>
    <!-- 标题和内容部分 -->
    <div class="my-message-content">
      title&content
    </div>
  </div>
</template>
<script>
export default {
  name:'Message',
}
</script>

<style scoped>
</style>