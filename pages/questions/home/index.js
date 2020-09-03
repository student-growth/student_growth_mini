import request from '../../../request/index'
Page({

  data: {

  },
  onLoad: function (options) {
    this.getQuesList();
  },
  //获得问题列表
  getQuesList(){
    request.get('question/getQues',{size:3})
    .then(res=>{
      this.setData({questlist:res.list})
    })
  },
  textareaInput(e){
    console.log(e)
  },
  checkDetail(e){
    console.log(e.currentTarget.dataset.item)
    
  }
  

})