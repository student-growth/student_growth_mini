// pages/login/index.js
import request  from '../../../request/index.js';
const app = getApp()
Page({
  data: {
     user:null
  },

  login(e){
    request.post('student/login',e.detail.value)
    .then(res=>{
      getApp().globalData.user = res.data
      wx.navigateTo({url:'/pages/index/home/index'})
    }).catch(err=>{
       
    })
  },
  reset(e){

  },
  onLoad: function (options) {
    
  }
})