<template>
  <f7-page>
    <f7-navbar  >
      <f7-nav-left >库存</f7-nav-left>
    </f7-navbar>
    <f7-row no-gap class="mt10">
      <f7-col>
        <div class="item clearfix">
          <div class="icon-item">
            <i class="icon f7-icons star">star</i>
          </div>
          <div class="title-item">
            库存查询
          </div>
        </div>
        <div class="sub-item">
          负库存商品<span class="red"> 1</span>
        </div>
      </f7-col>

      <f7-col>
        <div class="item clearfix">
          <div class="icon-item">
            <i class="icon f7-icons ">bell_fill</i>
          </div>
          <div class="title-item">
            库存预警
          </div>
        </div>
        <div class="sub-item">
          预警商品<span class="red"> 9</span>
        </div>
      </f7-col>
    </f7-row>

    <f7-list   
      class="stock-list"
      no-hairlines
      no-hairlines-between>
      <f7-list-item link="/accordion/" title="库存流水" after="商品库存变化" class="item-list-after">
        <f7-icon slot="media" icon="f7-icons">star</f7-icon>
      </f7-list-item>
    </f7-list>
    <f7-row no-gap class="mt10">
      <f7-col>
        <div class="item clearfix">
          <div class="icon-item">
            <i class="icon f7-icons star">star</i>
          </div>
          <div class="title-item">
            采购进货
          </div>
        </div>
        <div class="sub-item">
          进货、增加库存
        </div>
      </f7-col>

      <f7-col>
        <div class="item clearfix">
          <div class="icon-item">
            <i class="icon f7-icons ">bell_fill</i>
          </div>
          <div class="title-item">
            采购退货
          </div>
        </div>
      </f7-col>
    </f7-row>
    <f7-row no-gap >
      <f7-col>
        <div class="item clearfix">
          <div class="icon-item">
            <i class="icon f7-icons star">star</i>
          </div>
          <div class="title-item">
            智能补货
          </div>
        </div>
        <div class="sub-item">
          补货预测
        </div>
      </f7-col>
      <f7-col></f7-col>

    </f7-row>

    <f7-row no-gap >
      <f7-col>
        <div class="item clearfix">
          <div class="icon-item">
            <i class="icon f7-icons star">star</i>
          </div>
          <div class="title-item">
            库存盘点
          </div>
        </div>
        <div class="sub-item">
          库存不准？盘点一下
        </div>
      </f7-col>

      <f7-col>
        <div class="item clearfix">
          <div class="icon-item">
            <i class="icon f7-icons ">bell_fill</i>
          </div>
          <div class="title-item">
            库存调拨
          </div>
        </div>
        <div class="sub-item">
          仓库间调货
        </div>
      </f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, } from 'framework7-vue';

  export default {
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
      f7ListItem
    },
  };
</script>


<style lang="less">
  .ios .view .navbar{
    background: #48aaf3;
    .left{
      color: #fff;
      font-weight: 500;
      padding-left: 10px;
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

<style lang="less" scoped>

  .page-content{
    background: #f5f4f9;
    .row {
      background: #fff;
      padding: 10px 0;
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
        background-color: #f1f1f1;
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
      .col{
        position: relative;
        padding: 3px 10px;
      }
      .col:first-child::after{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        left: auto;
        bottom: auto;
        width: 1px;
        height: 100%;
        background-color: #f1f1f1;
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
      .item{
        .icon-item{
          float: left;
          text-align: center;
          width: 50px;
        }
        .title-item{
          float: left;
          font-size: 18px;
          vertical-align: middle;
          color: #333;
        }
      }
        .sub-item{
          padding: 8px  0 0 50px;
          color: #999;
          font-size: 13px;
        }
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
  .red{
    color: red;
  }
  .mt10{
    margin-top: 10px;
  }
</style>