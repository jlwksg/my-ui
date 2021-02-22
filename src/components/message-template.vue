<template>
  <transition name="my-message-fade" mode="in-out">
    <div 
      class="my-message-wrapper" 
      v-show="show"
      >
      <message
        @mouseenter.native="clearTimer"
        @mouseleave.native="startTimer"
        >
        <template slot="icon">
          <icon :name="type" class="my-message--icon"></icon>
        </template>
      </message>
    </div>
  </transition>
</template>
<script>
import Message from './message.vue'
import Icon from './icon'
export default {
  name:'Message-template',
  data() {
    return {
      type: 'info',
      show: false,
      duration: 3000,
      closed: false,
      timer: null, //计时器
    }
  },
  watch:{
    closed(val){
      if(val){
        this.show = false
        //animationend事件,绑定销毁方法
        this.$el.addEventListener('animationend',this.destoryElement)
      }
    }
  },
  components:{
    Message,
    Icon,
  },
  methods: {
    clearTimer(){
      clearTimeout(this.timer);
    },
    startTimer(){
      if(this.duration > 0){
        this.timer = setTimeout(() => {
          if(!this.closed){
            this.closed = true;
          }
        }, this.duration);
      }
    },
    destoryElement(){
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  mounted() {
    if(this.duration>0){
      this.startTimer()
    }
  },

}
</script>

<style scoped>
</style>