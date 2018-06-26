<template>
  <f7-page>
    <f7-block class="row">
      <f7-col>
        <f7-button raised panel-open="left">Open left panel</f7-button>
      </f7-col>
    </f7-block>
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
  };
</script>
