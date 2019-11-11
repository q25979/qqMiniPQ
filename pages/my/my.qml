<view class="container">
  <view class="header">
    <view class="left">
      <image src="{{userHeadImg}}"></image>
    </view>
    <view class="right">
      <text class="hint">授权送福利，签到送奖励</text>
      <button
        qq:if="{{hasUserInfo === false}}"
        open-type="getUserInfo"
        class="login-btn"
        bindgetuserinfo="getUserInfo">
          授权登录
      </button>
      <text qq:if="{{hasUserInfo}}" class="username">您好，{{userInfo.nickName}}</text>
    </view>
  </view>

  <view class="ul">
    <view class="li">签到领奖品</view>
    <view class="li">兑换奖品</view>
    <view class="li">领取历史</view>
    <view class="li">意见反馈</view>
    <view class="li">联系作者</view>
    <view class="li">关于我们</view>
    <view class="li">账号退出</view>
  </view>
</view>