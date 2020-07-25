const app = getApp();
import {applyCategory} from '../../../store/index.js'
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0, 
    VerticalNavTop: 0,
    contentData:[], 
    category:applyCategory
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
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
  // 左侧菜单的点击事件
  handleItemTap(e){
    const id =  e.currentTarget.dataset.id; 
    let contentData = this.data.category[id].secondCate==undefined?[]:this.data.category[index].secondCate;
    this.setData({
      TabCur:id,
      contentData
    })
  }
});
