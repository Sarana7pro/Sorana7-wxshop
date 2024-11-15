const { getHotSearch,getSearch } =require("../../api/index.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Search:"",
    hotSearch:[],
    value:"",
    goodsData:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getHotSearch().then(res =>{
      this.setData({
        hotSearch:res.data.data.result
      })
    })
  },
  onChange(e){
    this.setData({
      value: e.detail
    })
  },
  onSearch() {
    this.http(this.data.value)
  },
  onSearchCliclk(){
    this.http(this.data.value)
  },
  clickGetKeyWords(e){
    this.http(e.currentTarget.dataset.hotkey)
  },
  http(search){
    getSearch({search}).then(res =>{
      if(!res.data.msg){
        let goods = JSON.stringify(res.data.data)
        wx.navigateTo({
          url: '/pages/goods/goods?goodsData=' + goods,
        })
      }else{
        wx.showToast({
          title:res.data.msg,
        })
      }
    })
  }

})