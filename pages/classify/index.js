// pages/classify/index.js
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
        {id: 5, areaName: 'unique_5asdfasdf',subs:[ {id: 77, name: 'unique_4asdf'},{id: 88, name: 'unique_3adsf'}]},
        {id: 4, areaName: 'unique_4asdf'},
        {id: 3, areaName: 'unique_3adsf'},
        {id: 2, areaName: 'unique_2asdfasdfadfadsfa'},
        {id: 1, areaName: 'unique_1asdf'},
        {id: 0, areaName: 'unique_0asdfasdfasdf'},
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
        currentFirstClassify: id
    });
  }
})