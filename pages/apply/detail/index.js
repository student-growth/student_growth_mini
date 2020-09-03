import request from '../../../request/index.js'
const app = getApp();
const util = require('../../../utils/util.js')
Page({
  data: {
    user: app.globalData.user,
    imgList: []
  },
  onLoad: function (options) {
    request.get("project/getFormTemp", { menuId: options.menuId })
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
  DateChange(e) {
    this.setData({
      'formData.date': e.detail.value
    })
  },

  ChooseImage() {
    wx.chooseImage({
      count: 4,
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
    wx.uploadFile({
      url: 'http://localhost:8800/student/submitApply',
      header: {
        "Content-Type": "multipart/form-data"
      },
      filePath: this.data.imgList[0],
      name: 'file',
      formData: {
        'formData': JSON.stringify(e.detail.value),
        'userId': app.globalData.user.id,
        'applyId': this.data.applyId,
        'formTemp': this.data.formTemp
      },
      success: function (res) {
        wx.showModal({
          title: '提交成功',
          content: '请到【进度查询】中查看申请进度'
        })

      }

    })

  },

  handleReset(e) {

  }
})