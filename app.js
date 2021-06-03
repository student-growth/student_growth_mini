
App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    wx.getSystemInfo({
      success: e => {
        //计算当前学年
        let year = new Date().getFullYear()
        this.globalData.semester=year+'-'+(year+1);
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  onPageNotFound: function () {
    wx.navigateTo({
      url: '/pages/login/home/index'
    });

  },
  // test account: 1711090229
  globalData: {
    version: '1.0.0',
    host: 'https://localhost:8800/',
    imgHost: 'https://47.114.44.188:8888/',
    remoteIP: 'https://47.114.44.188:8081/',
    remoteHost:'https://jingzhun-edu.zjgsu.cn:8081/',
    user: {}
  }
})