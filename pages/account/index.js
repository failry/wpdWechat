//index.js
//获取应用实例
const app = getApp()
Page({
  data: {

  },
  //事件处理函数
  bindViewTap: function () {

  },
  //下拉刷新
  onPullDownRefresh: function () {
    var self = this;
    wx.showNavigationBarLoading();
    app.refresh(function () {

    });
  },
  onReady: function () {

  }
})
