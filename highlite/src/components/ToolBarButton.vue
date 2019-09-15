<template>
  <button class="toolbar-btn" :class="{ 'active': isActive }" @click="$emit('click')">
    <img v-if="!!imageSrc" :src="imageSrc" />
    <div v-else-if="!!innerColor" class="inner-color" :style="{'background-color': innerColor}"></div>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    imageSrc: String,
    innerColor: String,
  },
}
</script>

<style  scoped>
.toolbar-btn {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  display: inline-block;
  min-width: 35px;
  margin-bottom: 10px;
}
.inner-color {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  background-color: black;
}

.c--color-input {
  width: 20px;
}

.active {
  background-color: #ffb100;
}

.toolbar-btn:focus {
  outline: 0;
}
/* to fix svg icons positions */
.toolbar-btn img {
  margin-top: 6px;
}
@media only screen and (max-width: 300px) {
  .toolbar-btn {
    width: auto;
    height: auto;
    margin-right: auto;
  }
}

@media only screen and (min-width: 300px) and (max-width: 329px) {
  .toolbar-btn {
    width: auto;
    height: auto;
    margin-right: auto;
    margin-left: auto;
  }
}

@media only screen and (min-width: 400px) {
  .toolbar-btn {
    margin-right: 9px;
  }
}
</style>