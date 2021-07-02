<template>
 <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <!--头像-->
        <img src="../assets/logo.png" alt />
      </div>
      <!--添加表单-->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        class="login_form"
        label-width="0px"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.userTel" prefix-icon="iconfont icondenglu"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.userPassword" prefix-icon="iconfont iconmima" type="password"></el-input>
        </el-form-item>

          <div class="RadioBox">
        
      
        
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          
           <el-button type="info" @click="register">注册</el-button>
        </el-form-item>
            </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default{
     data() {
    return {
      loginForm: {
        userId:"",
        userName: "admin",
        userTel:"",
        userEmail:"",
        userPassword: "123456",
        identity: ""
      },      
      loginRules: {
        userTel: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" }
        ],
        userPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 8, message: "密码为 6~8 位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
   register() {

     this.$router.push('/register');

     
      
    },
    login() {    
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) {          
          return;
        }
          
          console.log("这里是要向接口传递的数据：")
        console.log(this.loginForm)
  

          const {data :res} = await this.$http.post("/user/login", this.loginForm);    //把data里的loginForm对象传递到login接口（作为函数的参数）     
        //没有后台await之后的都没办法执行

              console.log(res)

         if (res== true ) {              
           window.sessionStorage.setItem('flag','ok'); // session 放置
          window.sessionStorage.setItem('user',res.user);//session存储user对象          
           this.$message.success("登陆成功！！！");//操作成功，出现element UI成功提示框
           this.$router.push({ path: "/Home"});//跳转
         }else{     
          this.$message.error("登录失败！！！");//操作失败，出现element UI失败提示框
         }
      });



    }
  }
}
</script>

<style lang="less" scope>
.RadioBox{

}

// 跟节点样式
.login_container {
 width: 100%;
    height: 100%;
    background-image: url(../assets/login-bg.jpg);
    background-size: 100%;

}
// 登录框
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;// 圆角
  position: absolute;// 绝对定位
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);// 根据自己位置 以自己为长度位移
  // 头像框
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%; // 加圆角
    padding: 10px;
    box-shadow: 0 0 10px #ddd;// 盒子阴影
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0ee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%; // 加圆角
      background-color: #eee;
    }
  }
  .btns {
    display: flex;// 弹性布局
    justify-content: flex-end; // 尾部对齐
  }
  .login_form {
    position: absolute;
    bottom: 0%;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;// 设置边框
  }
}

</style>
