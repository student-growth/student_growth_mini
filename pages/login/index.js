// pages/login/index.js
import request  from '../../request/index.js';
const {$Toast} = require('../../dist/base/index')
const { $Message } = require('../../dist/base/index');
const app = getApp()
Page({
  data: {
     user:null
  },

  //do login
  login(e){
    request.post('student/login',e.detail.value)
    .then(res=>{
      getApp().globalData.user = res.data
      $Message({type:'success',content:res.msg})
       wx.navigateTo({
         url: '../../pages/index/index'
       })
    }).catch(err=>{
      $Message({
        type:'error',
        duration:4,
        content:err.sysError
      })
    })
  },
  reset(e){

  },
  onLoad: function (options) {
    
  }
})