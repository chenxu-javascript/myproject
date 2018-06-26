<template>
  <f7-page name="left-panel">
    <f7-block-title>LEFT PANEL</f7-block-title>
    <f7-block>
      <p>
        This is a side panel. You can close it by clicking outsite or on this link: <f7-link close-panel="left">close me</f7-link>. You can put here anything, even another isolated view like in <f7-link open-panel="right">Right Panel</f7-link>
      </p>
    </f7-block>
    <f7-block-title>FRAMEWORK7 KITCHEN SINK</f7-block-title>
    <f7-list>
      <f7-list-item v-for="(item, index) in items"
          media="<i class='icon icon-f7'></i>"
          link-close-panel
          link-view=".view-main"
          :link="item.link"
          :title="item.title"
          :key="index"
      ></f7-list-item>
    </f7-list>
    <f7-block>
      <p>
        Long text block goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem urna, gravida non scelerisque id, fringilla ac velit. Phasellus elementum a ipsum at ornare. Mauris sagittis rhoncus euismod. Integer convallis augue eu lacus ultrices, in dictum elit consequat. Nulla faucibus massa id felis egestas eleifend. Proin consequat dignissim magna ut scelerisque. Vestibulum ac lorem semper, posuere sapien nec, pharetra massa. Nulla a tellus facilisis, sollicitudin quam porta, aliquam lorem. Fusce dignissim eros ac diam molestie, ut ultrices lorem tristique. Ut facilisis augue ac nisi egestas malesuada. Nunc posuere tortor quis eleifend mollis. Aliquam erat volutpat. Donec feugiat elit tellus, nec convallis orci elementum in. Sed urna mi, vestibulum id tempus id, pretium et ante. Pellentesque eget sollicitudin ligula. Phasellus pellentesque velit eu porta suscipit.
      </p>
    </f7-block>
  </f7-page>
   
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
