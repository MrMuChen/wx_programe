// pages/detail/index.js
import { getBusinessDetails } from '../../services/calssify'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productName: '',
    productId: '',
    product: {},
    imgData: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      productId:options.productId,
      productName:options.productName
    })
    var param = {productId: this.data.productId}
    getBusinessDetails(param).then(result => {
      if (result.respData) {
          var formatProduct = result.respData
          if(formatProduct.conditionReq){
            if(formatProduct.conditionReq.indexOf("img")>-1){
              formatProduct.conditionReqImg = formatProduct.conditionReq.split("|")[1]
            }else{
              formatProduct.conditionReqSpans = formatProduct.conditionReq.split("\n")
            }
          }
          if(formatProduct.riskTaking){
            if(formatProduct.riskTaking.indexOf("img")>-1){
              formatProduct.riskTakingImg = formatProduct.riskTaking.split("|")[1]
            }else{
              formatProduct.riskTakingSpans = formatProduct.riskTaking.split("\n")
            }
          }
          if(formatProduct.measure){
            formatProduct.measures = formatProduct.measure.split("\n")
          }
          if(formatProduct.overdraftLimit){
            if(formatProduct.overdraftLimit.indexOf("img")>-1){
              formatProduct.overdraftLimitImg = formatProduct.overdraftLimit.split("|")[1]
            }else{
              formatProduct.overdraftLimitSpans = formatProduct.overdraftLimit.split("\n")
            }
          }
          if(formatProduct.requiredApproval){
            formatProduct.requiredApprovals = formatProduct.requiredApproval.split("\n")
          }
          if(formatProduct.referencesSb){
            formatProduct.referencesSbs = formatProduct.referencesSb.split("\n")
          }
          this.setData({
            product: formatProduct
          });
      }
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
  formatHtml: function(html){
    console.log("format")
    html = html.replace("<table>","")
    html = html.replace("</table>","")
    return html;
  }
})