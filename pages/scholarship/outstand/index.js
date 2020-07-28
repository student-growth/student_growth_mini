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
  apply(e){
    console.log(e.currentTarget.dataset)
  }
})