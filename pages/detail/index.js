// pages/detail/index.js
import { getBusinessDetails } from '../../services/calssify'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productName: '',
    productId: '',
    product: {}
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
          if(formatProduct.conditionReq.indexOf("table")>-1){
            formatProduct.conditionReqTable = formatProduct.conditionReq.replace("<table>","").replace("</table>","")
          }else{
            formatProduct.conditionReqSpans = formatProduct.conditionReq.split("\n")
          }
          if(formatProduct.riskTaking.indexOf("table")>-1){
            formatProduct.riskTakingTable = formatProduct.riskTaking.replace("<table>","").replace("</table>","")
          }else{
            formatProduct.riskTakingSpans = formatProduct.riskTaking.split("\n")
          }
          formatProduct.measures = formatProduct.measure.split("\n")
          if(formatProduct.overdraftLimit.indexOf("table")>-1){
            formatProduct.overdraftLimitTable = formatProduct.overdraftLimit.replace("<table>","").replace("</table>","")
          }else{
            formatProduct.overdraftLimitSpans = formatProduct.overdraftLimit.split("\n")
          }
          formatProduct.requiredApprovals = formatProduct.requiredApproval.split("\n")
          formatProduct.referencesSbs = formatProduct.referencesSb.split("\n")
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