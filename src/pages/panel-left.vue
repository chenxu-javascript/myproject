<template>
  <f7-page name="main">
    <div class="panel-header">
      <img src="https://aa.edgaradou.com/rsconfig/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg" alt="头像">
      <div class="username">
        <span>吉崽</span>
      </div>
      <div>
        <span class="usermember">
          <i class="icon f7-icons star">star</i>
            黄金会员
          <i class="icon f7-icons chevron_right">chevron_right</i>
        </span>
      </div>
    </div>
    <f7-list   
      no-hairlines
      no-hairlines-between>
      <f7-list-item link-close-panel link="/about/" title="购物车">
        <f7-icon slot="media" icon="f7-icons">collection</f7-icon>
      </f7-list-item>
      <f7-list-item link="/accordion/" title="我的订单">
        <f7-icon slot="media" icon="f7-icons">photos</f7-icon>
      </f7-list-item>
      <f7-list-item link="/accordion/" title="我的消息" class="item-link close-panel">
        <f7-icon slot="media" icon="f7-icons">bell_fill</f7-icon>
      </f7-list-item>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { f7Page, f7List, f7ListItem, f7Icon, f7Panel, f7View, f7Statusbar } from 'framework7-vue';

export default {
  components: {
      f7Page, f7List, f7ListItem,
      f7Panel,
      f7View,
      f7Statusbar,
      f7Icon
    },
  data () {
    return {
    }
  }
}
</script>
<style lang="less">
  .panel{
    box-shadow: 1px 0px 5px #666;
  }
  .ios .panel-backdrop{
    background: rgba(0,0,0,.3);
  }
  .ios .page{
    background: #fff;
    box-shadow: 4px 0 5px #000;
    .panel-header{
      text-align: center;
      margin-top: .8rem;
      color: #333;
      img{
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        display: inline-block;
      }
      .username{
        font-size: 20px;
        padding: .1rem 0;
      }
      .userlevel{
        font-size: 12px;
        color: #666;
      }
      .usermember{
        color: #999;
      }
      i{
        font-size: 12px;
      }
      .chevron_right{
        color: #999;
      }
    }
    .item-media{
      color: #666;
      i{
        font-size: .28rem;
      }
      span{
        font-size: .28rem;
        display: inline-block;
        margin-left: .15rem;
      }
    }
    .list .item-link .item-inner{
      background: none;
      .item-title{
        color: #666;
      }
    }
    .list-block .item-content{
      padding-left: 30px; 
    }
    .item-content{
      padding-left: .5rem;
    }
    .item-media .f7-icons{
      width: auto;
      height: auto;
    }
  }
</style>