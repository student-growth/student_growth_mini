// pages/login/index.js
import request from '../../../request/index.js';
const app = getApp()
Page({
  data: {},

  login(e) {
    //check form data 
    let id = e.detail.value.id
    let pwd = e.detail.value.password
    if (id == undefined || id == "" || pwd == undefined || pwd == "") {
      wx.showToast({
        title:'请输入账户和密码',
        icon:'none'
      })
      return
    }
    wx.showLoading({
      title:'登录中...'
    })
    request.post('student/login', e.detail.value)
      .then(res => {  
        wx.hideLoading() 
        wx.setStorageSync('user', res.data)
        if (res.code === 200) {
          this.welcome(res.data.name)
          wx.navigateTo({ url: '/pages/index/home/index' })
          
        }  
      }).catch(err => { 
        console.log(err)
        wx.hideLoading()
        wx.showToast({
          title:"错误：" +JSON.stringify(err),
          icon: 'none'
        })
      })
      
  },
  reset(e) { },
  welcome(name) {
    wx.showToast({
      title: '欢迎你,' + name + '同学！',
      icon: 'none',
      duration: 4000
    })
  },
  showError(err) {
    
  }

})