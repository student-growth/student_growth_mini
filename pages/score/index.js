// pages/score/index.js 分数查询页面
import request from '../../request/index.js'
import { scoreColumn, scoreNavBar } from '../../store/index.js'
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    CETCur: 0,
    CETNav: ['CET-4', 'CET-6'],
    semester:'大一[上]',
    multiArray:[['大一','大二','大三','大四'],['上','下']],
    multiIndex:[0,0]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    if(this.data.TabCur==1){
      this.getComposite()
    }else if(this.data.TabCur==2){
      //四六级查询
      this.getCETScoreList()
    }
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },

  cetSelect(e) {
    this.setData({
      CETCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
    })
    if(e.currentTarget.dataset.id==0){
      if(this.data.cet['CET4']!=undefined){
        this.setData({CurCET:this.data.cet['CET4'][0]})
      }else{
        this.setData({CurCET:null})
      }
    }else if(e.currentTarget.dataset.id=1){
      if(this.data.cet['CET6']!=undefined){
        this.setData({CurCET:this.data.cet['CET4'][0]})
      }else{
        this.setData({CurCET:null})
      }
    }
  },
  
  onLoad: function (options) {
    let time = util.formatDay(new Date());
    this.setData({ date: time })
    this.setData({ tabNav: scoreNavBar })
    this.getSubjectScore()
  },
  //选择学期
  chooseSemester(e) {

  },
  getSubjectScore() {
    this.setData({ 'table.column': scoreColumn })
    request.get('student/score', { id: app.globalData.user.id })
      .then(res => {
        this.setData({ 'table.body.compulsory': res.data.compulsory })
        this.setData({ 'table.body.elective': res.data.elective })
      })
  },
  //获取综合成绩
  getComposite() {
    console.log("todo composit")
  },
  // 获取CET成绩
  getCETScoreList() {
    request.get('student/getCETScore',{id:app.globalData.user.id})
    .then(res=>{
      this.setData({
        cet:res.data,
        CurCET:res.data['CET4'][0]
      })
    })
  },

})