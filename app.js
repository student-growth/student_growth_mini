
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
  globalData: {
    version: '1.0.0',
    host: 'http://localhost:8800/',
    imgHost: 'http://47.114.44.188:8888/',
    remoteIP: 'http://47.114.44.188:8080/',
    remoteHost:'http://www.zjgsu.com.cn:8080/',
    user: {}
  }
})