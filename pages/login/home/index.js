// pages/login/index.js
import request from '../../../request/index.js';
const app = getApp()
Page({
  data: {},

  login(e) {
    //check form data
    let id =e.detail.value.id
    let pwd=e.detail.value.password
    if(id==undefined || id =="" ||pwd==undefined || pwd==""){
      this.showError()
      return
    }
    request.post('student/login', e.detail.value)
      .then(res => {
        //异步存储用户数据
        wx.setStorage({
          key: 'user',
          data: res.data
        })
        this.welcome(res.data.name)
      }).catch(err => {
        console.log(err)
      })
    wx.navigateTo({ url: '/pages/index/home/index' })
  },
  reset(e) {

  },
  welcome(name) {
    wx.showToast({
      title: '欢迎你,' + name + '同学！',
      icon: 'none',
      duration: 4000
    })
  },
  showError(){
    wx.showToast({
      title:'请输入账户或密码',
      icon:'none'
    })
  }

})