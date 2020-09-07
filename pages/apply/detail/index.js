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
    wx.getStorage({
      key: 'user'
    }).then(res => this.setData({
      user: res.data
    }))
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
      count: 3,
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

  //提交申请
  handleSubmit(e) {
    let info = {
      formData: JSON.stringify(e.detail.value),
      formTemp: JSON.stringify(this.data.formTemp),
      userId: this.data.user.id,
      applyId: this.data.applyId,
      applyName: this.data.name,
      score: this.data.score
    }
    let imagePath = this.data.imgList[0]
    request.upload('apply/submit', info, imagePath)
      .then(res => {
        this.setData({
          disable: true
        })
        wx.showModal({
          title: '申请成功',
          content: '请到【进度查询】中查看申请进度',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }).catch(err=>{
        
      })

  },

  handleReset(e) {

  }
})