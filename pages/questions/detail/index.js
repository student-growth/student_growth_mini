import request from '../../../request/index.js'
Page({
  data: {
    questionDetail:{}
  },
  onLoad: function(options) {
    let detail =JSON.parse(options.detail)
    this.setData({question:detail})
    this.getQuestionDtail({id:detail.id})
  },
  onReady: function() {
    
  } ,
  getQuestionDtail(formData){
    request.get('question/getFeedback',formData)
    .then(res=>{
      this.setData({
        'question.feedback':res.data
      })
    })
  },
  back(){
    wx.navigateBack()
  }
})