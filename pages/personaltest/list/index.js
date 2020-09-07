import {psyTest} from '../../../store/index.js'
import request from '../../../request/index.js'

Page({
  data: {
    showList:false
  },
  hideModal(e){
    this.setData({showList:false})
  },
  onLoad: function(options) {
    wx.getStorage({key:'user'})
    .then(res=>this.setData({
      user:res.data,
      psyTest
    }))
  },
  chooseTest(e){
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url:item.url+'?id='+item.id
    })
  },
  //查看历史记录
  checkHistoryScore(e){ 
    let name=e.currentTarget.dataset.index 
    let id = this.data.user.id
    let info={id,name}
    
    this.getPsyTestList(info)
    this.setData({showList:true})
  },
  getPsyTestList(info){ 
    request.get('psy_test/getPsyList',info)
    .then(res=>{
      this.setData({psyList:res.list})
    })
  },
  checkResult(e){
    let item= e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/personaltest/result/index?result='
        + item.result + '&id=' 
        +  item.testName
        + '&type=2'
    })
  }
})