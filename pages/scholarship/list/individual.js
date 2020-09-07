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
    let index  = e.currentTarget.dataset.index
    let title=this.data.individualList[index].title
    wx.navigateTo({url:'/pages/scholarship/form/index?title='+title})
  }
})