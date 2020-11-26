import request from '../../../request/index.js'
let app =  getApp();
Page({
  data: {
    index:null,
    // user:app.globalData.user,
    level:[
      {id:0,name:'一等奖学金',value:1},
      {id:1,name:'二等奖学金',value:2},
      {id:2,name:'三等奖学金',value:3},
    ], 
    strLen:0,
    formError:'test-error',
    showLevel:false
  },
  chooseLevel(e){
    this.setData({
      index:e.detail.value
    })
  },
  onLoad: function(options) {
    let user=wx.getStorageSync('user')

    if(options.title=='优秀学生综合奖学金'){ 
      this.setData({showLevel:true})
    }
    this.setData({
      user,
      title:options.title
    }) 
  },
  onReady:function(){
    //填充数据
    let info={
      studentId:this.data.user.id,
      semester:app.globalData.semester
    }
    this.getComprehensiveScore(info)
    //获取学生基本信息--如果没有，就自己去页面上补充 
  },
  applyScholarship(e){
    let formData=e.detail.value
    wx.showLoading({
      title:'申请中...'
    })
    formData.studentId=this.data.user.id;
    formData.applyName=this.data.title; 
    formData.semester =app.globalData.semester
    request.post('apply/scholarship',formData)
    .then(res=>{
      wx.hideLoading();
      wx.showToast({title:'申请成功，请耐心等待审核结果',icon:'none'})
    }).catch(err=>{ 
      wx.hideLoading()
      wx.showToast({
        title:'加载失败:'+JSON.stringify(err),
        icon:'none'
      })
    })
  },
  checkFontCount(e){
    let str=e.detail.value
    this.setData({strLen:str.length})
  },
  //获取该学生该学年的所有的综合成绩
  getComprehensiveScore(formData){ 
    wx.showLoading({title:'加载中...'});
    request.post('score/comprehensive_score',formData)
    .then(res=>{
      wx.hideLoading();
      this.setData({
        score:res.data
      })
    }).catch(err=>{
      wx.hideLoading();
      console.log(err)
    })
  }
})