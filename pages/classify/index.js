// pages/classify/index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
import { getAllAreas, getBusinessByArea, getBusinessDetails } from '../../services/calssify'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    tabs: [],
    currentFirstClassify: '',
    firstClassify: [],
      activeIndex: 1,
      sliderOffset: 0,
      sliderLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取系统信息  
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });
    //首先查询上面的tabs
    var param = {
        parentId: '00000001'
    }
    getAllAreas(param).then(result => {
        if (result.respData) {
            this.setData({
                tabs: result.respData
            });
        }
        //调用函数获取数据初始值
        if(this.data.tabs.length>0){
            this.setData({
                currentFirstClassify: this.data.tabs[0].dirId
            });
        }
        //加载第一个tab的详细数据
        var param = {parentId: this.data.currentFirstClassify}
        getBusinessByArea(param).then(result => {
            this.setData({
                firstClassify: result.respData
            });
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  showInput: function () {
    this.setData({
        inputShowed: true
    });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
  showChilds: function (event) {
    var productId = event.currentTarget.dataset.id
    var productName = event.currentTarget.dataset.name
    wx.navigateTo({
        url: '/pages/detail/index?productId='+productId+'&productName='+productName
      })
  },
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
  },
  changeTab: function(event){
    this.setData({
        currentFirstClassify: event.currentTarget.dataset.tabid
    });
    //获取tab切换后的数据
    var param = {
        parentId: event.currentTarget.dataset.tabid
    }
    getBusinessByArea(param).then(result => {
        if (result.respData) {
            this.setData({
                firstClassify: result.respData
            });
        }
    })
  },
  searchBusiness: function(){
    //搜索业务信息
    var param = {parentId: this.data.currentFirstClassify, keyWord: this.data.inputVal}
    getBusinessByArea(param).then(result => {
        this.setData({
            firstClassify: result.respData
        });
    })
  }
})