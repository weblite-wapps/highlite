<template>
  <div class="c--appBar">
    <div
      class="c--appBar-icon-panel"
      :style="{ 'background-color': isLoading ? 'white' : '#fd7500' }"
    >
      <loading
        v-if="isLoading"
        class="loading-container"
        :width="38"
        :height="40"
        :active.sync="isLoading"
        :is-full-page="false"
      ></loading>
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
          <v-list-item @click="save">
            <v-list-item-title>Save</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import { mapState, mapMutations } from 'vuex'
import { eventBus } from './bus'
import { setInitialData } from '../helpers/typesUtils'
import debounce from 'debounce'
export default {
  data: () => ({
    title: '',
  }),
  components: {
    Loading,
  },
  mounted() {
    eventBus.$on(setInitialData, data => {
      this.title = data.title
    })
  },
  props: {
    save: Function,
  },
  computed: mapState(['isLoading']),
  methods: {
    ...mapMutations(['setCustomizeIsOpen', 'setNoteTitle', 'setIsLoading']),
  },
  watch: {
    title: debounce(function() {
      this.setNoteTitle(this.title)
      this.setIsLoading(true)
    }, 100),
  },
}
</script>

<style  scoped>
.c--appBar {
  display: flex;
  margin: 16px 17px 15px 0px;
  height: 40px;
  width: 100%;
}

.c--appBar-icon-panel {
  width: 40px;
  height: 40px;
  background-color: ;
  border-radius: 25px;
}

.c--appBar-icon {
}

.c--appBar-header-panel {
  background-color: #ffb100;
  font-size: 20px;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  margin-left: 10px;
  /* margin-top: 18px; */
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
  /* color: white; */
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
  .c--appBar-header-panel {
  }
}

.loading-container {
  width: 10px;
  height: 10px;
}
</style>