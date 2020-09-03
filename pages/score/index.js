// pages/score/index.js 分数查询页面
import request from '../../request/index.js'
import { scoreColumn, scoreNavBar } from '../../store/index.js'
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    stuId: app.globalData.user.id,
    TabCur: 0,
    CETCur: 0,
    CETNav: ['CET-4', 'CET-6'],
    semester: '大一[上]',

    multiIndex: [0, 0]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    if (this.data.TabCur == 1) {
      this.getComposite()
    } else if (this.data.TabCur == 2) {
      //四六级查询
      this.getCETScoreList()
    }
  },
  // bindMultiPickerChange: function (e) {
  //   this.setData({
  //     multiIndex: e.detail.value
  //   })
  // },

  // cetSelect(e) {
  //   this.setData({
  //     CETCur: e.currentTarget.dataset.id,
  //     scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
  //   })
  //   if(e.currentTarget.dataset.id==0){
  //     if(this.data.cet['CET4']!=undefined){
  //       this.setData({CurCET:this.data.cet['CET4'][0]})
  //     }else{
  //       this.setData({CurCET:null})
  //     }
  //   }else if(e.currentTarget.dataset.id=1){
  //     if(this.data.cet['CET6']!=undefined){
  //       this.setData({CurCET:this.data.cet['CET4'][0]})
  //     }else{
  //       this.setData({CurCET:null})
  //     }
  //   }
  // },

  onLoad: function (options) {
    let time = util.formatDay(new Date());
    //计算学期
    let semesterArr = []
    let id = this.data.stuId.substr(0, 2)
    let year = Number(id)
    for (let i = 0; i < 4; i++) {
      let next = year + 1
      let str = '20' + year + '-20' + next + '学年'
      semesterArr.push(str)
      year++
    }
    this.setData({
      date: time,
      multiArray: [semesterArr, ['第1学期', '第2学期']],
      tabNav: scoreNavBar
    })
  },
  onReady: function () {
    
    let init = this.data.multiArray[0][0] + ' ' + this.data.multiArray[1][0]
    this.getSubjectScore(init)
  },
  //选择学期
  chooseSemester(e) {
    let index = e.detail.value
    let term = this.data.multiArray[0][index[0]] + ' ' + this.data.multiArray[1][index[1]]
    this.setData({
      multiIndex: e.detail.value
    })
    this.getSubjectScore(term)
  },
  //获得学科成绩
  getSubjectScore(semester) {
    this.setData({ 'table.column': scoreColumn })
    request.get('student/score',
      { id: app.globalData.user.id, semester: semester })
      .then(res => {
        this.setData({ 'table.body': res.data })
      })
  },
  //获取综合成绩
  getComposite() {
    console.log("todo composit")
  },
  // 获取CET成绩
  getCETScoreList() {
    request.get('student/getCETScore', { id: app.globalData.user.id })
      .then(res => {
        this.setData({
          cet: res.data,
          CurCET: res.data['CET4'][0]
        })
      })
  },

})