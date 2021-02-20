import Message from './message.js'

//引入样式
import './message.css'

Message.install = function(Vue){
  Vue.prototype.$message = Message;
}

export default Message;