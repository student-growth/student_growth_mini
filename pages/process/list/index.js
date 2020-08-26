import request from '../../../request/index.js'
const app = getApp()
Page({
  data: {
    table: {}
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },
  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
  onLoad: function (options) {
    this.getProcessList()
  },

  getProcessList() {
    request.get("student/getProcessList", { studentId: app.globalData.user.id })
      .then(res => {
        this.setData({
          prcessList: res.list
        })
      }).catch(err => {
        console.log(err)
      })
  },
  //查看详情按钮
  checkDetail(e) {
    let item = e.currentTarget.dataset.item
    wx.navigateTo({ url: '../detail/index'})
    wx.setStorage({
      key:"processDetail",
      data:item
    })
  }
})