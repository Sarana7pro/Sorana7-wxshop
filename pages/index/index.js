const { getBanner,getGoods } = require("../../api/index.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"请输入你想要找的商品 ",
    swiperOptions:{
      indicatorDots:true,
      autoplay:true,
      interval:3000,
      duration:1000,
      swiperData: [] 
    },
      navData:[
        {
          text:"数码",
          icon:"photograph",
          color:"#ffd747"
        },
        {
          text:"超市",
          icon:"shop-collect",
          color:"#ffd747"
        },
        {
          text:"会员",
          icon:"vip-card",
          color:"#ffd747"
        },
        {
          text:"优惠",
          icon:"discount",
          color:"#ffd747"
        },
        {
          text:"手机充值",
          icon:"phone-circle-o",
          color:"#ffd747"
        },
        {
          text:"领卷",
          icon:"coupon",
          color:"#ffd747"
        },
        {
          text:"奢侈品",
          icon:"gem",
          color:"#ffd747"
        },
        {
          text:"更多",
          icon:"weapp-nav",
          color:"#ffd747"
        },
      ],
      page:1,
      goodsData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
          //
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.setData({
      page:this.data.page += 1
    })
    this.http(this.data.page )
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})