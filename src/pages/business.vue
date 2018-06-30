<template>
  <f7-page >
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
        <span class="nav-title">重庆猪八戒网</span>
      </f7-nav-left>
    </f7-navbar>
    <div class="business-content">
      <div>
        <div>
          <i class="icon f7-icons"></i>
        </div>
        <div>
          <span>账户余额</span>
          <p>- 28.88 万</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    <f7-segmented raised>
      <f7-button tab-link-active>Link 1</f7-button>
      <f7-button>Link 2</f7-button>
      <f7-button>Link 3</f7-button>
      <f7-button>Link 4</f7-button>
    </f7-segmented>
  </f7-page>
</template>
<script>
  import { f7Page, f7List, f7Toolbar, f7Segmented, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';

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