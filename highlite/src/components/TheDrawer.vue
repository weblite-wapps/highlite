<template>
  <nav>
    <v-navigation-drawer fixed :value="drawerIsOpen">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title active">App 1</v-list-item-title>
          <v-list-item-title class="title">App 2</v-list-item-title>
          <v-list-item-title class="title">App 3</v-list-item-title>
          <v-list-item-title class="title">App 4</v-list-item-title>
          <v-list-item-title class="title">App 5</v-list-item-title>
          <v-list-item-title class="title">App 6</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>



<script>
//vuex
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState(['drawerIsOpen']),
  },
  methods: {
    ...mapMutations(['toggleDrawer']),
  },
}
</script>

<style  scoped>
.active {
  background-color: #d9d9d9;
}
</style>