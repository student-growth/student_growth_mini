//index/index.js
import request from '../../request/index.js'
const app =getApp();

Page({
  data: {
    showActionSheet:false,
    swiperList: [],
    Student: {
      name: "李",
      url: "",
    },
    toolsList: [{
      id: 0, name: '成绩查询', url: '', icon: 'annual-report'
    }, {
      id: 1, name: '成果申请', url: '../../pages/apply/index', icon: 'youzhifuwu'
    }, {
      id: 2, name: '学生评价', url: '../../pages/comment/index', icon: 'qianshuhetong'
    }, {
      id: 3, name: '进度查询', url: '../../pages/process/index', icon: 'tuanduijineng'
    }, {
      id: 4, name: '奖学金申请', url: '../../pages/scholarship/index', icon: 'daikuan'
    }, {
      id: 5, name: '意见反馈', url: '../../pages/questions/index', icon: 'tounaofengbao'
    }]
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
    let toolitem = this.data.toolsList[index];
    if (index == 0) {
      this.handleQueryScore();
    } else {
      wx.navigateTo({
        url: toolitem.url
      });
    }
  },

  onLoad: function (options) {
    //获取轮播图列表
    request.get('getSwiperList').then(res => { 
      for(let i=0;i<res.data.length;i++){
        res.data[i].name="http://localhost:7778/"+res.data[i].name
      }
      this.setData({swiperList:res.data})
    })
  }
});
