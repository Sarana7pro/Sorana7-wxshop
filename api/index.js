const request = require("../utils/request.js"); 

const { baseUrl,banner,goods,hotSearch,search,goodsDetail,cart,addCart,delCart,category,buy } = require('./base.js');

function getBanner(data) {
  return request(baseUrl + banner, "GET", data); 
}

function getGoods(data){
  return request(baseUrl + goods, "GET", data);
}

function getHotSearch(data){
  return request(baseUrl + hotSearch, "GET", data);
}

function getSearch(data){
  return request(baseUrl + search, "GET", data);
}

function getGoodsDetail(data){
  return request(baseUrl + goodsDetail, "GET", data);
}
function getCart(data){
  return request(baseUrl + cart, "GET", data);
}

function addGoodsCart(data){
  return request(baseUrl + addCart, "GET", data);
}

function delGoodsCart(data){
  return request(baseUrl + delCart, "GET", data);
}

function getCategory(data){
  return request(baseUrl + category, "GET", data);
}

function getBuy(data){
  return request(baseUrl + buy, "GET", data);
}
module.exports = {
  getBanner,
  getGoods,
  getHotSearch,
  getSearch,
  getGoodsDetail,
  getCart,
  addGoodsCart,
  delGoodsCart,
  getCategory,
  getBuy
};  
