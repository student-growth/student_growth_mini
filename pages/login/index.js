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