<template>
  <f7-page infinite :infinite-distance="50" :infinite-preloader="showPreloader" @infinite="loadMore">
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
        <span class="nav-title">四楼仓库</span>
      </f7-nav-left>
      <f7-subnavbar :inner="false" class="no-hair">
        <f7-searchbar
          placeholder="搜索商品"
          :disable-button="false"
          no-hairline
          search-container=".search-list"
          search-in=".item-title"
        ></f7-searchbar>
      </f7-subnavbar>
      
    </f7-navbar>
<div class="stocksearch-navbar">
        <div class="stock-item">
          <div class="stock-item-list"> 
            <div class="stock-item-name">库存数量</div>
            <div class="stock-item-num">1</div>
          </div>
          <div class="stock-item-list"> 
            <div class="stock-item-name">库存成本</div>
            <div class="stock-item-num">¥ 0.00</div>
          </div>
          <div class="stock-item-list"> 
            <div class="stock-item-name">库存预警</div>
            <div class="stock-item-num">176</div>
          </div>
        </div>
        <div class="stock-item stock-header">
          <div class="stock-item-list">默认</div>
          <div class="stock-item-list">名称</div>
          <div class="stock-item-list">货号</div>
          <div class="stock-item-list">库存量</div>
        </div>
      </div>
    <div class="stocksearch-content">
      <div class="stocksearch-list" v-for="todo in items">
        <div class="stocksearch-list-img">
          <img src="http://temp.im/100x100/4CD964/fff" alt="">
        </div>
        <div class="stocksearch-list-item">
          <div class="title text-ellipsis">春款男修身直筒亚麻修库春款男修身直筒亚麻修库</div>
          <div class="stock text-ellipsis">ch002</div>
          <div class="stock-num text-ellipsis">当前库存量： -24条</div>
          <div class="">
            <span class="inline-block">采购价：<font class="color-font">60</font></span>
            <span class="inline-block ml10">批发购价：<font class="color-font">60</font></span>
          </div>
          <div>
            <span>采购价：<font class="color-font">60</font></span>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7Toolbar, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';

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
      f7List, 
      f7Icon,
      f7ListItem,
      f7Toolbar,
      f7Button,
      f7Searchbar, 
      f7Subnavbar
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
  .ios .stocksearch-content{
    margin-top: 88px;
    background: #fff;
    .stocksearch-list{
      display: flex;
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
        .title, .stock-num{
          font-size: 16px;
          width: 100%;
        }
        .stock{
          font-size: 14px;
          color: #666;
        }
        .color-font{
          color: #e5973b;
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