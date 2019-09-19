<template>
  <nav>
    <v-navigation-drawer fixed :value="drawerIsOpen">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="c--drawer--item--title c--drawer--item--title__active">App 1</v-list-item-title>
          <v-list-item-title class="c--drawer--item--title">App 2</v-list-item-title>
          <v-list-item-title class="c--drawer--item--title">App 3</v-list-item-title>
          <v-list-item-title class="c--drawer--item--title">App 4</v-list-item-title>
          <v-list-item-title class="c--drawer--item--title">App 5</v-list-item-title>
          <v-list-item-title class="c--drawer--item--title">App 6</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>



<script>
//vuex
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['drawerIsOpen']),
  },
  methods: {
    ...mapMutations(['toggleDrawer']),
  },
}
</script>

<style>
.c--drawer--item--title__active {
  background-color: #d9d9d9;
}
</style>