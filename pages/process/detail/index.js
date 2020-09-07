import request from '../../../request/index'
const app = getApp()
Page({
  data: {
    //是否禁用表单
    disabled:true,
    imgList:[]
  }, 
  onLoad: function(options) {  
    if(options.disabled==undefined){
      this.setData({disabled:true})
    }else{
      this.setData({disabled:false})
    }
    let that = this
    wx.getStorage({
      key:"processDetail",
      success(res){
        that.setData({
          image:app.globalData.imgHost.concat(res.data.image),
          formData:JSON.parse(res.data.formData),
          formTemp:JSON.parse(res.data.formTemp),
          state:res.data.applyState,
          applyName:options.applyName,
          id:options.id
        })
      }
    })
  },
  //网络请求
  onReady:function(){
    this.getFormDetail()
  },
  viewImage(e){
    wx.previewImage({
      urls:[this.data.image],
      current:e.currentTarget.dataset.url
    })
  },
  //获取表单详细信息
  getFormDetail(){ 
    let item = this.data.formTemp
    for(let i=0;i<item.length;i++){
      let key= item[i].key
      item[i]['value']=this.data.formData[key]
    }
    this.setData({formTemp:item})
  },
  //提交表单
  submitModify(e){
    let info={
      formData:JSON.stringify(e.detail.value),
      id:this.data.id
    } 
    request.upload('apply/modify',info,this.data.imgList[0])
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  //重置提交表单
  resetModify(e){

  },
  
  DateChange(e){
    let index= e.currentTarget.dataset.index 
    let str=`formTemp[${index}].value`
    this.setData({
      [str]:e.detail.value
    })
  },
  PickerChange(e){ 
    let index = e.currentTarget.dataset.index
    let arr = e.currentTarget.dataset.arr
    let str=`formTemp[${index}].value`
    this.setData({
      [str]:arr[e.detail.value]
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
  back(){
    wx.navigateBack()
  }
})