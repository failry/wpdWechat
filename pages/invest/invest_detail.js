const app = getApp();
Page({
  data: {
    type:'',
    nid:'',
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
        title: listData.borrow_product_name
      })
      wx.setNavigationBarTitle({
        title: self.data.title//页面标题为路由参数
      })
    })
  },
  onLoad: function (options) {
    var self = this;
    console.log(this)
    self.setData({
      type: options.type||'loan',
      nid: options.id ||'LOAN201801161516094848'
    })
    self.getdetailData();
  }
})