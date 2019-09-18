<template>
  <button
    :is="labeled? 'label': 'button'"
    :class="['toolbar-btn', { 'active': isActive , 'stretched-toolbar-btn': stretched}]"
    @click="$emit('click')"
  >
    <!-- 
    for button with a svg icon send imageSrc as prop
    for button with a inner color send innerColor as prop
    for customize with your inner element leave send your element as slot within button tags-->

    <img v-if="!!imageSrc" :src="imageSrc" />
    <div v-else-if="!!innerColor" class="inner-color" :style="{'background-color': innerColor}"></div>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    labeled: Boolean,
    imageSrc: String,
    innerColor: String,
    stretched: Boolean,
  },
}
</script>

<style  scoped>
button,
input,
label:focus {
  outline: 0;
}

label input {
  margin: auto;
  cursor: pointer;
}

.toolbar-btn {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  margin: 4px 0;
}

.stretched-toolbar-btn {
  min-width: 80px;
  height: 40px;
  border-radius: 20px;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  color: white;
  text-align: center;
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

label.toolbar-btn {
  display: inline-flex;
  cursor: pointer;
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

@media only screen and (max-width: 330px) {
  .toolbar-btn {
    width: 35px;
    height: 35px;
  }
}

</style>