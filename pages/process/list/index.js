import request from '../../../request/index.js'
const app = getApp()
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    state: ['已申请',  '已通过', '已拒绝','已撤消'],
    stateList: ['APPLYING', 'PASS', 'REFUSED', 'CANCEL'],
    TabCur: 0,
    table: {}
  },
  // 选择类型
  tabSelect(e) {
    let index =e.currentTarget.dataset.id
    this.setData({ TabCur: index })
    this.getProcessList(index)
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
    this.getProcessList(0)
  },

  getProcessList(index) {
    request.post("student/getProcessList",
      {
        studentId: app.globalData.user.id,
        state: this.data.stateList[index]
      }
    ).then(res => { 
      this.setData({
        prcessList: res.list
      })
    }).catch(err => {
      
      wx.showToast({
        title: JSON.stringify(err),
        icon: 'none',
        duration: 3000
      })
    })
     
  },
  //查看详情按钮
  checkDetail(e) {
    let item = e.currentTarget.dataset.item
    wx.navigateTo({ url: '../detail/index' })
    wx.setStorage({
      key: "processDetail",
      data: item
    })
  }
})