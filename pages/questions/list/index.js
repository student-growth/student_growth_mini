import request from '../../../request/index.js'
Page({
  data: {

  },
  onLoad: function (options) {
    //加载所有问题反馈
  },
  onReady: function () {
    let user = wx.getStorageSync('user')
    let formData = {
      studentId: user.id,
      size: -1
    }
    this.getQestionList(formData)
  },
  getQestionList(formData) {
    request.get('question/list', formData).then(res => {
      this.setData({ quesList: res.list })
    }).catch(err => {
      console.log(err)
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