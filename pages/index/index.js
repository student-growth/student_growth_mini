//index/index.js
import request from '../../request/index.js'
import store, { toolsList } from '../../store/index.js'
const app =getApp();

Page({
  data: {
    showActionSheet:false,
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
    this.showActionSheet=true
    wx.showActionSheet({
      itemList: ["学科成绩查询", "四六级成绩查询", "综合测试成绩"],
      itemColor: '#2c3e50',
      success: (result) => { 
        this.showStatement(result.tapIndex);
      }
    });
  },
  handleToolItem(e) {
    let index = e.currentTarget.dataset.index;
    let toolitem = store.toolsList[index];
    if (index == 0) {
      this.handleQueryScore();
    } else {
      wx.navigateTo({
        url: toolitem.url
      });
    }
  },

  onLoad: function (options) {
    this.setData({
      toolsList:store.toolsList
    })
    request.get('stu_news/swiper',{size:4})
    .then(res => { 
       for(let i=0;i<res.list.length;i++){
         res.list[i].fullPath = app.globalData.imgHost+res.list[i].fullPath
       }
       this.setData({swiperList:res.list})
    })
  }
});
