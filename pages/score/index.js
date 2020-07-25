// pages/score/index.js 分数查询页面
import request from '../../request/index.js'
import store  from '../../store/index.js'
const app=getApp()
Page({
 
  data: {
    CustomBar:app.globalData.CustomBar,
    TabCur:0,
    table:{}
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  onLoad: function (options) {
    this.setData({tabNav:store.scoreNavBar})
    this.getSubjectScore()
  },
  getSubjectScore(){
    this.setData({'table.column':store.scoreColumn})
    request.get('student/score',{id:'123'})
    .then(res=>{
      this.setData({'table.body.compulsory':res.data.compulsory})
      this.setData({'table.body.elective':res.data.elective})
    })
  },
  getComposite(){
    console.log("todo composit")
  },
  getCET6ScoreList(){
    console.log("//todo cet6list")
  },
  getCET4ScoreList(){ 
    request.get('student/score',{id:'123'})
    .then(res=>{
      this.setData({table_compulsory:res.data.compulsory})
      this.setData({table_elective:res.data.elective})
      
    }).catch(err=>{
      console.log(err);
    })
  }
})