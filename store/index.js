const toolsList = [
  { id: 0, name: '成果申请', url: '/pages/apply/list/index', icon: 'medalfill', color: 'blue' },
  { id: 1, name: '学生评价', url: '/pages/comment/index', icon: 'writefill', color: 'pink' },
  { id: 2, name: '个人测试', url: '/pages/personaltest/list/index', icon: 'profilefill', color: 'brown' },
  { id: 3, name: '进度查询', url: '/pages/process/list/index', icon: 'rankfill', color: 'orange' },
  { id: 4, name: '综合查询', url: '/pages/score/index', icon: 'upstagefill', color: 'yellow' },
  { id: 5, name: '奖学金申请', url: '/pages/scholarship/list/index', icon: 'moneybagfill', color: 'mauve' },
  { id: 6, name: '谁是大神', url: '/pages/rank/home/index', icon: 'choicenessfill', color: 'olive' },
  { id: 7, name: '个性化榜单', url: '/pages/personalise/index', icon: 'friendfill', color: 'red' },
  { id: 8, name: '意见反馈', url: '/pages/questions/home/index', icon: 'questionfill', color: 'cyan' }
]
//const scoreColumn = ['课程名称', '平时成绩', '期末成绩', '总成绩', '学分', '绩点']
const scoreColumn = ['课程名称', '总成绩', '学分']
// const scoreNavBar = ['学科成绩', '综合成绩', 'CTE成绩']
const scoreNavBar = ['学科成绩', '综合成绩']
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

