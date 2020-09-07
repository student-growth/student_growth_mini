//index/index.js
import store  from '../../../store/index.js'
import request from '../../../request/index.js'
const app =getApp();

Page({
  data: {
    cardCur: 0,
    toolsList:store.toolsList
    //user:app.globalData.user
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  tapToolsItem(e){
    
    let url=e.currentTarget.dataset.url
    if(url!=undefined){
      wx.navigateTo({url})
    }
  },
  navCenter(e){
    wx.navigateTo({url:'/pages/auth/center/index'})
  },
  onLoad: function (options) {
    wx.getStorage({key:'user'}).then(res=>{
      this.setData({user:res.data})
    })
    this.getSwiperList()
    this.getNewsList();
    //this.getQuesList();
  },
  
  // 获得问题列表
  // getQuesList(){
  //   request.get('question/getQues',{size:3})
  //   .then(res=>{
  //     this.setData({questlist:res.list})
  //   })
  // },
  //getNewsList
  //todo 获得新闻列表
  getNewsList(){
    request.get('stu_news/news_list',{size:5})
    .then(res=>{
      this.setData({newslist:res.list})
    })
  },
  //获取具体的文件内容
  checkNewsDeatil(e){
     wx.navigateTo({url:'/pages/index/newsdetail/index'})
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
