<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
          <img :src="getUrl" alt="">
           <ul>
             <router-link v-for="(list,index) in proList" :key="index" active-class="active"  tag="li"  :to="{path:'/proddetails/'+list.tag}">
                 {{ list.name }}     
             </router-link>
           </ul>
      </div>
    </div>
    <div class="detail-right">
      
       <router-view></router-view>
    </div>
   </div>
</template>

<script>
export default {
   name:"proddetails",
   data(){
       return{
        imgUrl:{
            "/proddetails/earth":require("../assets/images/1.png"),
            "/proddetails/loud":require("../assets/images/2.png"),
            "/proddetails/car":require("../assets/images/3.png"),
            "/proddetails/hill":require("../assets/images/4.png"),
        },
        proList:[
          {
            name:"开放产品",
            src:"../assets/images/1.png",
            url:"",
            tag:"earth"
          },
          {
            name:"品牌营销",
            src:"../assets/images/2.png",
            url:"",
            tag:"loud"
          },
          {
            name:"使命必达",
            src:"../assets/images/3.png",
            url:"",
            tag:"car"
          },
          {
            name:"勇攀高峰",
            src:"../assets/images/4.png",
            url:"",
            tag:"hill"
          }
        ]
       }
   },
   computed:{
       getUrl(){
           console.log(this.$route.path);
           return this.imgUrl[this.$route.path];
       }
   }

}
</script>

<style scoped>
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
    float: left;
    width: 200px;
    text-align: center;
}
.detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
}
.product-board {
    background: #fff;
    padding: 20px 0;
}
.product-board ul {
    margin-top: 20px;
}
.product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
    background: #4fc08d;
    color: #fff;
}
.product-board li a {
    display: block;
}
.sales-board {
    background: #fff;
}
.sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
}
.sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}
.sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
}
.sales-board-line {
    clear: both;
    padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.sales-board-des p {
    line-height: 1.6;
}
.sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
}
.sales-board-des li {
    padding: 5px 0;
}
.sales-board-table {
    width: 100%;
    margin-top: 20px;
}
.sales-board-table th {
    background: #4fc08d;
    color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>