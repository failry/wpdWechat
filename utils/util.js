const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports.formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
module.exports.throttle = function (fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  } 
  let _lastTime = null
  // 返回新的函数
  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments)   //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}
/**
  * GET请求
  * @param  {[type]} url     url地址
  * @param  {[type]} params  data参数
  * @return {[type]}         [Promise]
 */
module.exports.getData = (url, params) => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: params,
      method: 'GET',
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        console.log("get请求failed")
        reject(res)
      }
    })
  })
}
/**
  * POST请求
  * @param  {[type]} url     url地址
  * @param  {[type]} params  data参数
  * @return {[type]}         [Promise]
 */
module.exports.postData = (url, params) => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: params,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        console.log("post请求failed")
        reject(res)
      }
    })
  })
}

