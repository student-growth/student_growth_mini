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
      show: false
    })
  },
  onLoad: function () {
    wx.getStorage({ key: 'user' })
      .then(res => {
        this.getStudentInfo(res.data)
        this.setData({ user: res.data })
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
    request.post('student/comment', formData)
      .then(res => {
        this.hideModal()
        this.showSuccess()
      }).catch(err => {
        wx.showToast({
          title: res.sysError,
          icon: 'none',
          duration: 3000
        })
      })
  },
  getAllScore(id) {
    request.get('student/getCommentScore', { id })
      .then(res => {
        this.concatScore(res.list)
      })
  },

  concatScore(list){
    let students = this.data.students
    let id=this.data.user.id
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
    console.log(typeof index)
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
      dialogForm: null,
      showDialogue: false
    })
  },
  showSuccess() {
    wx.showToast({
      key: "评论成功",
      icon: 'none'
    })
  }
})