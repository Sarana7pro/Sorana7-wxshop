// pages/cart/cart.js
const {
  getCart,
  delGoodsCart
} = require("../../api/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    this.http()
  },
  delCartHandle(e) {
    delGoodsCart({
      currentID: e.currentTarget.dataset.id  
    }).then(res => {
      if (res.data.status == 200) {
        wx.showToast({
          title: '删除成功',
        });
        this.http();
      } else {
        wx.showToast({
          title: '删除失败',
        });
      }
    });
  },
  
  http() {
    getCart().then(res => {
      this.setData({
        cartData: res.data.data
      })     
      if(res.data.msg){
        this.setData({
          cartData: []
        })
      }else{
        this.setData({
          cartData: res.data.data
        })
      }
      
    })
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