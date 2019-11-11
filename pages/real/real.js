//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    copyData: 'www.baidu.com'
  },

  onLoad: function () {
    this.setData({
      copyData: app.globalData.url
    })
  },

  copy: function() {
    var _this = this

    qq.setClipboardData({
      data: _this.data.copyData,
      success(res) {
        qq.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})
