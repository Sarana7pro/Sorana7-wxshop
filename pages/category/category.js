// pages/category/category.js
import {getCategory,getSearch} from "../../api/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    categoryData:[],
    sliderData: [{
      "id": 0,
      "text": "热门推荐"
    }, {
      "id": 1,
      "text": "手机数码"
    }, {
      "id": 2,
      "text": "家用电器"
    }, {
      "id": 3,
      "text": "电脑办公"
    },{
      "id": 4,
      "text": "玩具乐器"
    },{
      "id": 5,
      "text": "家具家装"
    },{
      "id": 6,
      "text": "男鞋"
    },{
      "id": 7,
      "text": "男装"
    },{
      "id": 8,
      "text": "女鞋"
    },{
      "id": 9,
      "text": "女装"
    },{
      "id": 10,
      "text": "美妆护肤"
    },{
      "id": 11,
      "text": "户外运动"
    }, ],
    currentTag:"热门推荐"
  },
  clickItemNav(e){
    this.http(e.currentTarget.dataset.title)
  },
  http(tag ){
    getCategory({tag}).then(res =>{
      if(res.data.status === 200){
        this.setData({
          categoryData:res.data.data
        })
      }else{
        wx.showToast({
          title: '暂无数据',
          icon:"success"
        })
      }
    })
  },
  clickItem(e){
    getSearch({search:e.currentTarget.dataset.tag}).then(res =>{
      if(!res.data.msg){
        let goods = JSON.stringify(res.data.data)
        wx.navigateTo({
          url: '/pages/goods/goods?goodsData=' + goods,
        })
      }else{
        wx.showToast({
          title: '暂无数据',
          icon:"success"
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.http(this.data.currentTag);
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})