//Page Object
Page({
  data: {
    firstMenu:[],
    contentData:[], 
    currentIndex:0,
    category: [{
      id: 0,
      name: '研究创新',
      iconName: 'yingxiaolinian',
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
          name:'计算机软件著作权'
        }]
      }, {
        id: 2,
        name: '创新创业',
        formId: '1_3',
        thirdCate:[{
          id:0,
          name:'国家级创新项目'

        },{
          id:1,
          name:'省级创新项目-省新苗'
        },{
          id:2,
          name:'校级创新项目'
        }]
      }, {
        id: 3,
        name: '学科竞赛',
        formId: '1_4',
        thirdCate:[{
          id:0,
          name:'挑战杯'
        },{
          id:1,
          name:'互联网+'
        },
        {
          id:2,
          name:'大学生电子商务竞赛'
        },{
          id:3,
          name:'大学生程序设计竞赛'
        },{
          id:4,
          name:'大学生物理创新竞赛'
        },{
          id:5,
          name:'互联网+'
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
  },

  //options(Object)
  onLoad: function (options) {
    let firstMenu = this.data.category.map(v=>{
      return {id:v.id,icon:v.iconName,name:v.name}
    });
    let contentData = this.data.category[0].secondCate;
    this.setData({
      firstMenu,
      contentData
    })
  },
  // 左侧菜单的点击事件
  handleItemTap(e){
    const {index} =  e.currentTarget.dataset; 
    let contentData = this.data.category[index].secondCate==undefined?[]:this.data.category[index].secondCate;
    this.setData({
      currentIndex:index,
      contentData
    })
  }
});
