//用户登录
import { login } from '../../services/user'
const app = getApp()
Page({
  data: {
    account: '',
    password: '',
    error: ''
  },
  onLoad: function () {},

  login: function (data){
    if(!this.data.account){
      this.setData({
        error: '请您输入登陆账号！'
      })
      return;
    }
    if(this.data.password == ""){
      this.setData({
        error: '请您输入登陆密码！'
      })
      return;
    }
    if(this.data.account && this.data.password){
      var user = {
        userId: this.data.account,
        password: this.data.password
      }
      login(user).then(result => {
        if(result.respCode == "0000"){
          wx.navigateTo({
            url: '/pages/classify/index'
          })
        }else{
          this.setData({
            error: '登陆账号或密码错误！'
          })
        }
      })
    }
  },
  bindAccountChange: function(e){
    let that = this;
    if (e.detail.value.length > 0) {
      that.setData({
        account: e.detail.value,
      })
    } 
  },
  bindPasswordChange: function(e){
    let that = this;
    if (e.detail.value.length > 0) {
      that.setData({
        password: e.detail.value,
      })
    } 
  }
})
