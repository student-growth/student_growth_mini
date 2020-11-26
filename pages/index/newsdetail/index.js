// pages/newsdetail/newsdetail.js
Page({ 
  data: {}, 
  onLoad: function (options) {
   
    let url=wx.getStorageSync('url')
    this.setData({
      url:url
    })
    wx.showLoading({title:'数据加载中...'})
  }, 
  onShow: function () {
    wx.hideLoading()
  }, 
  
})