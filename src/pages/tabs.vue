<template>
  <f7-page :page-content="false">
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
        <span class="nav-title">重庆猪八戒网</span>
      </f7-nav-left>
    </f7-navbar>
    <div class="content-tabs mt6">
      <f7-link class="button" tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link class="button" tab-link="#tab-2" >Tab 2</f7-link>
      <f7-link class="button" tab-link="#tab-3" >Tab 3</f7-link>
      <f7-link class="button" tab-link="#tab-4" >Tab 4</f7-link>
    </div>
    <f7-tabs animated class="business-tabs">
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
        qqq
        </f7-block>
      </f7-tab>

      <f7-tab id="tab-2" class="page-content">
        <f7-block>
        333
        </f7-block>
      </f7-tab>

      <f7-tab id="tab-3"  class="page-content">
        <div class="business-data">
          <div class="business-income">
            <div class="business-items">
              <span>收 入： ¥ 36.89万</span>
              <span>支 出： ¥ 23.38万</span>
            </div>
            <div class="business-item-inner">
              <i class="icon f7-icons">chevron_right</i>
            </div>
          </div>
          <div class="business-income sales">
            <div class="business-items">
              <span>销售笔数： 24</span>
              <span>销售数量： 2318</span>
              <span>销售金额： ¥ 36.89万</span>
              <span>销售毛利： ¥ 36.89万</span>
            </div>
            <div class="business-item-inner">
              <i class="icon f7-icons">chevron_right</i>
            </div>
          </div>
        </div>
      </f7-tab>

      <f7-tab id="tab-4"  class="page-content">
        <div class="business-data">
          <div class="business-income">
            <div class="business-items">
              <span>收 入： ¥ 36.89万</span>
              <span>支 出： ¥ 23.38万</span>
            </div>
            <div class="business-item-inner">
              <i class="icon f7-icons">chevron_right</i>
            </div>
          </div>
          <div class="business-income sales">
            <div class="business-items">
              <span>销售笔数： 24</span>
              <span>销售数量： 2318</span>
              <span>销售金额： ¥ 36.89万</span>
              <span>销售毛利： ¥ 36.89万</span>
            </div>
            <div class="business-item-inner">
              <i class="icon f7-icons">chevron_right</i>
            </div>
          </div>
        </div>
      </f7-tab>
    </f7-tabs>

    
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7Toolbar, f7Tabs, f7Tab, f7Link, f7PageContent, f7Segmented, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';

  export default {
    data() {
      return {
        
      }
    },
    create() {
      debugger
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

<style lang="less">
  .ios .button{
    background: #f6f7fb;
    border-color: #d6d9df;
    color: #333;
    height: auto;
    padding: 10px 0;
    &.tab-link-active{
      background: #fff;
      border-color: #d6d9df;
      color: #333;
      border-bottom: none;
    }
  }
  .business-tabs.tabs-animated-wrap{
    background: #fff;
    height: 240px;
    >.tabs{
      height: 240px;
    }
    .page-content{
      padding-top: 0 !important;
    }
    .business-income{
      &.sales{
        .business-items{
          span{
            color: #666;
            font-size: 14px;
          }
        }
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .2rem .4rem;
      position: relative;
      .hairline(bottom, #e2e2e2);
      .business-items{
        display: flex;
        flex-direction: column;
      }
      .business-item-inner{
        i{
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
  .content-tabs{
    display: flex;
    a{
      flex: 1;
    }
    .button{
      border-radius: 0;
      border-left-width: 0;
      width: 100%;
    }
  }
  .business-content{
    background: #fff;
    .border-bottom{
      position: relative;
      .hairline(bottom, #e2e2e2);
    }
    &.cost{
      .right-border{
        position: relative;
        .hairline(right, #e2e2e2);
      }
      .business-item{
        padding: .2rem .4rem;
      }
      .salemoeny{
        display: flex;
        align-items: center;
        font{
          color: #ebbb4a;
          font-size: 16px;
          padding-left: 4px;
        }
        span{
          font-size: 12px;
          display: inline-block;
          color: #fff;
          line-height: 1.3;
          font-weight: 400;
          background: #ef7930;
          padding: 0 4px;
          border-radius: 4px;
        }
        i{
          font-size: 14px;
        }
      }
    }
    .business-titles{
      padding: 8px .4rem;
      position: relative;
      .hairline(bottom, #e2e2e2);
      span{
        vertical-align: bottom;
        display: inline-block;
        font-size: 16px;
        line-height: 1;
        color: #333;
        font-weight: 400;
      }
    }
  }
  .business-num {
    display: flex;
    padding: 0 .4rem;
    align-items: center;
    .business-num-icon{
      width: 40px;
      i{
        font-size: 36px;
      }
      
    }
    .business-num-title{
      padding: 6px 0;
      margin-left: 10px;
      h2{
        font-size: 14px;
        margin: 0;
        font-weight: 400;
        color: #333;
      }
      p{
        font-size: 20px;
        margin: 0;
        color: #f19437;
        line-height: 1.5em;
      }
    }
  }
  .business-row{
    display: flex;
    .business-item{
      flex: 1;
      padding: 0 .4rem;
      
      .business-name{
        font-weight: 400;
        color: #333;
        font-size: 14px;
        line-height: 1.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .business-val{
        font-weight: 400;
        color: #666;
        font-size: 16px;
        line-height: 1.5em;
      }
    }
  }
  .mt20{
    margin-top: 20px !important;
  }
  .mb20{
    margin-bottom: 20px !important;
  }
  .inline-block{
    display: inline-block;
  }
  .fr{
    float: right;
  }
  .ml20{
    margin-left: 20px !important;
  }
  .ml10{
    margin-left: 10px;
  }
  .mt6{
    margin-top: 6px;
  }
  .f14{
    font-size: 14px !important;
  }
  .f12{
    font-size: 12px !important;
  }
  .hairline(@position, @color) when (@position = right) {
    &:after {
        content: '';
        position: absolute;
        left: auto;
        bottom: auto;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: @color;
        display: block;
        z-index: 15;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        html.pixel-ratio-2 & {
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
        html.pixel-ratio-3 & {
          -webkit-transform: scaleY(0.33);
          transform: scaleY(0.33);
        }
    }
  }
  .hairline(@position, @color) when (@position = bottom) {
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: auto;
        top: auto;
        height: 1px;
        width: 100%;
        background-color: @color;
        display: block;
        z-index: 15;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        html.pixel-ratio-2 & {
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
        html.pixel-ratio-3 & {
          -webkit-transform: scaleY(0.33);
          transform: scaleY(0.33);
        }
    }
  }
</style>