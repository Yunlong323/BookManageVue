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
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu default-active="6">


          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">图书管理</el-menu-item>
          <el-menu-item index="3">用户管理</el-menu-item>
          <el-menu-item index="4">借阅管理</el-menu-item>
          <el-menu-item index="5">我的借阅</el-menu-item>
          <el-menu-item index="6" @click="goPersonalInfo">个人信息</el-menu-item>



        </el-menu>
  </el-aside>



    

            <el-main> 
              <Books class="books-area" ref="booksArea">
                </Books>
              </el-main>


        </el-container>

</el-container>

</template>

<script>

  import Books from '../components/Books'

export default{
  
 components: {Books},
    data(){

      return{
        iscollapse:false,
        menuList:[
          //菜单列表 create()加载页面的时候去查询
          
        ],

      }
    },    
    //就是onload  
    created(){
        this.getMenuList(); //后面可以根据MenuLisrt的逻辑来选择性的展示 
    },
    methods:{
        logout() {
      window.sessionStorage.clear();
      this.$router.push("/Login");
    },
    toggleCollapase(){
      this.iscollapse = !this.isCollapase;
    },

    getMenuList(){//  需要先去完善后台的支持，this.$http.get()来获取后台的/menus接口  所以后续要加个async
      console.log("需要完善的功能");
    },
    goPersonalInfo(){
        alert("跳转到个人信息也")
         this.$router.push("/UserInfo");
    },
    // //获取导航菜单的方法
    //  async getMenuList(){//  需要先去完善后台的支持，this.$http.get()来获取后台的/menus接口  所以后续要加个async
    //   const {data:res} = await this.$http.get("/menus");
    //   console.log(res);

    //     if (res.flag!=200) return this.$message.error("获取列表失败");
    //   //正常取出，把取出来的menu填入到咱们的menuList里面，让他去显示前端的页面

    //     this.menuList = res.menus;//这里需要跟后台约定json格式是 flag + menus
    // },



    }
}
</script>

<style lang = "less" scope >
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }

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
  .toggle-button{
     background-color:#4A5064;
  font-size: 10px;
  line-height: 24px;
  color:#fff;
     text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  }

  .cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  .el-icon-delete {
    cursor: pointer;
    float: right;
  }

  .switch {
    display: flex;
    position: absolute;
    left: 780px;
    top: 25px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }

</style>
