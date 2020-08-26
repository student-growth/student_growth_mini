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
    let name= e.currentTarget.dataset.name
    wx.navigateTo({url:'/pages/scholarship/form/index'})
  }
})