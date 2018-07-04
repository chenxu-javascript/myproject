<template>
  <f7-page :page-content="false">
    <f7-navbar>
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
        <span class="nav-title">framework7-vue</span>
      </f7-nav-left>
    </f7-navbar>
    <f7-subnavbar :inner="false" class="no-hair purtabs">
      <f7-link class="tab-link button border-left-ra" tab-link="#tab-1" tab-link-active>默认</f7-link>
      <f7-link class="tab-link button" tab-link="#tab-2">已采购</f7-link>
      <f7-link class="tab-link button" tab-link="#tab-3">草稿</f7-link>
      <f7-link class="tab-link button border-right-ra" tab-link="#tab-4" >撤销</f7-link>
    </f7-subnavbar>
    <f7-tabs animated class="business-tabs">
      <f7-tab id="tab-1" class="page-content" tab-active>
        <div class="pur-list" v-for="item in list">
          <div class="flex">
            <div class="pur-list-icon">
              <i class="icon f7-icons star">star</i>
            </div>
            <div class="pur-list-content">
              <div class="pur-list-title">上海做一番</div>
              <div class="pur-list-item">
                <span>jhs9776666</span>
                <span class="pur-price">¥ 239.00</span>
              </div>
              <div class="pur-list-item">
                <span>2018-09-10 22:21:22</span>
                <span>四楼仓库</span>
              </div>
            </div>
          </div>
        </div>
        <f7-block class="flex-comnom">
          <div class="flex-more">暂无更多数据</div>
          <div class="f13 mt10 text-gray">查询时间 2018-06-01 至 2018-06-30</div>
        </f7-block>
      </f7-tab>

      <f7-tab id="tab-2" class="page-content">
        <div class="pur-list">
          <div class="flex">
            <div class="pur-list-icon">
              <i class="icon f7-icons star">star</i>
            </div>
            <div class="pur-list-content">
              <div class="pur-list-title">上海做一番</div>
              <div class="pur-list-item">
                <span>jhs9776666</span>
                <span>¥ 239.00</span>
              </div>
              <div class="pur-list-item">
                <span>2018-09-10 22:21:22</span>
                <span>四楼仓库</span>
              </div>
            </div>
          </div>
        </div>
      </f7-tab>
     </f7-tabs>
     
  </f7-page>
</template>

<script>
  import { f7Page, f7List, f7Tabs, f7Tab, f7Link, f7Subnavbar, f7Toolbar, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col } from 'framework7-vue';
  export default {
    data() {
      return {
        isPay: true,
        seen: false,
        list: [1,2,3]
      }
    },
    components: {
      f7Page,
      f7Navbar,
      f7Subnavbar,
      f7Link,
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
      f7Tabs, 
      f7Tab
    },
    methods: {
      toggle: function () {
        this.seen = !this.seen
      }
    }
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

</style>

<style lang="less">
  .flex-comnom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .flex-more{
      color: #666;
    }
    .text-gray{
      color: #9e9da2;
    }
  }
  .business-tabs{
    position: relative;
    &::before{
      content: '';
      width: 100%;
      height: 50px;
      top: 43px;
      position: absolute;
      z-index: 49;
      background: #efeff4;
    }
  }
  .pur-list{
    background: #fff;
    margin-top: 5px;
    .flex{
      align-items: center;
    }
    .pur-price{
      font-size: 18px;
      color: #e18e36;
      font-weight: 500;
    }
    .pur-list-icon{
      width: 50px;
      text-align: center;
    }
    .pur-list-content{
      flex: 1;
      padding: 10px 10px 10px 0;
      .pur-list-title{
        font-size: 16px;
        color: #333;
      }
      .pur-list-item{
        color: #8e8d92;
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        font-size: 14px;
        align-items: center;
      }
    }
  }
  .ios  .subnavbar.purtabs{
    top: 50px !important;
    display: flex;
    height: 37px;
    margin: 0 5px;
    border-radius: 10px;
    width : calc(~"100% - 10px");
    box-sizing: border-box;
    z-index: 50;
    &::after{
      display: none;
    }
    .button{
      flex: 1;
      border-radius: 0;
      border: none;
      color: #333;
      height: 36px;
      line-height: 36px;
      font-weight: 400;
      font-size: 16px;
      &.border-left-ra{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &.border-right-ra{
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      &.tab-link-active{
        background: #48aaf3;
        border-color: #48aaf3;
        font-weight: 500;
        color: #fff;
      }
    }
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
  .mb20{
    margin-bottom: 20px !important;
  }
  .mt10{
    margin-top: 10px !important;
  }
  .f13{
    font-size: 13px;
  }
  .ml10 {
    margin-left: 10px;
  }
  .flex{
    display: flex;
  }
</style>