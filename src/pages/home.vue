<template>
  <f7-page>
    <f7-block class="row">
      <f7-col>
        <f7-button raised panel-open="left">home open left</f7-button>
      </f7-col>
    </f7-block>

    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="About Framework7" link="/about/">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
      </f7-list-item>
      <f7-list-item title="库存" link="/stock/">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
      </f7-list-item>
      <f7-list-item title="采货单" link="/purorder/">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
      </f7-list-item>
      <f7-list-item title="库存查询" link="/stocksearch/">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
      </f7-list-item>
      <f7-list-item title="经营概况" link="/business/">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
      </f7-list-item>
      <f7-list-item title="tab" link="/tabs/">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
      </f7-list-item>
      <f7-list-item title="库存历史" link="/purhistory/">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  import { f7Page, f7Navbar, f7NavRight, f7BlockTitle, f7List, f7ListItem, f7Link, f7Searchbar, f7Icon, f7Block, f7Col, f7Button } from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7Navbar,
      f7NavRight,
      f7BlockTitle,
      f7List,
      f7ListItem,
      f7Link,
      f7Searchbar,
      f7Icon,
      f7Block, f7Col, f7Button
    },
    created() {
    }
  };
</script>
