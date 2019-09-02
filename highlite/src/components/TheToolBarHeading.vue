<template >
  <v-container v-if="hedingPanelIsOpen" justify-space-between>
    <v-row no-gutters>
      <v-col cols="3">
        <v-btn height="40" width="40" fab dark color="#BEBEBE">
          <v-icon @click="this.toggleDrawer" mr-1>menu</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="3">
        <v-btn fab max-height="40" max-width="90" dark color="#BEBEBE">ADD</v-btn>
      </v-col>

      <v-col cols="3">
        <v-btn fab max-height="40" max-width="90" dark color="#BEBEBE">PREV</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn fab max-height="40" max-width="90" dark color="#BEBEBE">NEXT</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({}),
  props: {},
  computed: mapState(['hedingPanelIsOpen']),
  methods: {
    ...mapMutations(['toggleDrawer']),
  },
}
</script>

<style  scoped>
</style>