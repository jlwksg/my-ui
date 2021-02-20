<template>
  <!-- <transition name="my-message-fade"> -->
    <div class="my-message-wrapper" v-show="show">
      111
      <message>
        <template slot="icon">
          <icon :name="type" class="my-message--icon"></icon>
        </template>
      </message>
    </div>
  <!-- </transition> -->
</template>
<script>
import Message from './message'
import Icon from './icon'
export default {
  name:'Message-template',
  data() {
    return {
      type: 'info',
      show: true,
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