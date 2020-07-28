const toolsList = [{
  id: 0, name: '成绩查询', url: '/pages/score/index', icon: 'upstagefill', color: 'yellow'
}, {
  id: 1, name: '成果申请', url: '/pages/apply/list/index', icon: 'medalfill', color: 'blue'
}, {
  id: 2, name: '学生评价', url: '/pages/comment/index', icon: 'writefill', color: 'pink'
}, {
  id: 3, name: '进度查询', url: '/pages/process/list/index', icon: 'rankfill', color: 'orange'
}, {
  id: 4, name: '奖学金申请', url: '/pages/scholarship/list/index', icon: 'moneybagfill', color: 'mauve'
}, {
  id: 5, name: '意见反馈', url: '/pages/questions/index', icon: 'questionfill', color: 'cyan'
}]
const scoreColumn = ['课程名称', '平时成绩', '期末成绩', '总成绩', '学分', '绩点']
const scoreNavBar = ['学科成绩', '综合成绩', 'CTE成绩']
const processColumn = ['已经申请成果', '进度', '分数', '备注']
const applyCategory = [
  {
    id: 0, name: '研究创新', icon: 'creativefill',color:'blue',
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
    icon: 'selectionfill',
    color:'yellow'
  }, {
    id: 2,
    name: '专业技能',
    icon: 'appreciatefill',
    color:'red'
  }, {
    id: 3,
    name: '文体特长',
    icon: 'upstagefill',
    color:'orange'
  }, {
    id: 4,
    name: '社会实践',
    icon: 'circlefill',
    color:'mauve'
  }, {
    id: 5,
    name: '组织领导',
    icon: 'group_fill',
    color:'blue'
  }]
// 奖学金列表
  const scholarshipList=[
    {id:0,title:'优秀学生综合奖学金',name:'Merit scholarship',color:'orange',icon:'selectionfill'},
    {id:1,title:'能力突出奖学金',name:'Ability Outstanding Scholarship',color:'blue',icon:'appreciatefill'},
    {id:2,title:'单项奖学金',name:'Individual scholarships',color:'pink',icon:'upstagefill'}
  ]

// 能力突出奖学金列表
const outstandingList=[
  {id:0,color:"red",title:'学习优秀奖',content:'条件:专业素质前20%,但未获优秀学生综合奖学金'},
  {id:1,color:"olive",title:'综合能力突出奖',content:'条件:专业素质前20%,但未获优秀学生综合奖学金'},
  {id:2,color:"blue",title:'研究创新奖',content:'条件:不符合优秀学生综合奖学金要求，但学科竞赛取得国三、省一及以上/第一作者发表论文被SCI/EI/ISTP收录'},
  {id:3,color:"cyan",title:'特别贡献奖',content:'条件:条件:不符合优秀学生综合奖学金要求，但为学校发展做出特别贡献者'},
]

// 单项奖学金
const individualList=[
  "文体优秀单项奖学金","社会工作单项奖学金","学习优胜单项奖学金"
]



// export
module.exports = {
  toolsList,
  scoreColumn,
  processColumn,
  scoreNavBar,
  applyCategory,
  scholarshipList,
  outstandingList,
  individualList
}