//index.js
//获取应用实例
const app = getApp()
const util = require('../../../utils/util.js');

Page({
  data: {
    curHdIndex: 'income',
  },
  tabFun:function(e){
    var self = this;
    // console.log(e.target.dataset.id);
    if(e.target.dataset.id == "income"){
        self.setData({
          curHdIndex:'income'
        })
    }else if(e.target.dataset.id == "expenditure"){
        self.setData({
          curHdIndex: 'expenditure'
        })
    }
    
  }
})
