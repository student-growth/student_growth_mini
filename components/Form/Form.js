// components/Form/Form.js
Component({
  

  properties: {
     title:String,
     formMap:Array,
     reset:{
       type:String,
       value:'重置'
     },
     submit:{
       type:String,
       value:'提交'
     }
  },
 
  data: {

  },
  methods: {
    submit(e){
      const formData = e.detail.value;
      this.triggerEvent("submit",formData);
    },
    reset(e){
      this.triggerEvent('reset',e);
    }
  }
})