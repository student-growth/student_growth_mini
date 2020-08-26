const toolsList = [{
  id: 0, name: '成绩查询', url: '/pages/score/index', icon: 'upstagefill', color: 'yellow'
}, {
  id: 1, name: '成果申请', url: '/pages/apply/list/index', icon: 'medalfill', color: 'blue'
}, {
  id: 2, name: '学生评价', url: '/pages/comment/index', icon: 'writefill', color: 'pink'
}, {
  id: 3, name: '谁是大神', url: '/pages/rank/home/index', icon: 'choicenessfill', color: 'olive'
}, {
  id: 4, name: '个性化榜单', url: '/pages/personalise/index', icon: 'friendfill', color: 'red'
}, {
  id: 5, name: '个人测试', url: '/pages/personaltest/index', icon: 'profilefill', color: 'brown'
}, {
  id: 6, name: '进度查询', url: '/pages/process/list/index', icon: 'rankfill', color: 'orange'
}, {
  id: 7, name: '奖学金申请', url: '/pages/scholarship/list/index', icon: 'moneybagfill', color: 'mauve'
}, {
  id: 8, name: '意见反馈', url: '/pages/questions/index', icon: 'questionfill', color: 'cyan'
}]
const scoreColumn = ['课程名称', '平时成绩', '期末成绩', '总成绩', '学分', '绩点']
const scoreNavBar = ['学科成绩', '综合成绩', 'CTE成绩']
const processColumn = ['已经申请成果', '进度', '分数', '备注']

const applyCategory = [
  { id: 0, name: '研究创新', icon: 'creativefill', color: 'blue' },
  { id: 1, name: '品德纪实', icon: 'selectionfill', color: 'yellow' },
  { id: 2, name: '专业技能', icon: 'appreciatefill', color: 'red' },
  { id: 3, name: '文体特长', icon: 'upstagefill', color: 'orange' },
  { id: 4, name: '社会实践', icon: 'circlefill', color: 'mauve' },
  { id: 5, name: '组织领导', icon: 'group_fill', color: 'blue' }
]
// 奖学金列表
const scholarshipList = [
  { id: 0, title: '优秀学生综合奖学金', name: 'Merit scholarship', color: 'orange', icon: 'selectionfill' },
  { id: 1, title: '能力突出奖学金', name: 'Ability Outstanding Scholarship', color: 'blue', icon: 'appreciatefill' },
  { id: 2, title: '单项奖学金', name: 'Individual scholarships', color: 'pink', icon: 'upstagefill' }
]

// 能力突出奖学金列表
const outstandingList = [
  { id: 0, color: "red", title: '学习优秀奖', content: '条件:专业素质前20%,但未获优秀学生综合奖学金' },
  { id: 1, color: "olive", title: '综合能力突出奖', content: '条件:专业素质前20%,但未获优秀学生综合奖学金' },
  { id: 2, color: "blue", title: '研究创新奖', content: '条件:不符合优秀学生综合奖学金要求，但学科竞赛取得国三、省一及以上/第一作者发表论文被SCI/EI/ISTP收录' },
  { id: 3, color: "cyan", title: '特别贡献奖', content: '条件:条件:不符合优秀学生综合奖学金要求，但为学校发展做出特别贡献者' },
]
// 单项奖学金
const individualList = [
  { id: 0, color: 'red', title: '文体优秀单项奖学金', content: '' },
  { id: 1, color: 'olive', title: '社会工作单项奖学金', content: '' },
  { id: 2, color: 'blue', title: '学习优胜单项奖学金', content: '' },
]


const formKey = [
  { key: 'name', name: '刊物名称', type: 'text', placeholder: '请填写刊物名称' },
  { key: 'title', name: '论文标题', type: 'text', placeholder: '请填写刊物名称' },
  { key: 'name', name: '发表日期', type: 'date', placeholder: '请填写刊物名称' },
  { key: 'author', name: '第一作者', type: 'number', placeholder: '请填写刊物名称' },
  { key: 'total', name: '团队总人数', type: 'number', placeholder: '请填写刊物名称' },
]

const str =JSON.stringify(formKey)

// export
module.exports = {
  toolsList,
  scoreColumn,
  processColumn,
  scoreNavBar,
  applyCategory,
  scholarshipList,
  outstandingList,
  individualList,
  formKey,
  str
}