import {individualList} from '../../../store/index.js'
const app =getApp()
Page({
  data: {
    CustomBar:app.globalData.CustomBar,
    individualList
  },
  onLoad: function(options) {
    let user = wx.getStorageInfo('user')
    this.setData({
      user
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: {}
    })
  },
  apply(e){
    let index  = e.currentTarget.dataset.index
    let title=this.data.individualList[index].title
    wx.navigateTo({url:'/pages/scholarship/form/index?title='+title})
  },
  checkProcess(e){
    let index  = e.currentTarget.dataset.index
    let title=this.data.individualList[index].title
    wx.navigateTo({url:'/pages/scholarship/process/index?title='+title})
  }
})