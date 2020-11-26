// pages/comment/index.js
import request from '../../request/index.js'
Page({
  data: {
    show: false,
    showError: false,

  },
  //显示弹窗
  scoring(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({ index: index })
    this.showModal()
  },
  showModal() {
    this.setData({ show: true })
  },

  hideModal(e) {
    this.setData({
      dialogForm:{},
      show: false
    })
  },
  onLoad: function () {
    let user= wx.getStorageSync('user');
    this.getStudentInfo(user)
    //计算学年
    let year=new Date().getFullYear()
    this.setData({ user,
      semester:year+'-'+(year+1)+'学年'
    })
     
  },
  onReady: function () {
    let id = this.data.user.id
    this.getAllScore(id)
  },
  getStudentInfo(user) {
    let id = user.id
    let grade = user.grade
    request.get("open/studentInfo", { id, grade })
      .then(res => {
        this.setData({
          students: res.list
        })
      })
  },
  comment(formData) {
    wx.showLoading({title:'加载中'})
    request.post('student/comment', formData)
      .then(res => {
        wx.hideLoading()
        this.showSuccess()
        this.hideModal()
      }).catch(err => {
         
        wx.hideLoading()
        this.hideModal()
        wx.showToast({
          title: "错误："+JSON.stringify(err.data),
          icon: 'none'
        })
      })
  },
  getAllScore(id) {
    wx.showLoading()
    request.get('student/getCommentScore', { id })
      .then(res => {
        wx.hideLoading()
        this.concatScore(res.list)
      })
  },

  concatScore(list){
    let students = this.data.students
    let id=this.data.user.id
    if(list==undefined||list==null){
      return 
    }
    for(let i=0;i<list.length;i++){
      students.forEach(item=>{
        if(item.id==list[i].other)
        item.psychology = list[i].psy
        item.moral=list[i].moral
      })
      if(id==list[i].other){
        let self={moral:list[i].moral,psychology:list[i].psy}
        this.setData({
           self
        })
      }
    }
    this.setData({students})
  },
  //提交表单
  submitForm(e) {
    let formData = e.detail.value;
    let id = this.data.user.id
    formData.id = id
    formData.other = id
    //提交评论
    this.comment(formData)
  },

  charaInput(e) {
    this.setData({
      showError: false,
      'dialogForm.moral': e.detail.value
    })

  },
  psyInput(e) {
    this.setData({
      showError: false,
      'dialogForm.psychology': e.detail.value
    })
  },
  // 对话框提交
  dialogFormSubmit() {
    let formData = this.data.dialogForm
    formData.id = this.data.user.id
    if (formData.psychology < 0 || formData.psychology > 100
      || formData.moral < 0 || formData.moral > 100) {
      this.setData({
        showError: true
      })
      return
    }
    let index = this.data.index 
    let psychology = `students[${index}].psychology`
    let moral = `students[${index}].moral`
    this.setData({
      [psychology]: formData.psychology,
      [moral]: formData.moral
    })
    formData.other = this.data.students[index].id
    this.comment(formData)
  },
  resetForm() {
    this.setData({
      dialogForm:{},
      show: false
    })
  },
  showSuccess() {
    wx.showToast({
      title: "评论成功",
      icon: 'none'
    })
  }
})