const psyTest = [
  { id: 0, color: 'blue', url: '/pages/personaltest/exam/index', name: '霍兰德职业兴趣测试', description: '人的个性与职业有着密切的关系，不同职业对从业者的人格特征的要求是有差距的，如果通过科学的测试，可以预知自己的个性特征，这有助于选择适合于个人发展的职业。您将要阅读的这个《职业价格自测问卷》，可以帮助您作个性自评，从而获自己的个性特征更适合从事哪方面的工作' },
  // {id:1,color:'orange',url:'/pages/personaltest/exam/index',name:'MBTI-职业性格测试',description:'MBTI提供的性格类型描述仅供测试者确定自己的性格类型之用，性格类型没有好坏，只有不同。每一种性格特征都有其价值和优点，	也有缺点和需要注意的地方。	清楚地了解自己的性格优劣势，	有利于更好地发挥自己的特长,而尽可能的在为人处事中避免自己性格中的劣势，更好地和他人相处，更好地作重要的决策'},
  { id: 2, color: 'green', url: '/pages/personaltest/exam/index', name: '大学生心理健康测试', description: '大学生新生入学心理健康测试，也称作大学生人格问卷，是根据University Personality Inventory（简称UPI）编制而成。常用于大学新生入学时心理健康普查，也可用于大学生个人自评。其优点是能够在早期发现学生的心理健康问题，是大学心理咨询机构的常备工具' }
]
const exam = {
  name: '霍兰德职业兴趣测试',
  description: '请根据对每一题目的第一印象作答，不必仔细推敲,答案没有好坏,对错之分',
  choice: [
    { id: 0, name: '是', value: 1 },
    { id: 1, name: '否', value: 0 }
  ],
  test: [
    { id: 0, name: '我喜欢把一件事情做完后再做另一件事.' },
    { id: 1, name: '在工作中我喜欢独自筹划，不愿受别人干涉.' },
    { id: 2, name: '在集体讨论中，我往往保持沉默.' },
    { id: 3, name: '我喜欢做戏剧、音乐、歌舞、新闻采访等方面的工作' },
    { id: 4, name: '每次写信我都一挥而就，不再重复' },
    { id: 5, name: '我经常不停地思考某一问题，直到想出正确的答案' },
    { id: 6, name: '对别人借我的和我借别人的东西，我都能记得很清楚' },
    { id: 7, name: '我喜欢抽象思维的工作，不喜欢动手的工作' },
    { id: 8, name: '我喜欢成为人们注意的焦点' },
    { id: 9, name: '我喜欢不时地夸耀一下自己取得的好成就' },
    { id: 10, name: '我曾经渴望有机会参加探险' },
    { id: 11, name: '我一个独处时，会感到更愉快' },
    { id: 12, name: '我喜欢在做事情前，对此事情做出细致的安排' },
    { id: 13, name: '我讨厌修理自行车、电器一类的工作' },
    { id: 14, name: '我喜欢参加各种各样的聚会' },
    { id: 15, name: '我愿意从事虽然工资少、但是比较稳定的职业' },
    { id: 16, name: '音乐能使我陶醉' },
    { id: 17, name: '我办事很少思前想后' },
    { id: 18, name: '我喜欢经常请示上级' },
    { id: 19, name: '我喜欢需要运用智力的游戏' },
    { id: 20, name: '我很难做那种需要持续集中注意力的工作' },
    { id: 21, name: '我喜欢亲自动手制作一些东西，从中得到乐趣' },
    { id: 22, name: '我的动手能力很差' },
    { id: 23, name: '和不熟悉的人交谈对我来说毫不困难' },
    { id: 24, name: '和别人谈判时，我总是很容易放弃自己的观点' },
    { id: 25, name: '我很容易结识同性朋友' },
    { id: 26, name: '对于社会问题，我通常持中庸的态度' },
    { id: 27, name: '当我开始做一件事情后，即使碰到再多的困难，我也要执著地干下去' },
    { id: 28, name: '我是一个沉静而不易动感情的人' },
    { id: 29, name: '当我工作时，我喜欢避免干扰' },
    { id: 30, name: '我的理想是当一名科学家' },
    { id: 31, name: '与言情小说相比，我更喜欢推理小说' },
    { id: 32, name: '有些人太霸道，有时明明知道他们是对的，也要和他们对着干' },
    { id: 33, name: '我爱幻想' },
    { id: 34, name: '我总是主动地向别人提出自己的建议' },
    { id: 35, name: '我喜欢使用榔头一类的工具' },
    { id: 36, name: '我乐于解除别人的痛苦' },
    { id: 37, name: '我更喜欢自己下了赌注的比赛或游戏' },
    { id: 38, name: '我喜欢按部就班地完成要做的工作' },
    { id: 39, name: '我希望能经常换不同的工作来做' },
    { id: 40, name: '我总留有充裕的时间去赴约会' },
    { id: 41, name: '我喜欢阅读自然科学方面的书籍和杂志' },
    { id: 42, name: '如果掌握一门手艺并能以此为生，我会感到非常满意' },
    { id: 43, name: '我曾渴望当一名汽车司机' },
    { id: 44, name: '听别人谈“家中被盗”一类的事，很难引起我的同情' },
    { id: 45, name: '如果待遇相同，我宁愿当商品推销员，而不愿当图书管理员' },
    { id: 46, name: '我讨厌跟各类机械打交道' },
    { id: 47, name: '我小时候经常把玩具拆开，把里面看个究竟' },
    { id: 48, name: '当接受新任务后，我喜欢以自己的独特方法去完成它' },
    { id: 49, name: '我有文艺方面的天赋' },
    { id: 50, name: '我喜欢把一切安排得整整齐齐、井井有条' },
    { id: 51, name: '我喜欢做一名教师' },
    { id: 52, name: '和一群人在一起的时候，我总想不出恰当的话来说' },
    { id: 53, name: '看情感影片时，我常禁不住眼圈红润' },
    { id: 54, name: '我讨厌学数学' },
    { id: 55, name: '在实验室里独自做实验会令我寂寞难耐' },
    { id: 56, name: '对于急躁、爱发脾气的人，我仍能以礼相待' },
    { id: 57, name: '遇到难解答的问题时，	我常常放弃' },
    { id: 58, name: '大家公认我是一名勤劳踏实的、愿为大家服务的人' },
    { id: 59, name: '我喜欢在人事部门工作 ' }
  ],
  result: [
    { id: 0, name: '常规型', content: '' }
  ]
}
const collegeTest = {

  name: '大学生心理健康测试',
  description: '请根据对每一题目的第一印象作答，不必仔细推敲,答案没有好坏,对错之分',
  choice: [
    { id: 0, name: '常常是', value: 2 },
    { id: 1, name: '偶尔是', value: 1 },
    { id: 2, name: '完全没有', value: 0 },
  ],
  test: [
    { id: 0, name: '平时不知为什么总觉得心慌意乱，坐立不安' },
    { id: 1, name: '上床后，怎么也睡不着，即使睡着也容易惊醒' },
    { id: 2, name: '经常做恶梦，惊恐不安，早晨醒来就感到倦怠无力、焦虑烦躁' },
    { id: 3, name: '经常早醒	1-2	小时	，醒后很难再入睡' },
    { id: 4, name: '学习的压力常使自己感到非常烦躁，讨厌学习' },
    { id: 5, name: '读书看报甚至在课堂上也不能专心一致，往往自己也搞不清在想什么' },
    { id: 6, name: '遇到不称心的事情便较长时间地沉默少言' },
    { id: 7, name: '感到很多事情不称心，无端发火' },
    { id: 8, name: '哪怕是一件小事情，也总是很放不开，整日思索' },
    { id: 9, name: '感到现实生活中没有什么事情能引起自己的乐趣， 郁郁寡欢' },
    { id: 10, name: '老师讲概念，常常听不懂，有时懂得快忘得也快' },
    { id: 11, name: '遇到问题常常举棋不定，迟疑再三' },
    { id: 12, name: '经常与人争吵发火，过后又后悔不已' },
    { id: 13, name: '经常追悔自己做过的事，有负疚感' },
    { id: 14, name: '一遇到考试，即使有准备也紧张焦虑' },
    { id: 15, name: '一遇挫折，便心灰意冷，丧失信心' },
    { id: 16, name: '非常害怕失败，行动前总是提心吊胆，畏首畏尾' },
    { id: 17, name: '感情脆弱，稍不顺心，就暗自流泪' },
    { id: 18, name: '自己瞧不起自己，觉得别人总在嘲笑自己' },
    { id: 19, name: '喜欢跟自己年幼或能力不如自己的人一起玩或比赛' },
    { id: 20, name: '感到没有人理解自己，烦闷时别人很难使自己高兴' },
    { id: 21, name: '发现别人在窃窃私语，便怀疑是在背后议论自己' },
    { id: 22, name: '对别人取得的成绩和荣誉常常表示怀疑，甚至嫉妒' },
    { id: 23, name: '缺乏安全感，总觉得别人要加害自己' },
    { id: 24, name: '参加春游等集体活动时，总感到有孤独感' },
    { id: 25, name: '非常害怕见陌生人，人多时说话就脸红' },
    { id: 26, name: '在黑夜行走或者独自在家有恐惧感' },
    { id: 27, name: '一旦离开父母，心里就不踏实' },
    { id: 28, name: '经常怀疑自己接触地东西不干净，反复洗手或换衣服，对清洁极端注意' },
    { id: 29, name: '担心是否锁门和可能着火，反复检查，经常躺在床上又起来确认，或刚一出门又返回检查' },
    { id: 30, name: '站在经常有人自杀的场所、悬崖边、大厦顶、阳台上，有摇摇晃晃要跳下去地感觉' },
    { id: 31, name: '对他人的疾病非常敏感，经常打听，深怕自己也身患同病' },
    { id: 32, name: '对特定的事物、交通工具（电车、公共汽车等）	、尖状物及白色墙壁等稍微奇怪的东西有恐怖倾向' },
    { id: 33, name: '经常怀疑自己发育不良' },
    { id: 34, name: '一旦与异交往就脸红心慌或想入非非' },
    { id: 35, name: '对某个异性的伙伴的每一个细微行为都很注意' },
    { id: 36, name: '怀疑自己患了癌症等严重不治之症，反复看医书或去医院检查' },
    { id: 37, name: '经常无端头痛，并依赖止痛或镇静药' },
    { id: 38, name: '经常有离家出走或脱离集体的想法' },
    { id: 39, name: '感到内心痛苦无法解脱，只能自伤或自杀' },
  ]

}// export
module.exports = {
  toolsList,
  scoreColumn,
  processColumn,
  scoreNavBar,
  applyCategory,
  scholarshipList,
  outstandingList,
  individualList,
  psyTest,
  exam,
  collegeTest
}