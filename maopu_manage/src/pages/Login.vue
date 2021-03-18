<!--
 * @Author: aaenen
 * @Date: 2021-03-13 22:16:50
 * @LastEditTime: 2021-03-17 21:23:24
 * @LastEditors: aaenen
 * @Description:猫扑 后台登录管理登录界面
 * @FilePath: /maopu_manage/src/pages/Login.vue
 * 打码不易，且行且珍惜！
-->
<template>
  <!-- 主界面标题 -->
  <div class="login-wrap">
    <div class="ms-title">猫扑 后台登录管理</div>
    <!-- 主界面登录最大的框架 -->
    <div class="ms-login">
      <!-- 框架里主要是一个表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mixin} from "../mixins/index";
//只需要这个方法，可以只引入这个方法，因为index已经引入了http，所以此处不需要再引入http
import {getLoginStatus} from "../api/index";
export default {
  mixins:[mixin],
  data:function(){
    return{
      //验证登录的账号
      ruleForm:{
        username:"admin",
        password:"aa123456"
      },
      //如果用户名和密码没输入会提醒用户输入
      rules:{
        username:[
          {required:true,message:"请输入用户名",trigger:"blur"}
        ],
        password:[
          {required:true,message:"请输入密码",trigger:"blur"}
        ]
      }
    };
  },
  methods:{
    //点击登录时执行的操作
    submitForm(){
      let params = new URLSearchParams();
      params.append("adminName",this.ruleForm.username);
      params.append("adminPassword",this.ruleForm.password);
      this.$router.push("/Info");
      //getLoginStatus(params)
      //  .then((res) =>{
      //    if(res.code == 1){
      //      this.$router.push("/Info");
      //      this.notify("登录成功","success");
      //    }else{
      //      this.notify("登录失败","error");
      //    }
      //  });
    }
  }
}
</script>
<style scoped>
.login-wrap {
  position: relative;
  background: url("../assets/img/background.jpg");
  background-attachment: fixed;
  background-position: center;
  border-style: cover;
  width: 100%;
  height: 100%;
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin-left: -190px;
  margin-top: -150px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn{
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
</style>


