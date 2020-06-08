// pages/score/index.js 分数查询页面
Page({
 
  data: {
    tableTitle:"测试标题",
    tableData:[
      {
        id:1,
        name:"心里健康",
        courseType:"必修",
        grade:90,
        isRetest:false
      },{
        id:2,
        name:"心里健康",
        courseType:"必修",
        grade:90,
        isRetest:false
      },{
        id:3,
        name:"心里健康",
        courseType:"必修",
        grade:90,
        isRetest:false
      }
    ],
    tableColumn:["序号","课程名称","课程类型","分数","是否重修"]
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