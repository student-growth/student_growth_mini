Page({
  data: {
    index:null,
    level:[
      {id:0,name:'一等奖学金'},
      {id:1,name:'二等奖学金'},
      {id:2,name:'三等奖学金'},
    ]
  },
  chooseLevel(e){
    this.setData({
      index:e.detail.value
    })
  },
  onLoad: function(options) {
    
  }
})