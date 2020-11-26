import request from '../../../request/index.js'
Page({
  data: {

  },
  onLoad: function (options) {
    //加载所有问题反馈
  },
  onReady: function () {
    let user = wx.getStorageSync('user')
    if(user==null||user==undefined){
     wx.navigateTo('/pages/login/home/index')
    }
    let formData = {
      studentId: user.id,
      size: -1
    }
    this.getQestionList(formData)
  },
  getQestionList(formData) {
    wx.showLoading()
    request.get('question/list', formData).then(res => {
      wx.hideLoading()
      this.setData({ quesList: res.list })
    }).catch(err => {
      wx.hideLoading()
      wx.showToast({
        title: '获取数据失败:' + JSON.stringify(err)
      })
    })
  },
  checkQuesDetail(e) {
    
    let index=e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/questions/detail/index?detail='
        + JSON.stringify(this.data.quesList[index])
    })
  }
})