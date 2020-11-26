import request from '../../../request/index.js'
let app = getApp();


Page({
  data: {
    rankSort: {
      profession: '专业技能',
      leader: '组织领导',
      practice: '社会实践',
      special: '文体特长',
      creative: '研究创新'
    },
    rankList:[
      {key:'profession',value:'专业技能'},
      {key:'leader',value:'组织领导'},
      {key:'practice',value:'社会实践'},
      {key:'special',value:'文体特长'},
      {key:'creative',value:'研究创新'},
    ],
    colorList: [
      'blue', 'pink', 'purple','red', 'olive'
    ],

  },
  onLoad: function (options) {
    let user = wx.getStorageSync('user');
    let info = {
      studentId: user.id,
      semester: app.globalData.semester
    }
    this.getRankList(info)
  },

  checkDetail(e){
    let studentId=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/rank/detail/index?id='+studentId
    })
  },

  getRankList(formData) {
    //let rankList ={}
    wx.showLoading({
      title: '数据加载中...'
    })
    request.post('student/getRank', formData)
      .then(res => {
        let data = res.data 
        let list = []
        let rankList = this.data.rankList
        rankList.forEach(item=>{
           let obj={
             key:item.key,
             data:data[item.key],
             name:this.data.rankSort[item.key] ||item.key
           }
           list.push(obj)
        })
        this.setData({ list })

        wx.hideLoading()
      }).catch(err => {
        console.log(err)
        wx.hideLoading()
        wx.showToast({
          title: '发生错误:' + JSON.stringify(err),
          icon: 'none'
        })
      })
  }
})