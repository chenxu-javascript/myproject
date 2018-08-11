<template>
  <f7-page>
    
    <div class="stocksearch-content">
      <div class="content-tips">【向左滑动】选项可打电话或发短信</div>

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
 
</style>