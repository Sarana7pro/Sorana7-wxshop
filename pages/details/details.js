// pages/details/details.js
const {
  getGoodsDetail,
  addGoodsCart
} = require("../../api/index.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showToast({
      title: '等待数据加载...',
      icon: "loading" // 添加 icon 属性以更明确表示加载
    })
    getGoodsDetail({
      id: options.id
    }).then(res => {
      wx.hideToast(); // 隐藏加载提示
      if (res.data.status === 200) {
        this.setData({
          goodsDetail: res.data.data[0]
        });
      } else {
        wx.showToast({
          title: '数据获取失败',
          icon: "error" // 正确使用 success 或 error 图标
        });
      }
    });
  },
  onClickKF() {},
  onClickCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  onClickAddCart() {
    addGoodsCart({
      title:this.data.goodsDetail.title,
      price:this.data.goodsDetail.price,
      image:this.data.goodsDetail.topimage,
      currentId:this.data.goodsDetail.id
    }).then(res =>{
      if(res.data.status ===200){
        wx.showToast({
          title: '添加成功',
        })
      }else{
        wx.showToast({
          title: '添加成功',
        })
      }
    })
  },
  onClickBuy(e) {
    wx.navigateTo({
      url: '/pages/buy/buy?id=' + e.currentTarget.dataset.id,
    })
  },
});