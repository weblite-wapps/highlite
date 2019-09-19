<template>
  <button
    :is="labeled? 'label': 'button'"
    :class="['c--btn', { 'c--btn__active': isActive , 'c--btn__stretched': stretched}]"
    @click="$emit('click')"
  >
    <!-- 
    for button with a svg icon send imageSrc as prop
    for button with a inner color send innerColor as prop
    for customize with your inner element leave send your element as slot within button tags-->

    <img v-if="!!imageSrc" :src="imageSrc" />
    <div
      v-else-if="!!innerColor"
      class="c--btn-inner-color"
      :style="{'background-color': innerColor}"
    ></div>
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

<style>
.c--btn {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  margin: 4px 0;
}

.c--btn__stretched {
  min-width: 80px;
  height: 40px;
  border-radius: 20px;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  color: white;
  text-align: center;
}
.c--btn-inner-color {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  background-color: black;
}

label.c--btn {
  display: inline-flex;
  cursor: pointer;
}

.c--color-input {
  width: 20px;
}

.c--btn__active {
  background-color: #ffb100;
}

/* to fix svg icons positions */
.c--btn img {
  margin-top: 6px;
}

@media only screen and (max-width: 330px) {
  .c--btn {
    width: 35px;
    height: 35px;
  }
}
</style>