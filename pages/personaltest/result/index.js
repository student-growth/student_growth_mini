import { exam, collegeTest } from '../../../store/index'
Page({
  data: {},
  onLoad: function (options) {
    let resultList = JSON.parse(options.result)  
    switch (options.id) {
      case '0':
        this.getHollandResult(resultList)
        break
      case '2':
        console.log(22222)
        //计算总分数
        let total = 0;
        resultList.forEach(element => {
          total += element
        });
        let result = this.getResultContent(total)
        this.setData({
          score:total,
          result:result
        })
        break
    }
  },
  getResultContent(score){
    if(score>=0  && score<=8){
      return '心理非常健康，请你放心'
    }else if(score>=9 && score<=16){
      return '大致还属于健康的范围，但应有所注意， 也可以找老师或同学聊聊'
    }else if(score>=17 && score<=30){
      return "你在心理方面有了一些障碍，应采取适当的方法进行调适，或找心理辅导老师帮助你"
    }else if(score>=31 && score<=40){
      return '黄牌警告，有可能患了某些心理疾病,建议找专门的心理医生进行检查治疗'
    }else{
      return '有较严重的心理障碍，应及时找专门的心理医生治疗'
    }
  },
  getHollandResult(list){
    console.log(list)
  }
})