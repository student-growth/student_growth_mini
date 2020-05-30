// pages/msg/msg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      }, {
        id: 1,
        name: "原创",
        isActive: false
      }, {
        id: 2,
        name: "分类",
        isActive: false
      }, {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },
  handleItemChange(e) {
    // console.log(e);
    const { index } = e.detail;
    let { tabs } = this.data;
    //  [].foreach 遍历数组，遍历数组的是偶，修改了v,也会导致源数组被修改
    // 不要直接修改 this.data.数据 ,这是小程序中所不推荐到的
    tabs.forEach((v, i) => {
      i === index ? v.isActive = true : v.isActive = false;
    })
    this.setData({
      tabs
    })
    console.log(index);


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 处理上拉加载下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // app.json 文件中tabBar里面选中该页面时候触发
  onTabItemTap(){

  }
})