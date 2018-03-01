const app = getApp();
import NumberAnimate from '../../utils/NumberAnimate';
Page({
  data: {
    type:'',
    nid:'',
    count:'',
    title:'微拍贷', 
    detailList:''
  },  
  //下拉刷新
  onPullDownRefresh: function () {
    var self = this;
    app.refresh(function(){
      self.getdetailData();
    });
  },
  getdetailData:function(){
    var self = this;
    const params = "loan" == self.data.type ? { loan_nid: self.data.nid } : { shut_id: self.data.nid };
    app.$ajax.detailList(params).then((res) => {
      var listData = res.data;
      self.setData({
        detailList: listData,
        count: listData.account_wait,
        title: listData.borrow_product_name
      })
      wx.setNavigationBarTitle({
        title: self.data.title//页面标题为路由参数
      })
    })
  },
  onLoad: function (options) {
    var self = this;
    console.log(options)
    self.setData({
      type: options.type ||'loan',
      nid: options.id ||'LOAN201801161516094848'
    })
    self.getdetailData();
    self.animate();
  },
  //调用NumberAnimate.js中NumberAnimate实例化对象，测试3种效果

  animate: function () {
    this.setData({
      count: 18362.856,
      num1Complete:'',
   });

    let count = 18362.856;

    let n1 = new NumberAnimate({
      from: 0,//开始时的数字
      speed: 2000,// 总时间
      refreshTime: 100,//  刷新一次的时间
      decimals: 3,//小数点后的位数
      onUpdate: () => {//更新回调函数
        this.setData({
          count: n1.tempValue
        });
      },
      onComplete: () => {//完成回调函数
        this.setData({
          num1Complete: '完成了'
        });
      }
    });
  }
})