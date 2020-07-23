//index/index.js
import store  from '../../store/index.js'
import request from '../../request/index.js'
const {$Toast} =  require('../../dist/base/index')
const app =getApp();

Page({
  data: {},

  onLoad: function (options) {
    let user = app.globalData.user;
    this.setData({
      toolsList:store.toolsList,
      user
    }) 
    this.getSwiperList()
    this.getNewsList();
    this.getQuesList();
  },
  
  //获得问题列表
  getQuesList(){
    request.get('question/getQues',{size:3})
    .then(res=>{
      this.setData({questlist:res.list})
    })
  },
  //getNewsList
  getNewsList(){
    request.get('stu_news/news_list',{size:5})
    .then(res=>{
      this.setData({newslist:res.list})
    })
  },
  //getSwiperList
  getSwiperList(){
    request.get('stu_news/swiper',{size:4})
    .then(res => { 
       for(let i=0;i<res.list.length;i++){
         res.list[i].fullPath = app.globalData.imgHost+res.list[i].fullPath
       }
       this.setData({swiperList:res.list})
    })
  },

  handleToolItem(e) {
    let index = e.currentTarget.dataset.index;
    let toolitem = store.toolsList[index];
    wx.navigateTo({
      url: toolitem.url
    });
  },

});
