import request from '../../../request/index.js'
Page({
  data: {
    questionDetail: {}
  },
  onLoad: function (options) {
    let detail = JSON.parse(options.detail)
    this.setData({ question: detail })
    this.getQuestionDtail({ id: detail.id })
  },
  onReady: function () {

  },
  getQuestionDtail(formData) {
    wx.showLoading()
    request.get('question/getFeedback', formData)
      .then(res => {
        wx.hideLoading()
        this.setData({
          'question.feedback': res.data
        })
      }).catch(err => {
        wx.hideLoading()
        wx.showToast({
          title: '加载错误：' + JSON.stringify(err),
          icon:'none'
        })
      })
  },
  back() {
    wx.navigateBack()
  }
})