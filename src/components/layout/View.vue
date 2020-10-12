<template>
  <v-content>
    <router-view />

    <layout-footer />
  </v-content>
</template>

<script>
  export default {
    name: 'LayoutView',

    components: {
      LayoutFooter: () => import('./Footer'),
    },
  }
</script>
