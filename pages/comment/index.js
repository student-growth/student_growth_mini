// pages/comment/index.js
import {request} from '../../request/index.js'
Page({
  
  data: {
    showDialogue:false,
    formMap: [{
      id:0,
      key:'charaScore',
      name:'品德素质',
      holder:'分数范围[0-100]',
      type:'number'
    },{
      id:1,
      key:'psyScore',
      name:'心理素质',
      holder:'分数范围[0-100]',
      type:'number'
    }],
    StudentList:[{
      id:0,
      name:'1.张三'
    },{
      id:1,
      name:'2.李四'
    },{
      id:2,
      name:'3.王五'
    },{
      id:3,
      name:'4.'
    },{
      id:4,
      name:'5.'
    },{
      id:5,
      name:'6.'
    },{
      id:6,
      name:'7.'
    },{
      id:7,
      name:'8.'
    },{
      id:8,
      name:'9.'
    }]
  },

  showDialogue(e){
    console.log("showdialoag");
    console.log(e);
    this.setData({
      showDialogue:true
    }) 
  },
  hiddenDialogue(){
    this.setData({
      showDialogue:false
    })
  }, 
  submitForm(formData){
    console.log(formData)
    //todo 请求提交表单
    let result = true;
    if(result){
        wx.showToast({
          title: '评分成功',
          icon: 'none',
          duration: 2000,
          success: (result) => {
            this.setData({showDialogue:false})
          }
        });
    }
  },
  resetForm(){
    this.setData({
      showDialogue:false
    })
  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})