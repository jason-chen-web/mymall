<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt="" /></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span
            ><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank"
          >河畔一角主页</a
        ><span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank"
          >Vue全栈课程</a
        ><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank"
          >React全家桶课程</a
        ><span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank"
          >微信支付专项课程（H5+小程序/云+Node+MongoDB）</a
        >
      </div>
      <p class="copyright">
        Copyright ©2019 mi.futurefe.com All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<script>
// 解构
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      // 让后端认识你，userId作为cookie
      userId: "",
    };
  },
  methods: {
    // 验证用户名密码后跳转
    login() {
      // 相当于是let uname = this.username;,username挂载在vue实例对象上/即this上
      // 解构赋值
      let { username, password } = this;
      // 调用接口获取数据
      this.$axios
        .post("/user/login", {
          // 完型代码 username：username，这里基于接口文档书写
          username,
          password,
          // res指返回的里层data里的内容，如果报错就会被之前设置的接口错误拦截代码拦截
          // 进来了就说明成功了进不来就说明报错了
        })
        .then((res) => {
          // 使用前先在main区域导入插件，然后通过Vue.use（）加载
          // 用户登录成功后会有返回值，需要拿到用户id，把它保存到cookie里
          // 把用户id的值设置成返回的id，Session是过期时间
          // expire-session-关闭浏览器-后数据消失-和後台的jessionid一樣
          this.$cookie.set("userId", res.id, { expires: "Session" });
          // to-do 保存用户名
          this.saveUserName(res.username);
          // this.$store.dispatch('saveUserName',res.username);
          // 登录成功后，通过dispatch触发action里定义的saveUserName方法 ，保存用户名到vuex-它会被展示到navheader里
          // 登录成功后跳转到首页-首页会显示用户名-用vuex实现
          //在登录页做数据跳转
          //如果从登陆页面跳转而来

          this.$router.push({
            // 路由的名称
            // 如果用query传参要用path
            name: "index",
            params: {
              from: "login",
            },
          });
        });
    },
    ...mapActions(["saveUserName"]),
    register() {
      this.$axios
        .post("/user/register", {
          username: "admin",
          password: "admin",
          email: "admin1@163.com",
        })
        .then(() => {
          this.$message.warning("注册成功");
        });
    },
  },
};
</script>
<style lang="scss">
.login {
  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      height: 576px;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn {
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>