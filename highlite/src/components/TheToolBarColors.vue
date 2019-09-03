<template>
  <div>
    <template v-if="colorPanelIsOpen">
      <v-container>
        <v-btn fab small color="#BEBEBE" @click="() => this.emitColor({color:'red'})">
          <v-icon color="#F24343">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab dark color="#BEBEBE" @click="() => this.emitColor({color:'yellow'})">
          <v-icon color="#EFE60B">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab dark color="#BEBEBE" @click="() => this.emitColor({color:'PapayaWhip'})">
          <v-icon color="#717171">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab color="#BEBEBE" @click="() => this.emitColor({color:'#0DAF14'})">
          <v-icon color="#0DAF14">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab dark color="#BEBEBE" @click="() => this.emitColor({color:'#26B9E5'})">
          <v-icon color="#26B9E5">fiber_manual_record</v-icon>
        </v-btn>
        <v-btn small fab color="#BEBEBE" @click="() => this.emitColor({color:'rgb(0,0,0)'})">
          <v-icon>fiber_manual_record</v-icon>
        </v-btn>
        <!-- <v-btn small fab dark color="#BEBEBE">
          <v-icon>close</v-icon>
        </v-btn>-->
      </v-container>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {eventBus} from './bus'
import {backgroundColor} from '../helpers/typesUtils'
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
  methods: {
    emitColor(event) {
      eventBus.$emit(backgroundColor, event)
    },
  },
}
</script>

<style  scoped>
</style>