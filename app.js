
App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    wx.getSystemInfo({
      success: e => {
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
      url: '/pages/login/index'
    });

  },
  globalData: {
    version: '1.0.0',
    host: 'http://localhost:8800/',
    imgHost: 'http://47.114.44.188:8888/',
    remoteHost: 'http://47.114.44.188:8080/',
    //测试数据
    user: { id: "1811080112", name: "夏超", department: "信息与电子工程学院", major: "测控技术与仪器", grade: "测仪1301", sex: null }
  }
})