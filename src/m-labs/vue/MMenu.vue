<template>
  <ul
    v-if="shown"
    class="MMENU"
    :style="`top: ${clientY}px; left: ${clientX}px`"
  >
    <li>
      <input type="text" ref="elementForFocus" @blur="hide()" />
    </li>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "MMenu",
  data() {
    return {
      shown: false,
      clientX: 0,
      clientY: 0,
    };
  },
  methods: {
    show(e) {
      this.clientX = e.clientX - 20;
      this.clientY = e.clientY - 20;
      this.shown = true;
      setTimeout(() => {
        this.$refs.elementForFocus.focus();
      }, 10);
    },
    hide() {
      this.shown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

.MMENU {
  list-style: none;
  z-index: 1;
  position: fixed;
  background-color: changeOpacity("main", -0.06);
  background-image: linear-gradient(
    0,
    changeOpacity("accent", -0.88) 0,
    changeOpacity("accent", -0.88) 100%
  );
  color: $color_text;
  text-align: $ui_direction;
  border-radius: $ui_radius;
  padding: 0;
  box-shadow: 0px 1px 6px 1px changeOpacity("text", -0.9);
  overflow: hidden;
  li {
    position: fixed;
    top: -400%;
    left: -400%;
  }
}
</style>
