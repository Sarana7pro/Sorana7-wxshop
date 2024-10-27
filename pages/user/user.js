const { getBanner, getGoods } = require("../../api/index.js");

Page({
  data: {
    goodsData: [],
    page: 1,
    swiperOptions:{
      indicatorDots:true,
      autoplay:true,
      interval:3000,
      duration:1000,
    },
    swiperData: [] ,
    navData:[
      {
        text:"待支付",
        icon:"credit-pay",
      },
      {
        text:"待发货",
        icon:"gift-card-o",
      },
      {
        text:"待收货",
        icon:"logistics",
      },
      {
        text:"待评价",
        icon:"comment-circle-o",
      },
      {
        text:"退款/售后",
        icon:"balance-o",
      },]
  },
  
  onLoad() {
    getBanner().then(res =>{
      this.setData({
        indicatorDots:true,
        autoplay:true,
        interval:3000,
        duration:1000,
        swiperData:res.data.data.result
      })
    })
    this.http(this.data.page)
  },
  http(page){
    getGoods({page}).then(res =>{  
      if(!res.data.msg){
        this.setData({
          goodsData:this.data.goodsData.concat(res.data.data.result)
        })
      }else{
        wx.showToast({
          title: res.data.msg,
          icon:"success",
          duration:2000
        })
      }
      
    })
  },
  

  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {}
});
