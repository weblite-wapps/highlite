<template>
  <div class="c--appBar">
    <div
      class="c--appBar-icon-panel"
      :style="{ 'background-color': isLoading ? 'white' : '#fd7500' }"
    >
      <Loading
        v-if="isLoading"
        class="loading-container"
        :width="38"
        :height="40"
        color="#fd7500"
        :active.sync="isLoading"
        :is-full-page="false"
      ></Loading>
      <img v-else class="c--appBar-icon" src="a.svg" alt />
    </div>

    <div class="c--appBar-header-panel">
      <div class="c--appBar-header">
        <input type="text" v-model="title" placeholder="untitled" class="c--appBar-header-input" />
      </div>
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <div class="c--appBar-header-moreTools" v-on="on">
            <img src="3dot-vertical.svg" alt />
          </div>
        </template>
        <v-list>
          <!-- <v-list-item @click="()=> {}">
            <v-list-item-title>Send</v-list-item-title>
          </v-list-item>-->
          <v-list-item @click="()=> this.setCustomizeIsOpen(true)">
            <v-list-item-title>Customize Toolbar</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item @click="()=> {}">
            <v-list-item-title>Font Sizes</v-list-item-title>
          </v-list-item>-->
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
//components
import Loading from 'vue-loading-overlay'
//event handler
import { eventBus } from './bus'
//vuex
import { mapState, mapMutations } from 'vuex'
//utils
import { setInitialData } from '../helpers/typesUtils'
import debounce from 'debounce'
export default {
  components: {
    Loading,
  },
  data: () => ({
    title: '',
  }),
  computed: mapState(['isLoading']),
  watch: {
    title: debounce(function() {
      this.setNoteTitle(this.title)
      this.setIsLoading(true)
    }, 100),
  },
  mounted() {
    eventBus.$on(setInitialData, data => {
      this.title = data.title
    })
  },
  methods: {
    ...mapMutations(['setCustomizeIsOpen', 'setNoteTitle', 'setIsLoading']),
  },
}
</script>

<style>
.c--appBar {
  display: flex;
  margin: 16px 17px 15px 0px;
  height: 40px;
  width: 100%;
}

.c--appBar-icon-panel {
  min-width: 40px;
  height: 40px;
  border-radius: 25px;
}

.c--appBar-header-panel {
  background-color: #ffb100;
  font-size: 20px;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  margin-left: 10px;
  display: flex;
}

.c--appBar-header {
  width: 115px;
  height: 26px;
  color: white;
  letter-spacing: 4px;
  font: Bold 20px/26px Roboto;
  text-align: left;
  margin-left: 16px;
  margin-top: 6px;
  margin-bottom: 8px;
}

.c--appBar-header-moreTools {
  cursor: pointer;
  margin-right: 14.27px;
  margin-left: auto;
}

.c--appBar-header-input {
  outline: none;
}
::placeholder {
  color: #ffffff;
  font: Bold 16px Roboto;
}

@media only screen and (max-width: 349px) {
  .c--appBar-header-input {
    width: 150px;
  }
}

.loading-container {
  width: 10px;
  height: 10px;
}
</style>