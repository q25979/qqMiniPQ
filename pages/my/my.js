//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    userHeadImg: '/img/default.png'
  },

  //事件处理函数
  bindViewTap: function () {
    qq.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        userHeadImg: app.globalData.userInfo.avatarUrl
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          userHeadImg: res.userInfo.avatarUrl,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            userHeadImg: res.userInfo.avatarUrl,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    if (e) {
      let userInfo = JSON.parse(e.detail.data)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true,
        userHeadImg: userInfo.avatarUrl
      })
    }
  }
})
