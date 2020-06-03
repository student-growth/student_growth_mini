//index/index.js
import { request } from '../../request/index.js';
//import { style } from   '../../styles/iconfont.js'
Page({
  data: {
    swiperList: []
  },
  getStudentScore(e){
    request({url:""})
    .then(res=>{
      console.log(res)
    })
  },
  onLoad: function (options) {
    //获取轮播图列表
    request({
      url: 'http://student.com/api/pulic/swiperlist'
    }).then(res => {
      console.log("result" + res);
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});
