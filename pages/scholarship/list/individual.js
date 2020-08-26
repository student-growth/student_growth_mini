import {individualList} from '../../../store/index.js'
const app =getApp()
Page({
  data: {
    CustomBar:app.globalData.CustomBar,
    individualList
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
    let name  = e.currentTarget.dataset.name
    wx.navigateTo({url:'/pages/scholarship/form/index'})
  }
})