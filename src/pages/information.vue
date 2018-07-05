<template>
  <f7-page class="information">
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
        <span class="nav-title">账户信息</span>
      </f7-nav-left>
    </f7-navbar>

    <div class="tips">
      公司与logo信息
    </div>
    <f7-list class="infomation-list flex-common infomation-infos">
      <f7-list-item 
        link="#">
        <img slot="media" src="https://aa.edgaradou.com/rsconfig/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg" alt="头像">
        <div slot="inner"  class="item-list-label pt15 pb0">
          <span class="label-left ">公司名称</span>
        </div>
        <div slot="inner" class="item-list-label pb15 pt0">
          <span class="item-right"> 秦思科技</span>
        </div>
      </f7-list-item>
    </f7-list>

    <f7-link link="#" class="completeInfo">
      <i class="icon f7-icons">bolt_round_fill</i>
      点击完善公司信息
    </f7-link>
    <div class="tips">
      <span>当前账号</span>
    </div>
    <f7-list class="infomation-list flex-common">
      <f7-list-item  link="#">
        <div slot="inner"  class="item-list-label">
          <span class="label-left"> 账号</span>
          <span class="item-right"> tiyan</span>
        </div>
        <div slot="inner" class="item-list-label">
          <span class="label-left"> 姓名</span>
          <span class="item-right"> 体验账号</span>
        </div>
        <div slot="inner" class="item-list-label">
          <span class="label-left"> 手机号</span>
          <span class="item-right"> 15215174889</span>
        </div>
      </f7-list-item>
    </f7-list>


    <div class="tips">
      <span>账户安全</span>
    </div>
    <f7-list class="infomation-list">
      <f7-list-item title="修改登陆密码" link="#"></f7-list-item>
      <f7-list-item  title="手势密码">
        <f7-toggle slot="after" color="blue"></f7-toggle>
      </f7-list-item>
    </f7-list>
    
    <f7-button fill big color="red" class="login-out-btn">退出登录</f7-button>
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7Toggle, f7SwipeoutActions, f7SwipeoutButton,f7Link, f7Toolbar, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7Toggle,
      f7Navbar,
      f7BlockTitle,
      f7Block,
      f7NavLeft,
      f7Row, 
      f7Col,
      f7SwipeoutActions, 
      f7SwipeoutButton,
      f7List, 
      f7Icon,
      f7ListItem,
      f7Toolbar,
      f7Button,
      f7Searchbar, 
      f7Subnavbar,
      f7Link
    },
  };
</script>


<style lang="less">
  .clearfix:before,
  .clearfix:after{
    display: table;
    content: "";
  }
  .pt15{
    padding-top: 15px !important;  
  }
  .pb15{
    padding-bottom: 15px !important;  
  }
  .pt0{
    padding-top: 0px !important;  
  }
  .pb0{
    padding-bottom: 0px !important;  
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

<style lang="less">
  
  .information{
    .infomation-infos{
      img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      .item-media{
        padding: 10px;
      }
      .item-inner{
        padding-left: 0 !important;
      }
    }
    .completeInfo{
      i{
        font-size: 16px;
        color: #fcae23
      }
      color: #fcae23;
      font-weight: 400;
      font-size: 16px;
      line-height: 1;
      margin-left: 10px;
      margin-top: 5px;
      text-decoration: underline;
    }
    .tips{
      color: #666;
      height: 18px;
      line-height: 1;
      padding: 15px 10px 0 10px;
    }
    .login-out-btn{
      font-size: 18px;
      color: #fff;
      font-weight: 400;
      margin: 20px 10px;
    }
  }
  .ios .list.infomation-list {
    &.flex-common{
      .item-inner{
        flex-direction: column;
        align-items: stretch;
      } 
      .item-list-label{
        display: flex;
        height: 24px;
        line-height: 1.5;
        font-size: 16px;
        padding: 6px 15px;
        align-items: center;
        .label-left{
          width: 80px;
          color: #666;
          font-size: 14px;
          line-height: 25px;
        }
        .item-right{
          flex: 1;
          font-size: 17px;
          color: #000;
          font-weight: 400;
          line-height: 25px;
        }
      }   
    }
    margin: 0;
    font-size: 16px;
    .item-content{
      padding-left: 0;
      color: #333;
      .item-inner{
        padding-left: 15px;
      }
    }

  }
    
</style>