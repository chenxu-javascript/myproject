<template>
  <f7-page  class="page-orderinfo">
    <div class="user-info">
      <img class="userimg" src="https://aa.edgaradou.com/rsconfig/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg" alt="">
      <div class="username">绿豆</div>
    </div>

    <div class="user-state">
      <div v-for="item in state">{{item}}</div>
    </div>

    <div class="user-url">
      <a  class="user-url-item" href="" v-for="item in urlList">
        <div class="user-url-name">
          {{item.name}}
        </div>
        <i class="icon f7-icons user-url-icon">chevron_right</i>
      </a>
    </div>


    <div class="user-url user-setting">
      <i class="icon f7-icons user-url-set">settings</i>
      <a  class="user-url-item" href="" >
        <div class="user-url-name">
          设置
        </div>
        <i class="icon f7-icons user-url-icon">chevron_right</i>
      </a>
    </div>

    
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7Toolbar, f7Tabs, f7Tab, f7Link, f7PageContent, f7Segmented, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';

  export default {
    data() {
      return {
        state: ['待付款', '待收获', '退/换货', '我的订单'],
        urlList: [
          { id: 1, name: '我卖出的', url: '' },
          { id: 2, name: '我买到的', url: '' },
          { id: 3, name: '我的二维码', url: '' },
          { id: 4, name: '我的小程序码', url: '' },
          { id: 5, name: '我的粉丝', url: '' },
          { id: 6, name: '我的地址', url: '' },
        ]
      }
    },
    create() {
      
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
.page.page-orderinfo{
  background: #fff;
  .user-info{
    height: 3.2rem;
    width: 100%;
    background-color: #715337;
    position: relative;
    .userimg{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      margin-left: 20px;
      margin-top: 1.2rem;
      display: inline-block;
    }
    .username{
      position: absolute;
      left: 2.3rem;
      top: 1.6rem;
      color: #fff;
      font-size: 16px;
    }
  }
  .user-state{
    display: flex;
    justify-content: space-around;
    color: #333;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 15px;
  }
  .user-url{
    position: relative;
      &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: auto;
        right: auto;
        top: 0;
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
    .user-url-item{
      position: relative;
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
      padding: 8px 0;
      display: flex;
      color: #333;
      justify-content: space-between;
      align-items: center;
      padding-left: 40px;
    }
    .user-url-name{
      line-height: 2;
      font-size: 16px;
    }
    .user-url-icon{
      color: #666;
      font-size: 14px;
      padding-right: 20px;
    }
  }
  .user-setting{
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    .user-url-set{
      position: absolute;
      left: 10px;
      color: #666;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
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

