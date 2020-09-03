// pages/comment/index.js
import request from '../../request/index.js'
Page({

  data: {
    show: false,
    showError: false,
    // todo 测试数据
    student: [
      { id: '123', name: '李玉娥', grade: '物联网1802' },
      { id: '124', name: '李玉娥', grade: '物联网1802' },
      { id: '125', name: '李玉娥', grade: '物联网1802' },
      { id: '126', name: '李玉娥', grade: '物联网1802' },
    ],
  },
  //为其他同学评分
  scoring(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({ index: index })
    this.showModal()
  },
  showModal() {
    //刷新表单数据 
    this.setData({ show: true })
  },
  //隐藏对话窗口
  hideModal(e) {
    this.setData({ 
      show: false
    })
  },
  onLoad: function () {
    //网络请求
  },
  //提交表单
  submitForm(e) {
    console.log(e.detail.value)
    let formData = e.detail.value;

    request.post('commit', { formData })
      .then(res => {
        // console.log(res)
        wx.showToast({
          title: res.sysError,
          icon: 'none',
          duration: 3000
        })
      })
  },

  charaInput(e) {

    this.setData({
      showError: false,
      'dialogForm.moral': e.detail.value
    })

  },
  psyInput(e) {
    this.setData({ 
      showError:false,
      'dialogForm.psy': e.detail.value })
  },
  // 对话框提交
  dialogFormSubmiit(e) { 
    let formData = this.data.dialogForm
    if (formData.psy < 0 || formData.psy > 100 || formData.moral < 0 || formData.moral > 100) {
      this.setData({
        showError: true
      })
      return
    } 
  
    let index = this.data.index
    console.log(index)
    let psy = 'student[' + index + '].psy'
    let moral = 'student[' + index + '].moral'
    this.setData({
      [psy]: formData.psy,
      [moral]: formData.moral
    })
    request.post('commit', this.data.dialogForm)
      .then(res => {
        this.hideModal()
      }).catch(err => {
         
        wx.showToast({
          title: JSON.stringify(err),
          icon: 'none'
        })
        this.hideModal()
      })
  },
  resetForm() {
    this.setData({
      dialogForm: null,
      showDialogue: false
    })
  }
})