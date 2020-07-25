// pages/comment/index.js
import request from '../../request/index.js'
Page({
  
  data: {
    show:false
  },
  //为其他同学评分
  scoring(e){
    let info= e.currentTarget.dataset;
    console.log(info)
    this.showModal()
  },
  showModal(){
    this.setData({show:true})
  },
  //隐藏对话窗口
  hideModal(e) {
    this.setData({
      dialogForm:null,
      show:false
    })
  },
  onLoad:function(){
    
  },
  //提交表单
  submitForm(e){
    console.log(e.detail.value)
    let formData = e.detail.value;
    request.post('commit',{formData})
    .then(res=>{
      console.log(res) 
    })
  },

  charaInput(e){
    this.setData({'dialogForm.chara':e.detail.value})
  },
  psyInput(e){
    this.setData({'dialogForm.psy':e.detail.value})
  },
  dialogFormSubmiit(e){
    console.log(e)
    request.post('commit',this.dialogForm)
    .then(res=>{
      console.log(res)
      this.hideModal()
    }).catch(err=>{
      console.log(err)
      this.hideModal()
    })
  },
  resetForm(){
    this.setData({
      dialogForm:null,
      showDialogue:false
    })
  }
})