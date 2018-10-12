<template>
  <f7-page  class="page-newadd">
    <div class="header-info">
      <img class="header-img" src="https://zhubishop.zbjimg.com/zhubi%2Fzhubishop%2Fbanner1.jpg%2Forigine%2F96523d3a-13e4-4ee4-a03d-84db5db47d5b" alt="图片">
    </div>

    <div class="add-info">
      <span class="add-title">新加入</span>
      <button class="button newaddbtn">我要加入</button>
    </div>

    <div class="addinfo-horizontal">
      <div class="scrolll-horizontal">
        <div class="main-content" v-for="(item,index) in dataList" :key="index">
          <div class="content-item">
            <div class="addinfo-main">
              <div class="block-left-img">
                <img src="http://img0.imgtn.bdimg.com/it/u=3701656396,449083526&fm=27&gp=0.jpgg" alt="">
              </div>
              <div class="block-right-info">
                <p>杭州爱后低落科技有限公司</p>
                <!-- <p>152XXX5678</p> -->
              </div>
            </div>
            <div class="companyName">
              杭州爱后低落科技有限公司
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-all">
      <div class="main-conents-left">
        <div class="width-aa">
           <div class="main-content" v-for="(item,index) in dataList" :key="index">
          <div class="content-item">
            <div class="addinfo-main">
              <div class="block-left-img">
                <img src="http://img0.imgtn.bdimg.com/it/u=3701656396,449083526&fm=27&gp=0.jpgg" alt="">
              </div>
              <div class="block-right-info">
                <p>杭州爱后低落科技有限公司</p>
                <!-- <p>152XXX5678</p> -->
              </div>
            </div>
            <div class="companyName">
              杭州爱后低落科技有限公司
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="main-conents-right">
        <div class="main-ABC">
          <ul>
            <li v-for="(item, index) in list" :key="index" @click="addClass($event)">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7Toolbar, f7Tabs, f7Tab, f7Link, f7PageContent, f7Segmented, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';

  export default {
    data() {
      return {
        state: ['待付款', '待收获', '退/换货', '我的订单'],
        dataList: [
          { id: 1, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 2, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 3, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 4, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 5, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 6, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 7, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 8, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 9, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 10, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' },
          { id: 11, companyName: '杭州爱后低落科技有限公司', imgUrl: 'http://placehold.it/600x300/0f0/ccc.png', phone: '152XXX5678' }
        ],
        list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      }
    },
    create() {
      
    },
    methods: {
      addClass(e) {
        this.$f7.$(e.currentTarget).addClass('active').siblings().removeClass('active');
      }
    },
    components: {
      f7Page,
      f7Tabs,
      f7Tab,
      f7PageContent,
      f7Link,
      f7Navbar,
      f7BlockTitle,
      f7Block,
      f7NavLeft,
      f7Row, 
      f7Col,
      f7List, 
      f7Icon,
      f7ListItem,
      f7Toolbar,
      f7Button,
      f7Searchbar, 
      f7Subnavbar,
      f7Segmented
    },
  };
</script>
<style lang="less">
.page.page-newadd{
  background: #fff;
  .header-info{
    height: 3.2rem;
    width: 100%;
    background-color: #715337;
    position: relative;
    .header-img{
      width: 100%;
      height: 100%;
    }
  }
  .add-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: .8rem;
    position: relative;
    .add-title{
      font-size: 18px;
      color: #000;
    }
    .newaddbtn{
      width: auto;
      .ios &{
        border-color: #eee;
        color: #666;
        font-size: 13px;
        height: 25px;
        line-height: 24px;
      }
    }
    &::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      right: auto;
      top: auto;
      height: 1px;
      width: 100%;
      background-color: #f2f2f2;
      display: block;
      z-index: 15;
      transform-origin: 100% 50%;
      html.pixel-ratio-2 & {
          transform: scaleX(0.5);
      }
      html.pixel-ratio-3 & {
          transform: scaleX(0.33);
      }
    }
  }
  .addinfo-horizontal{
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    margin: 10px 0 10px 10px;
    
  }

  .main-content{
      display: inline-flex;
      overflow: hidden;
      //height: 100%;
      &:not(:first-child){
        margin-left: 5px;
      }
      &:last-child{
        margin-right: 10px;
      }
      background: #eee;
      border-bottom-right-radius: .5rem;
      border-top-right-radius: .5rem;
      .addinfo-main{
        display: flex;
        width: 3.2rem;
        padding-top: 10px; 
        .block-left-img{
          width: 1.5rem;
          height: 1.5rem;
          margin-left: 5px;
          border-bottom-right-radius: .4rem;
          border-top-right-radius: .4rem;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .block-right-info{
          text-align: center;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          p{
            white-space: normal;
            font-size: 10px;
            margin: 0.5em 0;
          }
        }
      }
      .companyName{
        font-size: 10px;
        text-align: center;
        padding: 5px 0;
      }
    }
  .main-all{
    padding-bottom: 20px;
    background: #eee;
    width: 100%;
    // height: 100%;
    box-sizing: border-box;
    display: flex;
    .main-conents-left{
      // width: calc(~"6.4rem + 20px") ;
      padding-left: .05rem; 
      // height: 100%;
      overflow: auto;
      width: 6.7rem;
      .main-content{
        background: #fff;
        margin-left: .1rem;
        margin-top: 10px;
      }
      .width-aa{
        width: auto;
      }
    }
    .main-conents-right{
      //width: .5rem;
      // flex: 1;
      height: 100%;
      position: fixed;
      right: 0;
      width: 0.75rem;
      overflow: auto;
      ul{
        margin: 0;
        padding: 0;
        li{
          width: 100%;
          text-align: center;
          list-style: none;
          font-size: 12px;
          line-height: .6rem;
          height: .6rem;
          font-weight: 400;
          &.active{
            background: red;
          }
        }
      }
    }
  }

}

</style>
<style lang="less">
  .clearfix:before,
  .clearfix:after{
    display: table;
    content: "";
  }
  .clearfix:after{
    clear: both;
  }
  .fl{
    float: left;
  }
  .ios .view .navbar{
    background: #48aaf3;
    .left{
      color: #fff;
      font-weight: 500;
      &.back-icon{
        .nav-title{
          padding-left: 15px;
          display: inline-block;
        }
      }
    }
  }


</style>

