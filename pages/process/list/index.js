import request from '../../../request/index.js'
const app = getApp()
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    state: ['已申请',  '已通过', '已拒绝','已撤消'],
    stateList: ['APPLYING', 'PASS', 'REFUSED', 'CANCEL'],
    TabCur: 0,
    isModify:false
  },
  // 选择类型
  tabSelect(e) {
    let index =e.currentTarget.dataset.id
    let formData={
      studentId:this.data.userId,
      state:this.data.stateList[index]
    }
    this.setData({ TabCur: index })
    this.getProcessList(formData)
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },
  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
  onLoad: function (options) {
    wx.getStorage({key:'user'})
    .then(res=>{
      let formData={studentId:res.data.id,
        state:this.data.stateList[0]}
      this.getProcessList(formData)
      this.setData({
        userId:res.data.id
      })
    })
    
  },

  getProcessList(info) {
    request.post("student/getProcessList",info).then(res => { 
      this.setData({
        processList: res.list
      })
    })
  },
  //查看详情按钮
  checkDetail(e) {
    let item = e.currentTarget.dataset.item
    wx.navigateTo({ url: '../detail/index?applyName='+item.applyName })
    wx.setStorage({
      key: "processDetail",
      data: item
    })
  },
  //撤销申请
  cancelApply(e){ 
    //申请编号
    let id =e.currentTarget.dataset.id
    let index=e.currentTarget.dataset.index 
    request.get('apply/cancel',{id})
    .then(res=>{
      //this index object display is none 
      let tag=`processList[${index}].tag`
      this.setData({
        [tag]:'none'
      })
    })
  },
  //编辑申请内容
  modifyApply(e){
    let item=e.currentTarget.dataset.item
     wx.navigateTo({
       url:'/pages/process/detail/index?disabled=false&applyName='+item.applyName+'&id='+item.id
     })
  }
})