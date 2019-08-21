<template>
  <nav>
    <v-navigation-drawer :permanent="isOpen" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>



<script>
// import Header from ;
export default {
  data: () => ({
    isOpen: true
  })
};
</script>

<style  scoped>
</style>