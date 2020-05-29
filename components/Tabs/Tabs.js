// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是要从父组件接收的数据
   */
  properties: {
     tabs:{
       type:Array,
       value:[]
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   * 页面的js存放实际按的回调函数，存放在data的同层级下的方法
   * 组件的js文件中必须存放在method中
   * 触发父组件中的自定义事件，同时传递数据给父组件
   * this.triggerEvent("父组件自定义事件的名称","要传递的参数")
   */
  methods: {
    handleItemSelect(e) {
      const { index } = e.currentTarget.dataset;
      // 触发父组件的方法，修改父组件中的数据
      // this.triggerEvent("父组件自定义事件的名称","要传递的参数")
      this.triggerEvent("itemChange",{index});
    }
  }
})
