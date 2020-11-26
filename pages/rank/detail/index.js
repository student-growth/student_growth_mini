import request from '../../../request/index'
Page({
  data: {

  },
  onLoad: function (options) {
    //wx.setStorageSync('score', score)

    this.setData({
      studentId: options.id
    })
    this.getStudentScore(options.id)
  },
  getStudentScore(id) {
    wx.showLoading({
      title: '加载中...'
    })
    request.get('student/getAbilityAllScore', { studentId: id })
      .then(res => {
        wx.hideLoading()
        this.setData({
          student: res.data
        })
      }).catch(err => {
        console.log(err)
        wx.hideLoading()
        wx.showToast({
          title: '出现错误：' + JSON.stringify(err),
          icon: 'none'
        })
      })
  },
  back() {
    wx.navigateBack({
      delta: 1
    });
  }
})