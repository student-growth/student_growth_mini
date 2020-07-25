const toolsList = [{
  id: 0, name: '成绩查询', url: '../../pages/score/index', icon: 'upstagefill', color: 'yellow'
}, {
  id: 1, name: '成果申请', url: '../../pages/apply/index', icon: 'medalfill', color: 'blue'
}, {
  id: 2, name: '学生评价', url: '../../pages/comment/index', icon: 'writefill', color: 'pink'
}, {
  id: 3, name: '进度查询', url: '../../pages/process/index', icon: 'rankfill', color: 'orange'
}, {
  id: 4, name: '奖学金申请', url: '../../pages/scholarship/index', icon: 'moneybagfill', color: 'mauve'
}, {
  id: 5, name: '意见反馈', url: '../../pages/questions/index', icon: 'questionfill', color: 'cyan'
}]
const scoreColumn = ['课程名称', '平时成绩', '期末成绩', '总成绩', '学分', '绩点']
const scoreNavBar = ['学科成绩', '综合成绩', 'CTE成绩']
const processColumn = ['已经申请成果', '进度', '分数', '备注']
const applyCategory = [{id: 0,name: '研究创新',iconName: 'yingxiaolinian',
secondCate: [{
    id: 0,
    name: '刊物发表',
    thirdCate: []
  }, {
    id: 1,
    name: '专利发表',
    thirdCate: [{
      id: 0,
      name: '发明专利',
      formId: ''
    }, {
      id: 1,
      name: '实用新型专利'
    }, {
      id: 2,
      name: '外观设计专利'
    }, {
      id: 3,
      name: '计算机软件著作权'
    }]
  }, {
    id: 2,
    name: '创新创业',
    formId: '1_3',
    thirdCate: [{
      id: 0,
      name: '国家级创新项目'

    }, {
      id: 1,
      name: '省级创新项目-省新苗'
    }, {
      id: 2,
      name: '校级创新项目'
    }]
  }, {
    id: 3,
    name: '学科竞赛',
    formId: '1_4',
    thirdCate: [{
      id: 0,
      name: '挑战杯'
    }, {
      id: 1,
      name: '互联网+'
    },
    {
      id: 2,
      name: '大学生电子商务竞赛'
    }, {
      id: 3,
      name: '大学生程序设计竞赛'
    }, {
      id: 4,
      name: '大学生物理创新竞赛'
    }, {
      id: 5,
      name: '互联网+'
    }]
  }]
}, {
  id: 1,
  name: '品德纪实',
  iconName: 'approved',
}, {
  id: 2,
  name: '专业技能',
  iconName: 'gerenjineng',
}, {
  id: 3,
  name: '文体特长',
  iconName: 'baochou',
}, {
  id: 4,
  name: '社会实践',
  iconName: 'achieving-goals',
}, {
  id: 5,
  name: '组织领导',
  iconName: 'tuanduilingdao',
}]
module.exports = {
  toolsList,
  scoreColumn,
  processColumn,
  scoreNavBar,
  applyCategory
}