// pages/setting/index.js
Page({


  data: {
    hidePassword: true,
    icon: 'attentionforbid'
  },


  onLoad: function (options) {
    this.setData({
      type: options.type
    })
  },


  onReady: function () {

  },


  onShow: function () {

  },
  //提交表单
  submitStudentDetail(e) {

  },
  resetSubmit(e) {

  },
  switchPassword() {
    let change = this.data.hidePassword
    if (change) {
      this.setData({
        icon: 'attentionforbid',
        hidePassword: !change
      })
    } else {
      this.setData({
        icon: 'attentionfavor',
        hidePassword: !change
      })
    }

  }

})