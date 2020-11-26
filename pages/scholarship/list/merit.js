import {outstandingList,individualList} from '../../../store/index.js'
const app =getApp()
Page({
  data: {
    CustomBar:app.globalData.CustomBar,
    TabCur:0,
    show:false,
    viewModal:true
  },
  onLoad: function(options) {
     
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  apply(e){ 
    wx.navigateTo({url:'/pages/scholarship/form/index?title=优秀学生综合奖学金'})
  },
  checkProcess(e){
    wx.navigateTo({url:'/pages/scholarship/process/index?title=优秀学生综合奖学金'})
  }
})