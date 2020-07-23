// pages/score/index.js 分数查询页面
import request from '../../request/index.js'
import store  from '../../store/index.js'
const app=getApp()
Page({
 
  data: {
    current:'subject',
    table:{}
  },
  switchTabs({ detail }){
    this.setData({current:detail.key})
    switch(detail.key){
      case 'level4':this.getCET4ScoreList(); break;
      case 'level6':this.getCET6ScoreList(); break;
      case 'subject':this.getSubjectScore();break;
      case 'composite':this.getComposite();break;
    }
  },

  onLoad: function (options) {
    
    this.getSubjectScore()
  },
  getSubjectScore(){
    this.setData({'table.column':store.scoreColumn})
    request.get('student/score',{id:'123'})
    .then(res=>{
      this.setData({'table.body.compulsory':res.data.compulsory})
      this.setData({'table.body.elective':res.data.elective})
    }).catch(err=>{
      console.log(err);
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