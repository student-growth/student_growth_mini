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
    }).catch(err=>{
       console.log(err)
    })
    wx.showToast({
      title:'欢迎你,同学！',
      icon:'none',
      duration:1000
    })
    wx.navigateTo({url:'/pages/index/home/index'})
  },
  reset(e){

  },
  onLoad: function (options) {
    
  }
})