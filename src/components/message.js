/**
 * message的逻辑部分
 */
import MessageTemplate from './message-template'
import Vue from 'vue'
const MessageConstructor = Vue.extend(MessageTemplate)

const instances = [] //message的实例
const containers ={} //


const Message = function(){
  const position = 'top-center'; //位置暂时全都固定为top-center
  let containerEl = containers[position]; //实例的容器
  if(!containerEl){
    containerEl.className = ['my-message-container', 'is-' + position].join(' ')
  }

}