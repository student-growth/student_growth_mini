// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      }, {
        id: 1,
        name: "原创",
        isActive: false
      }, {
        id: 2,
        name: "分类",
        isActive: false
      }, {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },

  /**
   * 组件的方法列表
   * 页面的js存放实际按的回调函数，存放在data的同层级下的方法
   * 组件的js文件中必须存放在method中
   */
  methods: {
    handleItemSelect(e) {
      const { index } = e.currentTarget.dataset;
      let { tabs } = this.data;
      //  [].foreach 遍历数组，遍历数组的是偶，修改了v,也会导致源数组被修改
      // 不要直接修改 this.data.数据 ,这是小程序中所不推荐到的
      tabs.forEach((v, i) => {
        i === index ? v.isActive = true : v.isActive = false;
      })
      this.setData({
        tabs
      })
    }
  }
})
