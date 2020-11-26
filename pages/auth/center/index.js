import request from '../../../request/index.js'
let app =  getApp();
Page({
  data: {},
  onLoad: function(options) {
    let user=wx.getStorageSync('user')
    
    this.setData({
       user
    })
    
  },
  onReady:function(){
    let info={
      studentId:this.data.user.id,
      semester:app.globalData.semester
    }
     this.getRankInfo(info)
  },
  //退出系统
  exit(){
    wx.navigateTo({
      url:'/pages/login/home/index'
    })
    //清理缓存
    wx.clearStorage()
  },
  //完善个人信息
  checkDetail(){
    wx.navigateTo({url:'/pages/auth/setting/index?type=1'})
  },
  //修改个人密码
  changePassword(){
    wx.navigateTo({url:'/pages/auth/setting/index?type=2'})
  },
  //获取排名信息
  getRankInfo(info){
    wx.showLoading({title:'加载中...'})
    request.post('score/comprehensive_score',info)
    .then(res=>{
      wx.hideLoading();
      this.setData({
        score:res.data
      })
    }).catch(err=>{
      console.log(err)
      wx.hideLoading()
      wx.showToast({
        title: '发生错误:'+JSON.stringify(err.data),
        icon: 'none'
      })
    })
  }
})