import request from '../../../request/index.js'
Page({
  data: {
    index:0
  },
  onLoad: function (options) { 
    let user = wx.getStorageSync('user');
    this.setData({ user, title: options.title })
  },
  onReady: function () {
    //计算学年
    let semester = []
    let stuId = this.data.user.id
    let id = stuId.substr(0, 2) 
    let currentYear = new Date().getFullYear()
    let entrance = Number('20' + id)
    //let yearArray=[]
    for (let i = currentYear; i >= entrance; i--) {
      let str = i + '-' + (i + 1) + '学年'
      semester.push(str)
    }
    //semester.push("全部")
    this.setData({
      semester
    })
    let info = {
      studentId: this.data.user.id,
      applyName: this.data.title,
      semester: semester[0].substr(0,9)
    }
    this.getApplyStatus(info)
  },
  //选择学年
  chooseSemester(e){
    let index = e.detail.value
    this.setData({
      index
    })
    let info = {
      studentId: this.data.user.id,
      applyName: this.data.title,
      semester: this.data.semester[index].substr(0,9)
    }
    //网络请求 
    this.getApplyStatus(info)

  },
  getApplyStatus(formData) {
    wx.showLoading()
    request.post('apply/scholarship_list', formData)
      .then(res => {
        wx.hideLoading()
        this.setData({
          list: res.list
        })
      }).catch(err => {
        console.log(err)
        wx.hideLoading()
        wx.showToast({title:'发生错误:'+JSON.stringify(err),icon:'none'})
      })
  }

})