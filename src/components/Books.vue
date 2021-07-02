<template>

    <el-card class="box-card">
    <el-row style="height: 840px;">
      <search-bar class="search-bar" @onSearch="searchResult" ref="searchBar"></search-bar>

      <el-tooltip effect="dark" placement="right"
                  v-for="item in books.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.bookName}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.author}}</span> /
          <span>{{item.publisher}}</span> /ISBN
          <span>{{item.isbn}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.content}}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.img" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.bookName}}</a>
            </div>
          </div>
          <div class="author">{{item.author}}</div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="books.length">
      </el-pagination>
    </el-row>
    </el-card >

</template>

<script>
  import SearchBar from './SearchBar'
  import ViewSwitch from './ViewSwitch'


  export default {
    name: 'Books',
    components: {SearchBar, ViewSwitch},
    data () {
      return {
        books: [],
        currentPage: 1,
        pagesize: 18
      }
    },
    mounted: function () {
      this.loadBooks()
    },
    methods: {
      loadBooks () {
        let _this = this
        this.$http.get('http://localhost:8181/book/list').then(resp => {
            _this.books = resp.data
        })
      },
     
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
      },
      searchResult () {
        let _this = this

        this.$http.get('http://localhost:8181/book/search?keywords=' + this.$refs.searchBar.keywords, {
          }).then(resp => {
            _this.books = resp.data})
        // axios
        //   .get('http://localhost:8181/book/search?keywords=' + this.$refs.searchBar.keywords, {
        //   }).then(resp => {
        //     _this.books = resp.data
        // })
      }
    }
  }
</script>
<style scoped>
.box-card{
  width:100%;
  height:100%;
  background-color: antiquewhite;
}

/* .search-bar{
  width:1500px;
  height: 200px;
} */



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
