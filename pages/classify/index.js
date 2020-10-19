// pages/classify/index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    currentFirstClassify: '',
    currentSecondClassify: '',
    firstClassify: [
        {id: 4, areaName: '中银结算通宝产品'},
        {id: 5, areaName: '苏科贷业务'},
        {id: 3, areaName: '中银税贷通业务'},
        {id: 2, areaName: '“中银知贷通”知识产权质押贷款业务'},
        {id: 1, areaName: '中银知保通业务'},
        {id: 0, areaName: '增信保业务'},
        {id: 0, areaName: '小额贷业务'},
        {id: 0, areaName: '中银扶农通宝业务'},
        {id: 0, areaName: 'E拍贷-中小企业 业务'}
      ],
      tabs: ["选项一", "选项二", "选项三"],
      activeIndex: 1,
      sliderOffset: 0,
      sliderLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });
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
  showChilds: function (id) {
    wx.navigateTo({
        url: '/pages/detail/index'
      })
  },
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
  }
})