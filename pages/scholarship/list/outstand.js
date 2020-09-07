import {outstandingList} from '../../../store/index.js'
const app = getApp()

Page({
  data: {
    CustomBar:app.globalData.CustomBar,
    outstandingList
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
  //申请奖学金
  apply(e){
    let index  = e.currentTarget.dataset.index
    let title=this.data.outstandingList[index].title
    wx.navigateTo({url:'/pages/scholarship/form/index?title='+title})
  }
})