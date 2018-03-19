//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    curHdIndex: '0',
    user_id:'',
    credit:'--',
    cListlist:[]
  },
  tabFun:function(e){
    var self = this;
    self.setData({
      curHdIndex:e.target.dataset.id,
      cListlist:[]
    })
    self.cList();
  },
  //当前可用微币
  currency:function(){
    var self = this;
    var params={
      user_id:self.data.user_id
    }
    app.$ajax.currency(params).then((res) => {
        if(res.data.returnCode == 1){
          self.setData({
            credit:res.data.credit
          })
        }
    }) 
  },
  //微币记录列表
  cList:function(){
    var self = this;
    var params = {
      user_id:self.data.user_id,
      page:1,
      epage:100,
      type:self.data.curHdIndex
    }
    app.$ajax.cList(params).then((res) => {
      var lists = [];
      lists = lists.concat(res.data.lists);
      self.setData({
         cListlist:lists
      })
    })
  },
  onLoad:function(e){
    var self = this;
    self.setData({
      user_id:e.user_id
    })
    self.currency();
    self.cList();
  }
})
