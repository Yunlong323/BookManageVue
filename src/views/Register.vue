  <template>
   <div class="register-wrap">
        <div class="ms-register">
            <div class="ms-title">图书管理系统</div>
              <el-form :model="param" :rules="rules" ref="register" label-width="80px" class="ms-content">
                  
                  
                  
                  <el-form-item prop="username" label="用户名">

                    <el-input v-model="param.username" placeholder="请输入昵称">
                      </el-input>
                  </el-form-item>
                  
                  
                  
                  <el-form-item prop="phone" label="手机号">
                      <el-input v-model="param.phone" placeholder="请输入手机号">
                      </el-input>
                  </el-form-item>

                  <el-form-item prop="email" label="邮箱">

                    <el-input v-model="param.email" placeholder="请输入邮箱">
                      </el-input>
                  </el-form-item>




                  <el-form-item prop="password" label="密码">
                    <el-input type="password" v-model="param.password" autocomplete="off" placeholder="请输入密码">
                    </el-input>
                  </el-form-item>

                  <el-form-item prop="checkPass" label="确认密码">
                    <el-input type="password" v-model="param.checkPass" autocomplete="off" placeholder="请输入确认密码">
                    </el-input>                    
                  </el-form-item>

                  <el-form-item>
                    <div class="other-btn">
                         <el-button type="primary" @click="registerByPhone('register')">注册</el-button>
                      <el-button type="primary" @click="goBack()">返回</el-button>
                    </div>
                  </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default{
     data() {
        // 带用户名的注册：用户名不为空，不能有空格，不能纯数字，不能有特殊字符

        /*callback没有被定义*/
        // let validateUsername = (value, callback) => {
        //     if (value === '') {
        //         callback(new Error('请输入用户名'));
        //     } else if (value.indexOf(" ") !== -1) { // 有空格
        //         callback(new Error('用户名不能有空格'));
        //     }else {
        //         this.$store.dispatch('isUsernameRegistered', value)
        //         .then(() => {
        //           callback();
        //         })
        //         .catch(() => {
        //           callback(new Error('该用户名已被绑定过'));//callback就是小红字
        //         });
        //     }
        // }
        // todo 密码长度不小于 8 位，不大于 32 位，需要包含字母和数字。
        let validatePass = ( value, callback) => {
        //   if (value === '') {
        //     callback(new Error('请输入密码'));
        //   } else {
        //     if (this.param.checkPass !== '') {
        //       this.$refs.register.validateField('checkPass');
        //     }
        //     callback();
        //   }
        };
        let validatePass2 = (value, callback) => {
        //   if (value === '') {
        //   //  callback(new Error('请再次输入密码'));
        //   } else if (value !== this.param.password) {
        //   //  callback(new Error('两次输入密码不一致!'));
        //   } else {
        //     //callback();
        //   }
        };//先对一个用户名，两个密码做有效性验证
        return {
            param: {
                username: "",
                phone: '',
                email: '',
                password: '',
                checkPass: '',
            },
            rules: {
                username:[
                    {required:true,message:"请输入用户名",trigger:"blur"}
                ]
                ,
                phone: [
                    { required: true, message: "请输入手机号码", trigger: "blur" },
                    // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: "请输入邮箱", trigger: "blur" } //邮箱和手机号必须
                ],
                password: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                checkPass:[
                   { required: true, validator: validatePass2, trigger: 'blur' }
                ]
            },
            
        };
        
    },
    methods: {
        registerByPhone(formName) {
            this.$message.success("这里的功能不行啊啊啊啊啊啊啊")
          
            // this.$refs[formName].validate(valid => {
            //     if (valid) {
            //         this.$store.dispatch('registerByPhone', this.param)
            //         .then(res => {
            //           this.$message.success(res.msg);
            //           this.resetForm('register');
            //           this.$store.dispatch('exitLogin')
            //             .then(res=>{
            //               this.$router.push("/Login");
            //               // this.goBack(-1);
            //             })
            //             .catch(err => {
            //               this.$message.error(err.msg);
            //             });
            //         })
            //         .catch(err => {
            //           console.log(err);
            //           this.$message.error(err.msg);
            //         });
            //     } else {
            //         this.$message.error("注册发生错误，请仔细检查信息");
            //     }
            // });
        },
        goBack(){
          this.$router.go(-1);
        }
    }
};

</script>

<style>
.register-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #000;
    border-bottom: 1px solid #ddd;
}
.ms-register {
    position: absolute;
    left: 50%;
    top: 40%;
    width: 400px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.other-btn {
    display:flex;
    align-items:center;
    justify-content:space-between; /* space-around */
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  this.$refs.loginFormRef.validate(async valid =>{
//            const user  = {
//         "username": this.loginForm.username,"password":this.loginForm.password
//         }
//              this.$http.post("register",user);
//       } )
     
