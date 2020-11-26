
import request from '../../request/index.js'
Page({
  data: {
    
  },
  onLoad: function(options) {
   let user= wx.getStorageSync('user');
   wx.showLoading({
     title:'加载中...'
   })
   request.get('student/personalizedList',{studentId:user.id})
   .then(res=>{
     wx.hideLoading()
     this.setData({
       student:res.data
     })
   }).catch(err=>{
     console.log(err)
     wx.hideLoading()
     wx.showToast({
       title: '出现错误：'+JSON.stringify(err),
       icon: 'none'
     })
   })
   this.setData({
     user
   })
  } ,
  back(){
    wx.navigateBack({
      delta: 1
    });
      
  }
})