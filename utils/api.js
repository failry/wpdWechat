const util = require('util.js');

const base = 'https://www.weipaidai.com/api/base';

module.exports.apiList = {
  //获取banner数据
  scrollpic:params =>{
    return util.postData(`${base}/wpd/index/scrollpic/GetList`, params);
  },
  //
  detailList:params =>{
    return util.getData(`${base}/wpd/index/borrow/product_borrow_detail`,params);
  }
}