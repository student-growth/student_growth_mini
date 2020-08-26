const app = getApp()
Page({
  data: {
    
  }, 
  onLoad: function(options) { 
    let that = this 
    wx.getStorage({
      key:"processDetail",
      success(res){
        that.setData({
          image:app.globalData.imgHost.concat(res.data.image),
          formData:JSON.parse(res.data.formData),
          formTemp:JSON.parse(res.data.formTemp),
          state:res.data.applyState
        })
      }
    })
  },

  onReady:function(){
    this.getFormDetail()
  },
  viewImage(e){
    wx.previewImage({
      urls:[this.data.image],
      current:e.currentTarget.dataset.url
    })
  },
  getFormDetail(){

    let item = this.data.formTemp
    for(let i=0;i<item.length;i++){
      let key= item[i].key
      item[i]['value']=this.data.formData[key]
    }
    this.setData({formTemp:item})
  }
   
})