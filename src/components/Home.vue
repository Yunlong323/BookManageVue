<template>

  <el-container class="home-container">
        <el-header>

            <div>
            <img src="../assets/logo.jpg" alt class="logo_img" />
              <span >图书管理平台</span>
            </div>
                
                
         <el-button type="info" @click="logout">安全退出</el-button>
            
        
    
        </el-header>


        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>

</el-container>

</template>

<script>
export default{
    

    methods:{
        logout() {
      window.sessionStorage.clear();
      this.$router.push("/Login");
    }
    }
}
</script>

<style lang = "less" scope >

/* .logo_img {
  width: 10%;
  height: 100%;
  text-align: left;
} */

.home-container{
    height: 100%;
}
.logo_img{
  width:55px;
  height: 60px;
}

.el-header {
display: flex;
justify-content: space-between;

 background-color: #B3C0D1;
 font-size:20px;
 color:#fff ;
  padding-left: 0%; 
  >div { 
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
      
    }
  }
}

  
  .el-aside {
    background-color: #8bbffa;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  } 


</style>
