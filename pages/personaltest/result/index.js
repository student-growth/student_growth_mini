import { matchResult } from '../../../store/holland.js'
import request from '../../../request/index.js'
Page({
  data: {},
  onLoad: function (options) {
    //todo 区分首次测试和查看结果
    this.setData({
      id: options.id,
      type: options.type,
      saveList: options.result
    })
    let resultList = JSON.parse(options.result)
    switch (options.id) {
      case '0'://holland test
        this.getHollandResult(resultList)
        break
      case '2':
        let total = 0;
        resultList.forEach(element => {
          total += element
        });
        let result = this.getResultContent(total)
        this.setData({
          score: total,
          result: result
        })
        break
    }
  },
  getResultContent(score) {
    if (score >= 0 && score <= 8) {
      return '心理非常健康，请你放心'
    } else if (score >= 9 && score <= 16) {
      return '大致还属于健康的范围，但应有所注意，也可以找老师或同学聊聊'
    } else if (score >= 17 && score <= 30) {
      return "你在心理方面有了一些障碍，应采取适当的方法进行调适，或找心理辅导老师帮助你"
    } else if (score >= 31 && score <= 40) {
      return '黄牌警告，有可能患了某些心理疾病,建议找专门的心理医生进行检查治疗'
    } else {
      return '有较严重的心理障碍，应及时找专门的心理医生治疗'
    }
  },
  // 霍兰德职业兴趣测试
  getHollandResult(list) {
    const match = [
      { id: 0, name: '传统型', yes: [7, 19, 29, 39, 41, 51, 57], no: [5, 18, 40], type: 'C' },
      { id: 1, name: '现实型', yes: [2, 13, 22, 36, 43], no: [14, 23, 44, 47, 48], type: 'R' },
      { id: 2, name: '研究型', yes: [6, 8, 20, 30, 31, 42], no: [21, 55, 56, 58], type: 'I' },
      { id: 3, name: '企业型', yes: [11, 24, 28, 35, 38, 46, 60], no: [3, 16, 25], type: 'E' },
      { id: 4, name: '社会型', yes: [26, 37, 52, 59], no: [1, 12, 15, 27, 45, 53], type: 'S' },
      { id: 5, name: '艺术型', yes: [4, 9, 10, 17, 33, 34, 49, 50, 54], no: [32], type: 'A' },
    ]

    const character = [
      {
        id: 0,
        type: '传统型',
        profession: '出纳、会计、秘书',
        character: '具有顺从、谨慎、保守、自控、服从、规律、坚毅、实际稳重、有效率、但缺乏想象力等特征.\n表现为:\n 1、喜欢传统性质的的职业或环境，避免艺术性质的职业或情境，会以传统的能力解决工作或其他方面的问题;\n2、喜欢顺从、规律、有文书与数字能力，并重视商业与经济上的成就。'
      }, {
        id: 1,
        type: '现实型',
        profession: '工人、农民、土木工程师',
        character: '具有顺从、坦率、谦虚、自然、坚毅、实际、有礼、害羞、稳健、节俭的特征\n表现为:\n1、喜爱实用性的职业或情境，	以从事所喜好的活动， 避免社会性的职业或情境;\n2、用具体实际的能力解决工作及其他方面的问题， 较缺乏人际关系方面的能力.\n3、重视具体的事物，如金钱，权力、地位等'
      }, {
        id: 2,
        type: '研究型',
        profession: '科研人员、数学、 生物方面、的专家',
        character: '具有分析、谨慎、批评、好奇、独立、聪明、内向、条理、谦逊、精确、理发、保守的特征\n表现为:\n1、喜爱研究性的职业或情境，避免企业性的职业或情境;\n2、用研究的能力解决工作及其他方面的问题，即自觉、好学、自信，重视科学，但缺乏领导方面的才能。'
      }, {
        id: 3,
        type: '企业型',
        profession: '推销员、 政治家、企业家',
        character: '具有冒险、野心、独断、冲动、乐观、自信、追求享受、精力充沛、善于社交、获取注意、知名度等特征\n表现为:\n1、喜欢企业性质的的职业或环境，避免研究性质的职业或情境，会以企业方面的能力解决工作或其他方面的问题能力;\n2、有冲动、自信、善社交、知名度高、有领导与语言能力，缺乏科学能力，但重视政治与经济上的成就。'
      }, {
        id: 4,
        type: '社会型',
        profession: '教师、牧师、辅导人员',
        character: '具有合作、友善、慷慨、助人、仁慈、负责、圆滑、善社交、善解人意、说服他人、理想主义等特征\n表现为:\n1、喜爱社会型的职业或情境，避免实用性的职业或情境，并以社交方面的能力解决工作及其他方面的问题，但缺乏机械能力与科学能力;\n2、喜欢帮助别人、了解别人，有教导别人的能力，且重视社会与伦理的活动与问题。'
      }, {
        id: 5,
        type: '艺术型',
        profession: '诗人、艺术家',
        character: '具有复杂、 想象、 冲动、独立、直觉、无秩序、情绪化、理想化、不顺从、有创意、富有表情、不重实际的特征\n表现为:\n1、喜爱艺术性的职业或情境，避免传统性的职业或情境;\n2、富有表达能力和直觉、独立、具创意、不顺从（包括表演、写作、语言），并重视审美的领域'
      }
    ]
    //item
    let resultList = []
    match.forEach((element) => {
      let total = 0
      element.yes.forEach(item => {
        if (list[item] == 1) {
          total++
        }
      })
      element.no.forEach(item => {
        if (list[item] == 0) {
          total++
        }
      })
      resultList.push(total)
    })
    //获取人格倾向
    let characterList = []
    let index = this.getThreeMaxIndex(resultList)
    let profession = ''
    index.forEach(item => {
      profession += match[item].type
      characterList.push(character[item])
    })

    for (let i = 0; i < matchResult.length; i++) {
      if (matchResult[i].type == profession) {
        this.setData({ profession: matchResult[i].content })
      }
    }
    this.setData({ characterList })

    // this.setData({ resultList: resultList })
  },
  //获取前三个最大的数的下标
  getThreeMaxIndex(list) {
    let index = []
    let count = 0
    while (count < 3) {
      let max = -1
      let point = -1
      for (let i = 0; i < list.length; i++) {
        if (max < list[i]) {
          max = list[i]
          point = i
          list[i] = -2
        }
      }
      index.push(point)
      count++
    }
    return index
  },
  saveResult() {
    let user = wx.getStorageSync('user')
    let testName=this.data.id;
    let result = this.data.saveList;
    let info = { id: user.id, testName, result }
    
    wx.showLoading()
    request.post('psy_test/savePsyResult', info)
      .then(res => {
        wx.hideLoading()
        wx.showToast({title:'保存成功',icon:'none',duration:4000})
        this.setData({ disable: true })
        wx.navigateTo({
          url:'/pages/personaltest/list/index'
        })
      }).catch(err=>{
        wx.hideLoading()
        wx.showToast({title:'错误：'+JSON.stringify(err),icon:'none',duration:4000})
      })
     
  },
  back() {
    wx.navigateTo({
      url:'/pages/personaltest/list/index'
    })
  }

})