const app = getApp()

Page({
  data: {
    
  },
  onLoad: function(options) {
    this.setData({
      user:app.globalData.user
    })
  },
  onReady:function(){
    console.log(this.data.user)
  }
})