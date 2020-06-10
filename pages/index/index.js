//index/index.js
import { request } from '../../request/index.js';
Page({
  data: {
    swiperList: [{
      id: 1,
      src: ""
    }, {

    }],
    Student: {
      name: "李",
      url: "",

    }
  },
  //显示声明
  showStatement(index) {
    wx.showModal({
      title: '声明',
      content: '本次查询不会对任何机构或者第三方开放.',
      success: (result) => {
        if (result.confirm) {
          wx.navigateTo({
            url: '../../pages/score/index?categoryIndex=' + index
          });
        }
      }
    });

  },
  handleQueryScore() {
    wx.showActionSheet({
      itemList: ["学科成绩查询", "四六级成绩查询"],
      itemColor: '#2c3e50',
      success: (result) => {
        //显示声明，确定 
        this.showStatement(result.tapIndex);
      }
    });

  },
  onLoad: function (options) {
    //获取轮播图列表
    // request({
    //   url: ''
    // }).then(res => {
    //   console.log("result" + res);
    // })
  }
});
