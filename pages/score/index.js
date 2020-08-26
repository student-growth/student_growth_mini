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
    table: {}
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  cetSelect(e) {
    this.setData({
      CETCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  chooseSemester(e) {
    console.log(e)
  },
  onLoad: function (options) {
    let time = util.formatDay(new Date());
    this.setData({ data: time })
    this.setData({ tabNav: scoreNavBar })
    this.getSubjectScore()
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
  // 获取CET-6成绩
  getCET6ScoreList() {
    console.log("//todo cet6list")
  },
  //获取CET-4成绩
  getCET4ScoreList() {
    request.get('student/score', { id: '123' })
      .then(res => {
        this.setData({ table_compulsory: res.data.compulsory })
        this.setData({ table_elective: res.data.elective })

      }).catch(err => {
        console.log(err);
      })
  }
})