import request from '../../../request/index'
Page({

  data: {
    countFount:0,
    disabled:false
  },
  onLoad: function (options) {
    this.getQuesList();
  },
  //获得问题列表
  getQuesList(){
    let user = wx.getStorageSync('user')
    let formData={
      studentId:user.id,
      size:3
    }
    wx.showLoading()
    request.get('question/list',formData)
    .then(res=>{  
      wx.hideLoading()
      this.setData({questlist:res.list})
    })
  },
   
  checkDetail(e){
    let item = e.currentTarget.dataset.item
    wx.navigateTo({url:'/pages/questions/detail/index?detail='
    +JSON.stringify(item)})
  },
  handleSubmit(e){
    let formData=e.detail.value 
    let user=wx.getStorageSync('user') 
    formData.studentId= user.id 
    this.saveQues(formData)
  },
  handleReset(e){},
  //监控字数
  countFont(e){
    let str=e.detail.value
    this.setData({countFount:str.length})
  },
  saveQues(formData){
    wx.showLoading()
    request.post('question/save',formData)
    .then(res=>{
      wx.hideLoading()
      wx.showToast({
        title:'反馈成功',
        icon:'none'
      })
       this.setData({
         disabled:true
       })
    }).catch(err=>{
      wx.hideLoading()
      wx.showToast({title:'提交失败',icon:'none'})
    })
  },
  checkMore(){
    wx.navigateTo({url:'/pages/questions/list/index'})
  } 
})