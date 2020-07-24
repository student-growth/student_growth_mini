// pages/process/index.js
import store from '../../store/index.js'
import request from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     table:{}
  },

  checkDetail(){
    console.log("test")
  },
   
  onLoad: function (options) {
    this.setData({'table.column':store.processColumn})
    this.setData({'table.body':[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]})
    this.getProcessList()
  },

  getProcessList(){
     
  }
})