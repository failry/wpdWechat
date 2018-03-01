const util = require('util.js');

const base = 'http://192.168.1.17:8087';

module.exports.apiList = {
  //获取banner数据
  scrollpic:params =>{
    return util.postData(`${base}/wpd/index/scrollpic/GetList`,params);
  },
  //
  detailList:params =>{
    return util.getData(`${base}/wpd/index/borrow/product_borrow_detail`,params);
  },
  product_borrow_list:function(params){
  	 return util.postData(`${base}/wpd/index/borrow/product_borrow_list`,params);
  }
}