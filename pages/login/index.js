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
    //todo submit function;
    console.log(e.detail);
    wx.showToast({
      title: '登陆成功',
      icon: 'none',
      duration:4000,
      success: (result) => {
        wx.navigateTo({url: '../../pages/index/index' });
      }
    });

  },
  onLoad: function (options) {
    
  }
})