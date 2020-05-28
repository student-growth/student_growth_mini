// pages/msg/msg.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    checkedlist:"",
    lists:[
      {
        id:0,
        name:"🍎",
        value:"apple"
      },{
        id:1,
        name:"🍇",
        value:"grape"
      },{
        id:2,
        name:"🍌",
        value:"bananer"
      }]
  },
  handleCheckChange(e){
    // console.log(e.detail);
    const checkedlist = e.detail.value;
    this.setData({
      checkedlist:e.detail.value
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})