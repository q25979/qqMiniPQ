<view class="container" style="height: {{height}}rpx">
  <view class="img">
    <image src="{{img}}"></image>
  </view>
  <view class="btn">
    <view class="msg">
      <text>下载地址</text>
      <text class="link">{{copyData}}</text>
      <text class="copy" bindtap="copy">一键复制</text>
    </view>
    <view class="tips">*点击一键复制到浏览器中下载</view>
  </view>
</view>
