import { exam, collegeTest } from '../../../store/index'
Page({
  data: {
    scoreArray: []
  },
  onLoad: function (options) {
    if (options.id == 0) {
      this.setData({
        examList: exam
      })
    } else if (options.id == 2) {
      this.setData({
        examList: collegeTest
      })
    }
    // 设置id
    this.setData({
      id: options.id
    })
  },
  selectRadio(e) {
    let type = this.data.id
    let value = Number(e.detail.value)
    let index = e.currentTarget.dataset.index
    // 霍兰德职业兴趣测试 || 大学生心理测试
    if (type == 0 || type ==2) {
      this.data.scoreArray.splice(index, 1, value)
    } else{

    }
  },
  handleReset(e) {
    this.data.scoreArray.splice(0)
  },
  handleSubmit(e) {
    let length = this.data.scoreArray.length
    // if (length != this.data.examList.test.length) {
    //   //提示答题不全
    //   wx.showToast({
    //     title: '请答完所有题目',
    //     icon: 'none',
    //     duration: 3000
    //   })
    // } else {
    //   wx.navigateTo({
    //     url: '/pages/personaltest/result/index?result='
    //       + JSON.stringify(this.data.scoreArray) + '&id=' + this.data.id
    //   })
    // }

      wx.navigateTo({
        url: '/pages/personaltest/result/index?result='
          + JSON.stringify(this.data.scoreArray) + '&id=' + this.data.id
      })
  }
})