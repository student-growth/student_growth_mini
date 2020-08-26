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
    this.setData({
      barColor:options.barColor,
      title:options.title,
      curIndex:options.id,
      
    })
    if(options.id==1){
      this.setData({outstandingList})
    }
    if(options.id==2){
      this.setData({individualList})
    }
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
    let name = e.currentTarget.dataset.name
    
    wx.navigateTo({url:'/pages/scholarship/form/index'})
  }
})