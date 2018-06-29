<template>
  <f7-page>
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons">chevron_left</i> 
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
    </f7-navbar>

    <div class="stocksearch-content">
      <div class="stocksearch-list">
        <div class="stocksearch-list-img">
          <img src="" alt="">
        </div>
        <div class="stocksearch-list-item">
          <div class="title"></div>
          <div class="stock"></div>
          <div class="stock-num"></div>
          <div class="">
            <span>采购价：60</span>
            <span>批发购价：80</span>
          </div>
          <div>
            <span>采购价：60</span>
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
        isPay: true
      }
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
  .mt20{
    margin-top: 20px !important;
  }
  .mb20{
    margin-bottom: 20px !important;
  }
  .ml10 {
    margin-left: 10px;
  }
</style>