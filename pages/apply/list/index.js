const app = getApp();
import {applyCategory} from '../../../store/index.js'
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0, 
    contentData:[], 
    category:applyCategory
  },

  //options(Object)
  onLoad: function (options) {
    let firstMenu = this.data.category.map(v=>{
      return {id:v.id,icon:v.iconName,name:v.name}
    });
    let contentData = this.data.category[0].secondCate;
    this.setData({
      firstMenu,
      contentData
    })
  },
  onReady:function(){
    let that=this;
    wx.getSystemInfo({
      success:function success(res){
        that.setData({scrollHeight:(res.windowHeight -100)+"px"});
      }
    })

  },

  chooseItem(e){
    console.log(e.currentTarget.dataset)
    
  },
  // 左侧菜单的点击事件
  handleItemTap(e){
    const id =  e.currentTarget.dataset.id; 
    let contentData = this.data.category[id].secondCate==undefined?[]:this.data.category[id].secondCate;
    this.setData({
      TabCur:id,
      contentData
    })
  }
});
