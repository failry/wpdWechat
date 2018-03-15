//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');

Page({
  data: {
    userName: "",
    userPwd: ""
  },
  //获取用户输入的用户名
  userNameInput:function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passWdInput:function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  formSubmit: function (e) {
    var JSEncrypt = require('../../lib/JSEncrypt/JSEncrypt');
    var encodeStr = function (STR, TOKEN) {
      return JSEncrypt(STR, 'weipaidai', TOKEN, 'java_http_web');
    }; 
    const postData = JSON.stringify({
      'u1': this.data.userName,
      'u2': app.md5(this.data.userPwd),
      'u3': '01'
    });
    const subtime = new Date().getTime() + "";
    const params = {
      userVerify: encodeStr(postData, subtime),
      unixkey: subtime
    };
    app.$ajax.login(params).then((res) => {
      if(res.data.result == "1"){
        app.$alert(res.data.errorMsgInfo, function () {
          wx.navigateTo({
            url: '../account/index'
          });
        });
      }else{
        app.$alert(res.data.errorMsgInfo);
      }
    })

  },
  onReady: function () {
    
  }
})
