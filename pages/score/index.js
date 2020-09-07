// pages/score/index.js 分数查询页面
import request from '../../request/index.js'
import { scoreNavBar } from '../../store/index.js'
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    yearindex: 0,
    multiIndex: [0, 0],
    totalScoreColumn: ['项目名称', '分值', '获奖时间'],
    scoreColumn: ['课程名称', '总成绩', '学分']
  },
  onLoad: function (options) {
    wx.getStorage({ key: 'user' })
      .then(res => {
        this.setData({ user: res.data })
      })

  },
  onReady: function () {
    let time = util.formatDay(new Date());
    //计算学年
    let semesterArr = []
    let stuId = this.data.user.id
    let id = stuId.substr(0, 2)

    let currentYear = new Date().getFullYear()
    let entrance = Number('20' + id)
    //let yearArray=[]
    for (let i = currentYear; i >= entrance; i--) {
      let str = i + '-' + (i + 1) + '学年'
      semesterArr.push(str)
    }
    this.setData({
      date: time,
      multiArray: [semesterArr, ['第1学期', '第2学期']],
      yearArray: semesterArr,
      tabNav: scoreNavBar
    })
    let info = {
      id: stuId,
      semester: this.data.multiArray[0][0] + ' ' + this.data.multiArray[1][0]
    }
    this.getSubjectScore(info)
  },
  tabSelect(e) {
    let currentIndex = e.currentTarget.dataset.id
    this.setData({
      TabCur: currentIndex,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
      'table.column': null,
      'table.body': []
    })

    if (currentIndex == 1) {//选择查看综合成绩
      let info = {
        id: this.data.user.id,
        semester: this.data.yearArray[0]
      }
      this.getComposite(info)
    } else if (currentIndex == 0) { //选着查看期末成绩
      let formData = {
        id: this.data.user.id,
        semester: this.data.multiArray[0][0] + ' ' + this.data.multiArray[1][0]
      }
      this.getSubjectScore(formData)
    }
  },
  //选择学年
  changeYear(e) {
    let index = e.detail.value
    this.setData({ yearindex: index })

    let info = {
      id: this.data.user.id,
      semester: this.data.yearArray[index]
    }
    this.getComposite(info)
  },
  //选择学期
  chooseSemester(e) {
    let index = e.detail.value
    this.setData({
      multiIndex: e.detail.value
    })
    let info = {
      id: this.data.user.id,
      semester: this.data.multiArray[0][index[0]] + ' ' + this.data.multiArray[1][index[1]]
    }
    this.getSubjectScore(info)
  },
  //获得学科成绩
  getSubjectScore(info) {
    request.get('student/score', info)
      .then(res => {
        if (res.data != undefined || res.data != null) {
          this.setData({
            'table.column': this.data.scoreColumn,
            'table.body': res.data
          })
        }
      }).catch(err => {
        console.log(err)
        wx.showToast({
          title: '获取数据失败:' + JSON.stringify(err),
          icon: 'none',
          duration: 4000
        })
      })
  },
  //获取综合成绩
  getComposite(info) {
    request.get('score/totalScore', info)
      .then(res => {
        if (res.data != null) {
          this.setData({
            'table.column': this.data.totalScoreColumn,
            'table.body': res.data
          })
          let result = this.getTotalScore(res.data)
          this.setData({
            totalScore:result
          })
        }
      }).catch(err => {
        console.log(err)
        wx.showToast({
          title: '获取数据失败' + JSON.stringify(err),
          icon: 'none',
          duration: 3000
        })
      })
  },

  //获取综合能力评分
  getTotalScore(list) {
    let total = 75
    for (let key in list) {
      let arr = list[key]
      let score = 0
      arr.forEach(item => {
        score += item.score
      })
      switch (key) {
        case '研究创新':
          total += score * 0.3
          break
        case '专业技能':
          total += score * 0.25
          break
        case '组织领导':
          total += score * 0.15
          break
        case '社会实践':
          total += score * 0.15
          break
        case '文体特长':
          total += score * 0.15
          break
      }
    }
    return total
  }
  // // 获取CET成绩
  // getCETScoreList() {
  //   request.get('student/getCETScore', { id: app.globalData.user.id })
  //     .then(res => {
  //       this.setData({
  //         cet: res.data,
  //         CurCET: res.data['CET4'][0]
  //       })
  //     })
  // }

})