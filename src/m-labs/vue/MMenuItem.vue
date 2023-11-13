<template>
  <li :class="`MMENUITEM ${type || ''}`">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "MMenuItem",
  props: ["type", "icon"],
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

li {
  @extend %semantic-colors;
  color: $color_text;
  margin: 2px 0;
  padding: 16px 20px;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
  white-space: pre;
  &:not(&:nth-of-type(2)) {
    border-top: 1px solid changeOpacity("text", -0.9);
  }
  i {
    margin: 0 6px;
  }
}
</style>
