//index/index.js
import { request } from '../../request/index.js';
Page({
  data: {
    swiperList: [],
    Student:{
      name:"李",
      url:"",

    }

  },
  getStudentScore(e){
    request({url:""})
    .then(res=>{
      console.log(res)
    })
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
