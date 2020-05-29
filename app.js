
App({
  // 1.  应用第一次启动就会触发的事件
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //2. 应用被用户看到时候触发的事件
  onShow: function () {
    console.log("obShow");
  },
  // 3. 当应用被隐藏触发的事件
  onHide: function(){
    // 暂停或者清除一些定时器，
    console.log("onHide");
  },
  onError:function(err){
    // 收集用户的错误信息，通过异步请求，将错误信息发送到后台去
    console.log(err);
  },
  // 5.如果页面找不到了，，需要通过js的方式重新跳转页面到首页
  onPageNotFound:function(){
    wx.navigateTo({
      url: '/pages/index/index'
    });
      
  },
  globalData: {
    userInfo: null
  }
})