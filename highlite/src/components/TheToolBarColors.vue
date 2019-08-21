<template>
  <div>
    <template v-if="colorPanelIsOpen">
      <v-container>
        <v-btn fab small color="#BEBEBE">
          <v-icon color="#F24343">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab dark color="#BEBEBE">
          <v-icon color="#EFE60B">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab dark color="#BEBEBE">
          <v-icon color="#717171">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab color="#BEBEBE">
          <v-icon color="#0DAF14">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab dark color="#BEBEBE">
          <v-icon color="#26B9E5">fiber_manual_record</v-icon>
        </v-btn>

        <v-btn small fab dark color="#BEBEBE">
          <v-icon>close</v-icon>
        </v-btn>
      </v-container>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['colorPanelIsOpen']),
  // computed: state => state.colorPanelIsOpen,
  // computed: {
  //   colorPanelIsOpen() {
  //     return this.$store.state.colorPanelIsOpen
  //   },
  // },
  data: () => ({
    moreColor: true,
  }),
  props: {
    // isOpen: Boolean,
  },
}
</script>

<style  scoped>
</style>