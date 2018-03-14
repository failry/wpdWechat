//index.js
//获取应用实例
const app = getApp()
const util = require('../../../utils/util.js');

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    productList:[]
  },
  //事件处理函数
  bindViewTap: function () {

  },
  productList:function(){
    var self = this;
    var params={};
    var lists = []; 
    app.$ajax.productList(params).then((res) => {
      lists = lists.concat(res.data.lists);
      self.setData({
        productList:lists
      })
    })
  },
  onLoad:function(){
    var self = this;
    self.productList();
  }
})
