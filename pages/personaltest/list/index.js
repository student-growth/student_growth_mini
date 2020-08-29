import {psyTest} from '../../../store/index.js'


Page({
  data: {
    
  },
  onLoad: function(options) {
    this.setData({
      psyTest
    })
  },
  chooseTest(e){
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url:item.url+'?id='+item.id
    })
  }
})