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
      duration:2000,
      success: (result) => {
        wx.navigateTo({url: '../../pages/index/index' });
      }
    });

  },
  onLoad: function (options) {
    wx.getUserInfo({
      success: (result) => {
        this.setData({
          userInfo: result.userInfo,
          hasUserInfo: true
        })
      },
      fail: (err) => {
        console.log(err)
      }
    });

  }
})