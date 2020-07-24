const toolsList =[{
  id: 0, name: '成绩查询', url: '../../pages/score/index', icon: 'annual-report'
}, {
  id: 1, name: '成果申请', url: '../../pages/apply/index', icon: 'youzhifuwu'
}, {
  id: 2, name: '学生评价', url: '../../pages/comment/index', icon: 'qianshuhetong'
}, {
  id: 3, name: '进度查询', url: '../../pages/process/index', icon: 'tuanduijineng'
}, {
  id: 4, name: '奖学金申请', url: '../../pages/scholarship/index', icon: 'daikuan'
}, {
  id: 5, name: '意见反馈', url: '../../pages/questions/index', icon: 'tounaofengbao'
}]

const scoreColumn=['课程名称','平时成绩','期末成绩','总成绩','学分','绩点']

const processColumn=['已经申请成果','进度','分数','备注']
module.exports={
  toolsList,scoreColumn,processColumn
}