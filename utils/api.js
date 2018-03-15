const util = require('util.js');

const base = 'http://192.168.1.17:8087';
const redis = 'http://192.168.1.17:8011';

module.exports.apiList = {
  //获取banner数据
  scrollpic:params =>{
    return util.postData(`${base}/wpd/index/scrollpic/GetList`,params);
  },
  detailList:params =>{
    return util.getData(`${base}/wpd/index/borrow/product_borrow_detail`,params);
  },
  //获取投资产品列表
  product_borrow_list:function(params){
  	 return util.postData(`${base}/wpd/index/borrow/product_borrow_list`,params);
  },
  //产品列表
  productList: params =>{
    return util.postData(`${redis}/user/we_mall/productList?recomCount=3&productCount=4`,params)
  },
  //当前可用微币
  currency: params =>{
    return util.postData(`${redis}/user/we_mall/currency`,params)
  },
}