// pages/scholarship/index.js
const app=getApp()
import request from '../../../request/index.js'
import {scholarshipList} from '../../../store/index.js'
Page({

  data: {
    CustomBar:app.globalData.CustomBar,
    tabNav:scholarshipList,
    TabCur:0
  },

  onLoad: function (options) {
     
  },
  selectItem(e){
    let item = e.currentTarget.dataset.item
    switch(item.id){
      case 0:
        wx.navigateTo({url:'/pages/scholarship/list/merit'})
        break;
      case 1:
        wx.navigateTo({url:'/pages/scholarship/list/outstand'})
        break;
      case 2:
        wx.navigateTo({url:'/pages/scholarship/list/individual'})
    }
  }

})