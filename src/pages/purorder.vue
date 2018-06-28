<template>
  <f7-page>
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons">chevron_left</i> 
        <span class="nav-title">采购单</span>
      </f7-nav-left>
    </f7-navbar>

    <f7-list   
      class="purorder-list"
    >
      <f7-list-item  title="供应商" after="上海做亦凡服装有限公司" class="item-list-after icon">
      </f7-list-item>
       <f7-list-item title="仓库" after="八楼仓库" class="item-list-after icon">
      </f7-list-item>
    </f7-list>

    <f7-list   
      class="purorder-list "
    >
      <f7-list-item  title="选择商品" class="item-list-after">
      </f7-list-item>
       <f7-list-item  class="item-list-after addAndshao">
         <div slot="title" class="add-icon">
            <f7-row>
              <f7-col>
                <i class="icon f7-icons">bolt</i> 
              </f7-col>
              <f7-col>
                <i class="icon f7-icons">bolt</i> 
              </f7-col>
            </f7-row>
         </div>
      </f7-list-item>
    </f7-list>


    <f7-list   
      class="purorder-list"
    >
      <f7-list-item  after="上海做亦凡服装有限公司" class="item-list-after icon">
        <div slot="title">
          结算账户
          <i class="icon f7-icons">bolt</i> 
        </div>
      </f7-list-item>
      <f7-list-item   class="item-list-after">
        <div slot="title">
          实付金额
          <i class="icon f7-icons">bolt</i> 
        </div>
        <span slot="after" class="clearfix">
          <div class="after-input fl">
          </div>
          <div class="after-pay fl ml10">
            {{isPay ? '已付' : '未付'}}
          </div>
        </span>
      </f7-list-item>
      <f7-list-item title="欠供应商款" after="¥ 0.00" class="item-list-after">
      </f7-list-item>
      <f7-list-item title="业务日期" after="2018-02-21" class="item-list-after icon">
      </f7-list-item>
    </f7-list>


    <f7-list   
      class="purorder-list mb20"
    >
      <f7-list-item  title="备注"  class="item-list-after ">
        <span slot="after" class="添加图片">
          <textarea name="textarea" id="textarea" cols="30" rows="10">

          </textarea>
        </span>
      </f7-list-item>
       <f7-list-item title="附件"  class="item-list-after add-picture-after">
        <span slot="after" class="add-picture">
          添加图片
        </span>
      </f7-list-item>
    </f7-list>

    <f7-toolbar class="footer-toolbar">
      <div class="total">
        <span class="total-number">
          合计: 0
        </span>
        <span class="total-icon">
          ¥ 0.00
        </span>
      </div>
      <div class="tool-btn clearfix">
        <f7-button fill class="defalut fl">草 稿</f7-button>
        <f7-button fill class="purorder fl">采 购</f7-button>
      </div>
    </f7-toolbar>
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7Toolbar, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, } from 'framework7-vue';

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
      f7Button
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
  .ios .view .footer-toolbar{
    background: #fff;
    &::before{
      background: #eee;
    }
    .toolbar-inner{
      padding: 0 0 0 5px;
    }
    .total{
      display: flex;
      width: 120px;
      flex-direction: row;
      justify-content: space-around;
      height: 44px;
      align-items: center;
      .total-number{
        color: #333;
        font-size: 14px;
      }
      .total-icon{
        color: #f7640e;
        font-size: 22px;
      }
    }
    .tool-btn{
      .button{
        height: 44px;
        line-height: 44px;
        border-radius: 0; 
        padding: 0 20px;
        color: #fff;
        font-size: 500;
        &:first-child{
          margin-right: 1px;
        }
      }
      .defalut{
        background: #e1e3e2;
        color: #fff;
        border-color: #e1e3e2;
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
  .ios .purorder-list{
    margin: 10px 0 0;
    .item-list-after{
      .item-content{
        padding-right: 15px;
        .item-inner{
          padding-right: 0;
        }
      }
      &.add-picture-after{
        .item-after{
          flex-direction: row-reverse;
        }
      }
      .item-after{
        width: 4.8rem;
        padding-right: 0;
        color: #333;
        font-size: 16px;
        .add-picture{
          border: 1px solid #48aaf3;
          font-size: 12px;
          border-radius: 2px;
          padding: 2px 3px;
          color: #48aaf3;
          font-weight: 500;
          display: inline-block;
          float: right;
        }
      }
      .item-title{
        color: #666;
        font-size: 14px;
        i {
          font-size: 20px;
        }
      }
      .after-input{
        width: 3rem;
        border-bottom: 1px solid #48aaf3;
        height: 22px;
      }
      .after-pay{
        border: 1px solid #48aaf3;
        font-size: 12px;
        border-radius: 2px;
        padding: 2px 3px;
        color: #48aaf3;
        font-weight: 500;
      }
      textarea{
        resize: auto;
        height: 60px;
      }
      &.addAndshao{
        .item-title{
          width: 100%;
          .col{
            text-align: center;
            i{
              font-size: 28px;
            }
          }
        }
      }
      &.icon{
        .item-after{
          position: relative;
          &::after{
            content: "";
            width: 0;
            height: 0;
            border-bottom: .2rem solid #48aaf3;
            border-left: .2rem solid transparent;
            position: absolute;
            right: 0;
            bottom: -10px;
          }
        }
      }
    }
  }
  .mb20{
    margin-bottom: 20px !important;
  }
  .ml10 {
    margin-left: 10px;
  }
</style>