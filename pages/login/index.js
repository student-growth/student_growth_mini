// pages/login/index.js
import { request } from '../../request/index.js';
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
     
  },
  // 提交表单
  formSubmit: function (e) {
    console.log(e.detail.value);
    //todo list
    wx.navigateTo({
      url: '../../pages/index/index',
      success: (result) => {
        wx.showToast({
          title: '登录成功' 
        }); 
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  onLoad: function (options) {  
     wx.getUserInfo({
       success: (result) => {
        this.setData({
          userInfo:result.userInfo,
          hasUserInfo:true
        })
       },
       fail: (err) => {
        console.log(err)
       }
     });
       
  }
})