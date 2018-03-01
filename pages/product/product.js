//产品专区
const app = getApp();
Page( {  
  data: {  
      curHdIndex: 'all',
      list:[],
      params:{
        stype: 'all' ,
        sortType: '5',
        epage:"10",
        page:1
      },
      onshow:false,
      loan_nid:'',
      nid_name:''
  }, 
  tabFun: function(e){ 
    var self = this;  
    //获取触发事件组件的dataset属性 
    var datasetId=e.target.dataset.id; 
    this.setData({  
      curHdIndex: datasetId,
      list:[],
      params:{
        stype: datasetId,
        sortType: '5',
        epage: "10",
        page:1
      },  
    });
    console.log(self.data.params) 
    self.productlist();  
  },
  onPullDownRefresh:function(){
      var self = this;
      wx.showNavigationBarLoading();
      self.refresh();
  },
  onReachBottom:function(){
      var self = this;
      wx.showNavigationBarLoading();
      self.ReachBottom();
  },
  refresh: function () {
    var self = this;
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
      self.setData({
          list:[],
          params:{
            stype: 'all',
            sortType: '5',
            epage: "10",
            page:1
          },
          onshow: false   
        })
      self.productlist();
    }, 500);
  },
  ReachBottom: function(e){
      var self = this;
      wx.showLoading({
        title: '刷新中',
        icon: 'loading',
        duration: 1000
      });
      setTimeout(function () {
        wx.hideNavigationBarLoading();
        self.setData({
          params:{
            stype: 'all',
            sortType: '5',
            epage: "10",
            page:self.data.params.page + 1
          },
          onshow: false
        })
        self.productlist();
      }, 500);
  },
  productlist:function(){
    var self = this;
    const params = self.data.params;
    app.$ajax.product_borrow_list(params).then((res) => {
        console.log(res.data.lists);
        var lists = self.data.list.concat(res.data.lists);
        if(res.data.lists.length == 0 && lists.length != 0){
            self.setData({  
            onshow: true  
          });
        }else{
          self.setData({  
            list: lists,
            onshow: false  
          });
          // res.data.lists.shut_id ? self.setData({nid_name: "shut_id",loan_nid:res.data.lists.shut_id}) : self.setData({nid_name: "loan_nid",loan_nid:res.data.lists.loan_nid});
          // console.log(self.data);
        }
    })
  },
  invest:function(){
    var self = this;
    // detailList
    // const params = self.data.params;
  },
  onLoad:function(){
    var self = this;
    self.productlist();
  }
});