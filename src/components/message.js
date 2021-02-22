/**
 * message的逻辑部分
 */
import MessageTemplate from './message-template'
import Vue from 'vue'
const MessageConstructor = Vue.extend(MessageTemplate)

//const instances = [] //message的实例集合
const containers ={} //

const Message = function(){
  const position = 'top-center'; //位置暂时全都固定为top-center
  const containerKey = position;
  let containerEl = containers[containerKey]; //实例的容器

  //创建实例容器,插入到页面
  if(!containerEl){
    containerEl = containers[containerKey] = document.createElement('div')
    containerEl.className = ['my-message-container', 'is-' + position].join(' ')
    document.body.appendChild(containerEl)
  }

  //创建轻提示实例
  const instance = new MessageConstructor({
    el:document.createElement('div')
  })

  //将轻提示实例插入到实例容器里
  containerEl.appendChild(instance.$el)

  //设置显示
  instance.show = true

  return instance
}

export default Message