
App({
  
  // 5.如果页面找不到了，，需要通过js的方式重新跳转页面到首页
  onPageNotFound:function(){
    wx.navigateTo({
      url: '/pages/login/index'
    });
      
  },
  globalData: {
    version:'1.0.0',
    host:'http://localhost:8800/',
    imgHost:'http://47.114.44.188:8888/',
  }
})