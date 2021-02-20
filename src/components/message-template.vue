<template>
  <transition name="my-message-fade">
    <div class="my-message-wrapper">
      <message>
        <template slot="icon">
          <icon :name="type"></icon>
        </template>
      </message>
    </div>
  </transition>
</template>
<script>
import Message from './message'
import Icon from './icon'
export default {
  name:'Message-template',
  data() {
    return {
      type:'info',
    }
  },
  components:{
    Message,
    Icon,
  },
}
</script>

<style scoped>
</style>