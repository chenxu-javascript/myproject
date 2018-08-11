<template>
  <f7-page class="information">
    <f7-navbar >
      <f7-nav-left class="back-icon">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
        <span class="nav-title">组织架构demo</span>
      </f7-nav-left>
    </f7-navbar>
    <ul id="demo">
      <item
        class="item"
        :model="treeData">
      </item>
    </ul>

  </f7-page>
</template>
<script>
  import item from './../components/treeMore';
  import { f7Page, f7List, f7Toggle, f7SwipeoutActions, f7SwipeoutButton,f7Link, f7Toolbar, f7Button, f7ListItem, f7Icon, f7Navbar, f7BlockTitle, f7Block, f7NavLeft, f7Row, f7Col, f7Searchbar, f7Subnavbar } from 'framework7-vue';
  const data = {
      name: 'My Tree',
      children: [
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' }
              ]
            },
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' }
              ]
            }
          ]
        }
      ]
  }

  export default {
    data: function () {
      return { 
        treeData: data 
      }
    },
    components: {
      item,
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

</style>

<style lang="less">
  
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
      
</style>