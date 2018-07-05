<template>
  <f7-page infinite :infinite-distance="50" :infinite-preloader="showPreloader" @infinite="loadMore">
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
        <span class="nav-title">四楼仓库</span>
      </f7-nav-left>
      <f7-subnavbar :inner="false" class="no-hair">
        <f7-searchbar
          placeholder="搜索名称/手机号"
          :disable-button="false"
          no-hairline
          search-container=".search-list"
          search-in=".item-title"
        ></f7-searchbar>
      </f7-subnavbar>
      
    </f7-navbar>
    <div class="stocksearch-content">
      <div class="content-tips">【向左滑动】选项可打电话或发短信</div>
      <f7-list>
        <f7-list-item
          swipeout
          class="stocksearch-list"
          v-for="todo in items"
          :key="todo"
          >
          <div slot="content" class="stocksearch-list-items">
            <div class="stocksearch-list-item">
              <div class="title text-ellipsis">春款男修身直筒亚</div>
              <div class="stock text-ellipsis">客户积分：1560</div>
              <div class="stock-num text-ellipsis">客户欠款： <span class="red">¥ 0.99</span></div>
              <div class="stock-num text-ellipsis">建立日期： 2018-09-04</div>
            </div>
            <div class="item-after">
              <i class="icon f7-icons">star</i>
            </div>
          </div>
          
          <f7-swipeout-actions right>
            <f7-swipeout-button class="email">
              <i class="icon f7-icons">email</i>
            </f7-swipeout-button>
            <f7-swipeout-button class="phone">
              <i class="icon f7-icons">phone</i>
            </f7-swipeout-button>
          </f7-swipeout-actions>
        </f7-list-item>
      </f7-list>
    </div>


    <f7-toolbar class="footer-toolbar">
      <div class="total">
        <span class="total-number">
          客户总数:  <font> 20</font>
        </span>
      </div>
      <div class="tool-btn clearfix">
        <f7-link  class="fl">客户积分规则</f7-link>
      </div>
    </f7-toolbar>
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7SwipeoutActions, f7SwipeoutButton,f7Link, f7Toolbar, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';

  export default {
    data() {
      return {
        allowInfinite: true,
        lastItem: 10,
        showPreloader: true,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }
    },
      methods: {
      loadMore() {
        const self = this;
        if (!self.allowInfinite) return;
        self.allowInfinite = false;

        setTimeout(() => {
          if (self.items.length >= 200) {
            self.showPreloader = false;
            return;
          }

          const itemsLength = self.items.length;

          for (let i = 1; i <= 10; i += 1) {
            self.items.push(itemsLength + i);
          }

          self.allowInfinite = true;
        }, 1000);
      },
    },
    components: {
      f7Page,
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
  .swipeout-actions-right{
    .email{
      background: #8370e3;
      padding: 0 15px !important;
    }
    .phone{
      background: #f7c945;
      padding: 0 15px !important;
    }
  }
  .total-number{
    font-size: 15px;
    color: #333;
  }
  .tool-btn{
    a{
      font-size: 15px;
      color: #48aaf3;
    }
  }
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


  .ios .stock-list{
    margin: auto;
    .item-list-after{
      padding: .15rem 0;
      .item-content{
        padding-left: 20px;
      }
      .item-after{
        font-size: 13px;
      }
      .item-media+.item-inner{
        margin-left: 12px;
      }
    }
  }
</style>

<style lang="less">
  .ios .no-hair .searchbar{
    background: #fff;
    input{
      background: #f7f7f7;
    }
  }
  .content-tips{
    background: #f5f4f9;
    color: #aaa;
    font-size: 14px;
    line-height: 1.5;
    padding: 4px;
  }
  .ios .list{
    margin-top: 0;
  }
  // .ios .swipeout-content{
  //   display: none;
  // }
  .ios .swipeout-content{
    width: 100%;
    .item-content{
      padding-left: 0;
      .item-inner{
        display: none;
      }
      .stocksearch-list-items{
        width: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
  .ios .stocksearch-content{
    background: #fff;
    .stocksearch-list{
      padding: 0 10px;
      display: flex;
      align-items: center;
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
      .stocksearch-list-img{
        width: 140px;
        img{
          padding: 20px;
        }
      }
      .stocksearch-list-item{
        flex: 1;
        min-width: 0;
        line-height: 1.8;
        padding: 10px 0;
        .stock-num{
          font-size: 13px;
          width: 100%;
          color: #666;
        }
        .title {
          font-size: 16px;
          width: 100%;
          color: #000;
        }
        .stock{
          font-size: 13px;
          color: #333;
        }
        .color-font{
          color: #e5973b;
        }
        .red{
          color: red;
        }
      }
    }
  }
  .ios .stocksearch-navbar{
    margin-top: -2px;
    padding-top: 2px;
    background: #f7f7f8;
    width: 100%;
    position: absolute;
    left: 0;
    top: 88px;
    z-index: 501;
    box-sizing: border-box;
    background: #fff;
    .stock-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      padding: 8px 0;
      .stock-item-list{
        flex: 1;
        text-align: center;
        .stock-item-name{
          color: #b6b6be;
          font-size: 13px;
          font-weight: 400;
        }
        .stock-item-num{
          color: #e24528;
          font-size: 16px;
          font-weight: 500;
        }
      }
      &.stock-header{
        padding: 0px 15px 6px 15px;
        .stock-item-list{
          font-size: 16px;
          color: #333;
        }
      }
    }
  }
  .ios .view .footer-toolbar .total{
    width: auto;
  }
  .text-ellipsis{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
  .ml20{
    margin-left: 20px !important;
  }
  .ml10{
    margin-left: 10px;
  }
</style>