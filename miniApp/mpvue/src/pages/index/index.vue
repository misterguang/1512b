<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div>
      <h2>显示数值</h2>
      <p>{{count}}</p>
    </div>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <p>这里是首页的</p>
  </div>
</template>

<script>
import card from '@/components/card'
import store from '../../store/store'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {
    card
  },
 onLoad(){
   console.log("onLoad")
 },
 onReady(){
   console.log("onReady")
 },
 onShow(){
   console.log("onShow")
 },
  beforeMount(){
   console.log("beforeMounte")
 },
 mounted(){
   console.log("mounted")
 },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    console.log("created")
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
      wx.request({
        url: "https://miniapp.chenyuanguang.cn/api/front/miniApp/getArticleAll",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          console.log(res.data)
         
        }
      })
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
