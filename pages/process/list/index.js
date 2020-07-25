import store from '../../../store/index.js'
import request from '../../../request/index.js'
Page({ 
  data: {
    table: {}
  },

  checkDetail() {
    console.log("test")
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
    if (this.data.ListTouchDirection =='left'){
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
    this.setData({ 'table.column': store.processColumn })
    this.setData({ 'table.body': [{}, {}, {}, {}, {}, {}] })
    this.getProcessList()
  },

  getProcessList() {
    
  },
  checkDetail(e){
    console.log(e)
    wx.navigateTo({
      url:'../detail/index'
    })
  }
})