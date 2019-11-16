//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    copyData: '',
    img: '',
    height: 0
  },

  onLoad: function () {
    var _this = this

    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })

    qq.getSystemInfo({
      success(res) {
        let h = res.windowHeight
        let w = res.windowWidth
        let rpx = 750 / w

        _this.setData({ height: h*rpx - 148 })
      }
    })

    this.setData({
      copyData: app.globalData.url,
      img: app.globalData.img
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
