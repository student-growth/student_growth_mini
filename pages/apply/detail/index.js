import request from '../../../request/index.js'
const app = getApp();
const util = require('../../../utils/util.js')
Page({
  data: {
    formData: {},
    imgList: [],
    disable: false,
    score: null
  },
  onLoad: function (options) {
    let info = { menuId: options.menuId, projectId: options.applyId }
    request.get("project/getFormTemp", info)
      .then(res =>
        this.setData({
          applyId: options.applyId,
          formTemp: JSON.parse(res.data)
        })
      )

    let time = util.formatDay(new Date());
    let name = options.name
    this.setData({
      'formData.date': time,
      name: name
    })
  },
  onReady: function () {
    let user= wx.getStorageSync('user')
    this.setData({
      user
    })
  },
  PickerChange(e) {
    let value = e.detail.value
    let index = e.currentTarget.dataset.index
    let scoreList = this.data.formTemp[index].scoreList
    let str = `formTemp[${index}].index`
    //修改选项和分值
    this.setData({
      [str]: value,
      score: scoreList[value]
    })

  },
  DateChange(e) {
    this.setData({
      'formData.date': e.detail.value
    })
  },

  ChooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      content: '确定要删除该图片吗？',
      cancelText: '取消',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },

  handleSubmit(e) {
    let info = {
      formData: JSON.stringify(e.detail.value),
      formTemp: JSON.stringify(this.data.formTemp),
      studentId: this.data.user.id,
      applyId: this.data.applyId,
      applyName: this.data.name,
      score: this.data.score
    }
    let imagePath = this.data.imgList[0]
    wx.showLoading({
      title: '上传中...'
    })
    this.setData({
      disable: true
    })
    //如果没有选择图片
    if (this.data.imgList == undefined || this.data.imgList.length == 0) {
      request.post('apply/submit_no_image', info)
        .then(res => {
          wx.showModal({
            title: '申请成功',
            content: '请到【进度查询】中查看申请进度'
          })
          wx.hideLoading()
        }).catch(err => {
          wx.hideLoading()
          wx.showToast({
            title: "上传失败",
            icon: 'none',
            duration: 3000
          })
          this.setData({
            disable: false
          })
        })
    } else {
      request.upload('apply/submit', info, imagePath)
        .then(res => {
          console.log(res)
          wx.showModal({
            title: '申请成功',
            content: '请到【进度查询】中查看申请进度'
          })
          wx.hideLoading()
        }).catch(err => {
          wx.hideLoading()
          wx.showToast({
            title: "上传失败",
            icon: 'none',
            duration: 3000
          })
          this.setData({
            disable: false
          })
        })
    }
  },

  handleReset(e) {

  }
})